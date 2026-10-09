/* Route gateways must produce a complete, replayable five-choice quarter. */
const assert=require('node:assert/strict');
const {gameContext}=require('./game-quality.test.cjs');
const c=gameContext(),g=c.AGIGame,w=g.worldlines;
const routeIds=w.routes.map(route=>route.id);
function assertOffers(event,index){
 assert(event);
 const offers=g.drawEventChoices(event,index);
 assert.equal(offers.length,5,event.memeId);
 assert.equal(new Set(offers).size,5,event.memeId);
 assert(g.validChoiceOffers(offers,event,index),event.memeId);
 for(const choice of event.choices){
  const next=w.advance({route:event.worldline.routes?.[0],counts:{}},event,choice,index);
  assert.equal(next.route,choice.worldTarget);
  assert.equal(next.counts[choice.worldStance],1);
  const chapter=w.byId(choice.worldTarget).chapters[index-24];
  const original=chapter.choices.find(candidate=>candidate.stance===choice.worldStance);
  assert.deepEqual(choice.quarterDelta,original.delta);
 }
 return offers;
}
// Exhaust all accepted two- and three-route orderings, including independent
// in each position. A save can replay the event ID directly.
let forks=0;
for(const first of routeIds)for(const second of routeIds.filter(id=>id!==first)){
 const ids=[first,second];
 for(const third of [null,...routeIds.filter(id=>!ids.includes(id))]){
  const selected=third?[...ids,third]:ids;
  const event=w.event('world:crossroads:28:'+selected.join(','));
  const offers=assertOffers(event,28);
  assert.deepEqual(Array.from(offers.slice(0,selected.length)),selected.map(id=>'world:join:'+id));
  forks++;
 }
}
// Existing gateways keep their IDs and order, preserving saved choices.
for(const [ids,expected] of [
 ['openai,deepseek',['openai','deepseek','independent','open','pragmatic']],
 ['openai,deepseek,kimi',['openai','deepseek','kimi','independent','open']],
 ['independent,openai,kimi',['independent','openai','kimi','open','pragmatic']],
 ['independent,openai',['independent','openai','open','pragmatic','control']]
])assert.deepEqual(Array.from(g.drawEventChoices(w.event('world:crossroads:28:'+ids),28)),expected.map(id=>'world:join:'+id));

// Reproduce the relationship-driven fork rather than only parsing a fixture ID.
for(const partner of routeIds.filter(id=>id!=='independent')){
 const state={index:28,relations:{[partner]:40},worldline:{route:'independent',counts:{}},log:[],stats:{cash:500,research:300,team:60,risk:0}};
 const id=w.nextId(state);
 assert.equal(id,'world:crossroads:28:independent,'+partner);
 assertOffers(w.event(id),state.index);
}

// Every initial partner selection contains one independent and four invitations.
const partners=routeIds.filter(id=>id!=='independent');
let entries=0;
for(let a=0;a<partners.length;a++)for(let b=a+1;b<partners.length;b++)for(let d=b+1;d<partners.length;d++)for(let e=d+1;e<partners.length;e++){
 const ids=[partners[a],partners[b],partners[d],partners[e]];
 const event=w.event('world:cooperation:24:'+ids.join(','));
 const offers=assertOffers(event,24);
 assert.deepEqual(Array.from(offers),['independent',...ids].map(id=>'world:cooperate:'+id));
 entries++;
}
for(const id of ['world:crossroads:28:independent','world:crossroads:28:openai,openai','world:crossroads:28:openai,missing','world:crossroads:28:openai,kimi,deepseek,claude','world:crossroads:27:openai,kimi','world:cooperation:24:openai,kimi,deepseek','world:cooperation:24:openai,kimi,deepseek,independent'])assert.equal(w.event(id),null,id);

// Build a solvent independent company, then replay every option at the formerly
// blocked gateway through calculate(), the same validator used by submission.
const picks=[];
const health=stats=>stats.cash+10*Math.min(stats.team,70)+3*stats.trust+stats.research-25*stats.risk;
function safeStrategies(state,choice){
 return c.AGI_STRATEGIES.filter(t=>!t.releasesModel&&g.eligibleStrategy(t,state.index,state.hired,state.completed,state.usage,state.assets))
  .sort((a,b)=>health(g.settleQuarter(state.stats,state.index,choice,[b]).stats)-health(g.settleQuarter(state.stats,state.index,choice,[a]).stats)||a.id.localeCompare(b.id)).slice(0,3).map(t=>t.id);
}
for(let index=0;index<28;index++){
 const state=g.calculate(picks);
 assert.equal(state.index,index);
 assert.equal(state.ending,null);
 const event=index<24?c.AGI_STORY.catalog.find(e=>e.memeId===c.AGI_STORY.fixedEvents[0]):w.event(index===24?w.nextId(state):`world:independent:${index}:standard`);
 const offers=g.drawEventChoices(event,index);
 const candidates=g.choiceCandidates(event,index,state.hired).filter(choice=>offers.includes(choice.id)&&!choice.recruitScientist&&(index<24||choice.worldTarget==='independent'));
 const ranked=candidates.map(choice=>{
  const strategies=safeStrategies(state,choice);
  const stats=g.settleQuarter(state.stats,index,choice,strategies.map(id=>c.AGI_STRATEGIES.find(t=>t.id===id))).stats;
  return {choice:choice.id,strategies,score:health(stats)};
 }).sort((a,b)=>b.score-a.score||a.choice.localeCompare(b.choice));
 assert(ranked.length);
 picks.push({eventId:event.memeId,choice:ranked[0].choice,choiceOffers:offers,strategies:ranked[0].strategies});
}
const before=g.calculate(picks),fork=w.event('world:crossroads:28:independent,openai');
assert.equal(before.index,28);
assert.equal(before.ending,null);
assert.equal(before.worldline.route,'independent');
for(const choice of fork.choices){
 const after=g.calculate([...picks,{eventId:fork.memeId,choice:choice.id,choiceOffers:g.drawEventChoices(fork,28),strategies:safeStrategies(before,choice)}]);
 assert.equal(after.index,29,choice.id+' must settle the 2028 Q1 quarter');
 assert.equal(after.worldline.route,choice.worldTarget);
 assert.equal(after.log.at(-1).choice.id,choice.id);
}
console.log(`PASS worldline-gateways: ${forks} crossroads and ${entries} cooperation entries yield five valid choices`);
