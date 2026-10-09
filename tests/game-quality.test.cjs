/* Behavioral regression checks for economics, assets and game-stage feedback. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..');
function gameContext(seed=42){
 let n=seed;const random=()=>((n=(Math.imul(n,1664525)+1013904223)>>>0)/4294967296);
 const nodes=new Map(),events=[];
 const node=id=>{if(!nodes.has(id))nodes.set(id,{dataset:{},children:[],classList:{toggle(){},add(){},remove(){}},setAttribute(){},addEventListener(){},querySelectorAll(){return[];}});return nodes.get(id);};
 const context={console,Math:Object.assign(Object.create(Math),{random}),Date,Set,Map,WeakMap,Object,Array,JSON,Number,String,Boolean,Error,Promise,AbortController,Event,CustomEvent:class extends Event{constructor(name,options){super(name);this.detail=options?.detail;}},setTimeout,clearTimeout,localStorage:{getItem(){return null;},setItem(){},removeItem(){}},addEventListener(){},document:{documentElement:{dataset:{}},getElementById:node,addEventListener(){},querySelectorAll(){return[];}}};
 context.window=context;context.dispatchEvent=e=>events.push(e.type);context.events=events;
 vm.createContext(context);
 for(const file of ['story.js','strategies.js','partners.js','worldlines.js','worldline-engine.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
 let source=fs.readFileSync(path.join(root,'game.js'),'utf8');
 source=source.replace('window.AGIGame={','window.__quality={failureReason,renderCashLedger,goalItems,syncMusicScene,renderDecision,renderEnding,ensureOffers,currentChoices,updatePreview,setRun:value=>run=value,getRun:()=>run};window.AGIGame={');
 source=source.replace('render();if(isRevealing())scheduleReveal();addEventListener', 'if(isRevealing())scheduleReveal();addEventListener');
 vm.runInContext(source,context,{filename:'game.js'});return context;
}
const c=gameContext(),g=c.AGIGame,q=c.__quality;
const strategy=id=>c.AGI_STRATEGIES.find(t=>t.id===id);
for(const id of ['social-feed-smear','anonymous-rival-snark']){
 const t=strategy(id);assert.equal(t.revenue||0,0,id+' must not directly earn money');assert(t.cost>0);assert(t.delta.trust>0);assert(t.delta.risk>0);
 const result=g.settleQuarter(g.initial,0,null,[t]);assert(result.rawCash<g.initial.cash);
}
const before={cash:1000,research:120,trust:60,team:70,risk:10};
const choice={quarterDelta:{cash:-12,research:3,trust:1,team:0,risk:0}};
const selected=['deduplicate-data','social-feed-smear','anonymous-rival-snark'].map(strategy);
const settled=g.settleQuarter(before,12,choice,selected);
assert.equal(settled.rawCash,before.cash+settled.eventCash+settled.revenue-settled.operation);
assert.equal(settled.overhead,20);assert.equal(settled.recurring,15);
const ledger=q.renderCashLedger({...settled,before,after:settled.stats});
for(const label of ['策略收入','策略支出','持续业务收入','固定开销','期初资金','期末资金'])assert(ledger.includes(label));
for(const [stats,reason] of [[{...before,cash:0},'bankrupt'],[{...before,team:0},'burnout'],[{...before,risk:70},'lawsuit']]){
 assert.equal(q.failureReason(stats,8),reason);
 assert.equal(g.getEnding(stats,{},8,[],false,{route:'nvidia'}),'world_nvidia_fracture');
}
assert.equal(q.failureReason({...before,risk:70},5),null);
const ready={stats:{cash:800,research:450,trust:55,team:40,risk:0},hired:['a','b'],validated:true,index:32,validationTurn:31,lastModelChange:30};
assert(q.goalItems(ready).every(x=>x.met));
assert.equal(q.goalItems({...ready,validated:false,lastModelChange:31,validationTurn:30}).at(-1).value,'模型更新后待重测');
q.setRun({started:true,awaiting:false});q.syncMusicScene({...ready,ending:'world_independent_open'});
assert.equal(c.document.documentElement.dataset.musicScene,'ending');assert.equal(c.document.documentElement.dataset.endingMood,'success');
const count=c.events.length;q.syncMusicScene({...ready,ending:'world_independent_open'});assert.equal(c.events.length,count,'render must not restart ending music');
q.syncMusicScene({...ready,stats:{...ready.stats,cash:0},ending:'bankrupt'});assert.equal(c.document.documentElement.dataset.endingMood,'failure');
q.setRun({started:false});q.syncMusicScene();assert.equal(c.document.documentElement.dataset.musicScene,'cover');
// Replay a real first-quarter purchase. It unlocks next-quarter compute use even
// though none of the three company strategies purchased equipment.
const picks=[];
const cheapStrategies=s=>c.AGI_STRATEGIES.filter(t=>g.eligibleStrategy(t,s.index,s.hired,s.completed,s.usage,s.assets)&&!t.produces?.includes('compute')&&t.category!=='recruit'&&t.cost<25).slice(0,3).map(t=>t.id);
const first=c.AGI_STORY.catalog.find(e=>e.memeId===c.AGI_STORY.fixedEvents[0]);
const firstOffers=g.drawEventChoices(first,0);
picks.push({eventId:first.memeId,choice:firstOffers[0],choiceOffers:firstOffers,strategies:cheapStrategies(g.calculate([]))});
let mid=g.calculate(picks);assert.equal(mid.index,1);
const event=c.AGI_STORY.catalog.find(e=>e.year<=2021&&(e.availableQuarter||1)<=2&&g.choiceCandidates(e,1).some(o=>o.produces?.includes('compute')));
assert(event,'fixture needs an actual eligible equipment purchase');
const purchase=g.choiceCandidates(event,1).find(o=>o.produces?.includes('compute'));
const offers=g.drawEventChoices(event,1,mid.relations,mid.exposure,purchase.id);
picks.push({eventId:event.memeId,choice:purchase.id,choiceOffers:offers,strategies:cheapStrategies(mid)});
const after=g.calculate(picks);assert.equal(after.index,2);assert(after.assets.includes('compute'));
const computeStrategy=c.AGI_STRATEGIES.find(t=>t.requiredAssets?.includes('compute')&&g.eligibleStrategy(t,2,after.hired,after.completed,after.usage,after.assets));
assert(computeStrategy,'event-acquired compute must unlock a next-quarter operation');
assert(!g.eligibleStrategy(computeStrategy,2,after.hired,after.completed,after.usage));
// Every historical quarter must have valid five-choice sets and nine legal offers.
for(let index=0;index<24;index++){
 const year=2021+Math.floor(index/4),quarter=index%4+1;
 for(const e of c.AGI_STORY.catalog.filter(e=>e.year<year||e.year===year&&(e.availableQuarter||1)<=quarter)){
  const ids=g.drawEventChoices(e,index);assert.equal(ids.length,5);assert(g.validChoiceOffers(ids,e,index),e.memeId+' @ '+index);
 }
 const ids=g.drawStrategies(index);assert.equal(ids.length,9);assert.equal(new Set(ids).size,9);
 assert(ids.every(id=>g.eligibleStrategy(strategy(id),index)));
}
const gateway=g.worldlines.event('world:crossroads:28:openai,deepseek');assert(gateway);assert(!gateway.body.includes('两年的时间'));assert(gateway.body.includes('最后一年'));
console.log('PASS game-quality: economics, cash ledger, route failures, goals, audio scenes, purchased assets, and 24 quarters of legal offers');
module.exports={gameContext};
