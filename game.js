/* 明天 AGI · Quarterly simulation. Game economics and recruitment are fiction. */
(() => {
'use strict';
const DATA=window.AGI_STORY, STRATEGIES=window.AGI_STRATEGIES, PARTNERS=window.AGI_PARTNERSHIPS, WORLD=window.AGI_WORLDLINE_ENGINE;
const PEERS=[...PARTNERS.companies,...(PARTNERS.researchPeers||[])];
const CORE_IDS=new Set(PARTNERS.coreCompanyIds);
const CORE_PEERS=PARTNERS.companies.filter(p=>CORE_IDS.has(p.id));
const isCorePeer=id=>CORE_IDS.has(id);
const coreAffinities=values=>Object.fromEntries(Object.entries(values||{}).filter(([id])=>isCorePeer(id)));
const INITIAL={cash:1000,research:6,trust:50,team:70,risk:0};
const STAT_LABELS={cash:'资金',research:'研发',team:'士气',trust:'风评',risk:'风险'};
const STAT_ICONS={
 cash:'<rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M5 8h1M18 16h1M5 16h1M18 8h1"/>',
 research:'<path d="m6 6 6 6m0 0 6-6m-6 6-6 6m6-6 6 6M6 6v12m12-12v12"/><circle cx="6" cy="5" r="2"/><circle cx="18" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/>',
 team:'<circle cx="12" cy="7" r="3"/><path d="M7 21v-3a5 5 0 0 1 10 0v3M5 5a3 3 0 0 0 0 6m14-6a3 3 0 0 1 0 6M2 19v-2a4 4 0 0 1 3-4m17 6v-2a4 4 0 0 0-3-4"/>',
 trust:'<path d="M20 14a3 3 0 0 0 2-3V6a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3M5 8h10a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H8l-5 3v-4a3 3 0 0 1-1-2v-4a3 3 0 0 1 3-3Z"/>',
 risk:'<path d="m10.3 3.8-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3.2l-8-14a2 2 0 0 0-3.4 0ZM12 9v5m0 3v.1"/>',
 scientists:'<path d="m2 6 10-4 10 4-10 4-10-4Zm4 2v4m12-4v4m4-6v6M8 12a4 4 0 0 0 8 0M5 22a7 7 0 0 1 14 0"/>'
};
function statIcon(key){return `<svg class="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${STAT_ICONS[key]}</svg>`;}
function statImpact(key,value){const label=STAT_LABELS[key],amount=signed(value);return `<span class="stat-impact" data-stat="${key}" title="${label} ${amount}">${statIcon(key)}<span class="sr-only">${label} </span><b>${amount}</b></span>`;}
const BRANDS={google:{name:'Google / DeepMind',image:'assets/google.ico'},claude:{name:'Claude',image:'assets/claude.png'},deepseek:{name:'DeepSeek',image:'assets/deepseek.ico'},nvidia:{name:'NVIDIA',image:'assets/nvidia.svg'},xai:{name:'xAI',image:'assets/xai.ico'},openai:{"name": "OpenAI", "image": "assets/openai.svg"},kimi:{"name": "月之暗面 Kimi", "image": "assets/kimi.png"},gemini:{"name": "Google Gemini", "image": "assets/gemini.png"},qwen:{"name": "阿里千问", "image": "assets/qwen.png"},doubao:{"name": "字节豆包", "image": "assets/doubao.png"},wenxin:{"name": "百度文心", "image": "assets/wenxin.svg"},huawei:{"name": "华为盘古", "image": "assets/huawei.png"},hunyuan:{"name": "腾讯混元", "image": "assets/hunyuan.svg"},xiaomi:{name:'小米',image:'assets/xiaomi.png'}};
const STORAGE='agi-tomorrow-game', TOTAL=32, HISTORY_TURNS=24, OFFER_COUNT=9, STRATEGY_COUNT=3;
const AGI={research:450,trust:55,team:40,scientists:2}, REVEAL_MS=1600;
const TALENT_PROGRAM='open-talent-program', TALENT_BONUS={research:3,team:2}, TIBO_EXTRA_CHANCE=.18;
const $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const clamp=(n,min=0,max=100)=>Math.max(min,Math.min(max,n));
const money=(n,decimals=0)=>Number(n).toLocaleString('zh-CN',{minimumFractionDigits:decimals,maximumFractionDigits:decimals});
const cashText=(n,withSign=false)=>`${n<0?'−':withSign&&n>0?'+':''}${Math.abs(n)>=100?money(Math.abs(n)/100,2)+'亿':money(Math.abs(n)*100)+'万'}`;
const signed=n=>(n>0?'+':'')+n;
const randomItem=items=>items[Math.floor(Math.random()*items.length)];
const quarter=i=>({year:2021+Math.floor(i/4),quarter:i%4+1});
const eventById=id=>WORLD?.event(id)||DATA.catalog.find(e=>e.memeId===id);
const strategyById=id=>STRATEGIES.find(e=>e.id===id);
const endingById=id=>WORLD?.endings.find(e=>e.id===id)||DATA.endings.find(e=>e.id===id);
function inStrategyEra(t,index){const q=quarter(index),now=q.year*4+q.quarter,start=t.fromYear*4+(t.fromQuarter||1),end=(t.toYear||9999)*4+(t.toQuarter||4);return now>=start&&now<=end;}
function companyAssets(completed){return [...new Set(completed.flatMap(id=>strategyById(id)?.produces||[]))];}
function latestUse(completed,usage,test){return Math.max(-1,...completed.filter(id=>test(strategyById(id))).map(id=>usage[id]?.lastTurn??-1));}
function eligibleStrategy(t,index,hired=[],completed=[],usage={}){
 if(!t||!inStrategyEra(t,index)||t.once&&hired.includes(t.id)||t.requiresScientist&&!hired.includes(t.requiresScientist))return false;
 if(t.requiresPeer&&!peerActive(peerById(t.requiresPeer),index))return false;
 if(t.oncePerRun&&completed.includes(t.id))return false;
 if(t.requiresStrategy&&!completed.includes(t.requiresStrategy))return false;
 if(t.cooldownQuarters&&usage[t.id]&&index-usage[t.id].lastTurn<=t.cooldownQuarters)return false;
 const assets=companyAssets(completed);
 if(t.requiredAssets?.some(asset=>!assets.includes(asset)))return false;
 if(t.requiresUnreleasedModel&&latestUse(completed,usage,s=>s?.produces?.includes('model'))<=latestUse(completed,usage,s=>s?.releasesModel))return false;
 return true;
}
function recruitChance(trust){return .04+.36*(clamp(trust)/100)**2;}
function talentChance(trust){return .01+.11*(clamp(trust)/100)**2;}
function talentCandidates(index,hired,selected){return STRATEGIES.filter(t=>t.once&&t.category==='recruit'&&eligibleStrategy(t,index,hired,[],{})&&!selected.includes(t.id));}
function eligibleEvent(e,index){const q=quarter(index);return !!e&&(index>=HISTORY_TURNS?e.worldline?.index===index:!e.worldline&&e.year<=q.year&&(e.year<q.year||(e.availableQuarter||1)<=q.quarter));}
function makeDeck(){const used=new Set(),reserved=new Set(Object.values(DATA.fixedEvents)),deck=Array(TOTAL).fill(null);
 for(let i=0;i<HISTORY_TURNS;i++){const q=quarter(i);let e=eventById(DATA.fixedEvents[i]);if(!e){let pool=DATA.catalog.filter(e=>e.year===q.year&&eligibleEvent(e,i)&&!used.has(e.memeId)&&!reserved.has(e.memeId));if(!pool.length)pool=DATA.catalog.filter(e=>eligibleEvent(e,i)&&!used.has(e.memeId)&&!reserved.has(e.memeId));e=randomItem(pool);}used.add(e.memeId);deck[i]=e.memeId;}return deck;}
function makeRun(){return {started:false,picks:[],awaiting:false,eventIds:makeDeck(),offers:[],choiceOffers:[],choice:null,strategies:[],decisionStage:'event'};}
let run=makeRun(),collected=[],revealTimer,introTransition=null,stageTransition=null,quarterTransition=null;
const CHARACTER_SIDES={left:['gpt','deepseek','gemini','qwen','minimax'],right:['claude','grok','kimi','glm']};
const CHARACTER_IMAGES={gpt:'assets/cover/gpt-action-v2.png',deepseek:'assets/cover/deepseek-action-v2.png',claude:'assets/cover/claude-action-v2.png',gemini:'assets/cover/gemini-action-v2.png',grok:'assets/cover/grok-action-v2.png',qwen:'assets/cover/qwen-action-v2.png',kimi:'assets/cover/kimi-action-v2.png',minimax:'assets/cover/minimax-action-v2.png',glm:'assets/cover/glm-action-v2.png'};
const characterBags={left:[],right:[]},characterPreloads=new Map();
let characterPair=null,nextCharacterPair=null,nextCharacterTurn=null;
function drawCharacterPair(previous=characterPair){
 return ['left','right'].map((side,index)=>{
  const bag=characterBags[side];
  if(!bag.length){
   bag.push(...CHARACTER_SIDES[side]);
   for(let i=bag.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[bag[i],bag[j]]=[bag[j],bag[i]];}
   if(bag.at(-1)===previous?.[index])[bag[0],bag[bag.length-1]]=[bag.at(-1),bag[0]];
  }
  return bag.pop();
 });
}
function prepareQuarterArt(turn){
 if(nextCharacterTurn===turn&&nextCharacterPair)return;
 nextCharacterPair=drawCharacterPair();nextCharacterTurn=turn;
 // Fetch only the next two sprites while the player reads the quarter result.
 for(const id of nextCharacterPair)if(!characterPreloads.has(id)){
  const img=new Image();img.decoding='async';img.src=CHARACTER_IMAGES[id];characterPreloads.set(id,img);
 }
}
function isRevealing(){return run.awaiting&&Number.isFinite(run.revealAt)&&Date.now()<run.revealAt;}
function goalStatus(s){return {research:s.stats.research>=AGI.research,trust:s.stats.trust>=AGI.trust,team:s.stats.team>=AGI.team,scientists:s.hired.length>=AGI.scientists,validated:s.validated};}
function getEnding(stats,relations,turns,hired=[],validated=false,worldline=null){
 if(worldline?.route==='nvidia'&&(stats.cash<=0||stats.team<=0||stats.risk>=70&&turns>=6))return 'world_nvidia_fracture';
 if(stats.cash<=0)return 'bankrupt';if(stats.team<=0)return 'burnout';if(stats.risk>=70&&turns>=6)return 'lawsuit';if(turns<TOTAL)return null;
 const ready=stats.research>=AGI.research&&stats.trust>=AGI.trust&&stats.team>=AGI.team&&hired.length>=AGI.scientists&&validated;
 return WORLD.ending(worldline,stats,relations,ready);
}
function eventChanges(choice){return {...choice.quarterDelta};}
// Event opportunities are sampled by company first; a larger card library is not an advantage.
function peerById(id){return PEERS.find(p=>p.id===id);}
function peerName(peer,index,compact=false){if(peer.id==='claude'&&index<8)return 'Anthropic';if(peer.id==='kimi'&&index<11)return '月之暗面';if(peer.id==='gemini'&&index<11)return compact?'Google':'Google / DeepMind';return peer.shortName;}
function peerActive(peer,index){return !!peer&&inStrategyEra(peer,index);}
function eventRoute(event){return PARTNERS.events[event.memeId];}
function resolveChoiceAffinities(choice,index,hired=[]){
 if(choice.recruitScientist&&hired.includes(choice.recruitScientist))choice={...choice,...choice.hiredAlternative,recruitScientist:null};
 const secondary=Object.fromEntries(Object.entries(choice.secondaryAffinities||{}).filter(([id])=>peerActive(peerById(id),index)));
 return {...choice,affinities:coreAffinities({...secondary,...choice.affinities})};
}
function choiceCandidates(event,index,hired=[]){
 if(event?.worldline)return event.choices.map(c=>resolveChoiceAffinities(c,index,hired));
 const route=eventRoute(event);if(!route)return [];
 const candidates=route.routes.map(c=>resolveChoiceAffinities({...c,id:'route:'+c.id,brand:null,kind:c.id},index));
 return [...candidates,...route.contextOffers.filter(o=>isCorePeer(o.brand)&&peerActive(peerById(o.brand),index)&&inStrategyEra(o,index)).map(o=>resolveChoiceAffinities({...o,id:'context:'+o.id,kind:'partner'},index,hired))];
}
function validChoiceOffers(ids,event,index,pool=choiceCandidates(event,index)){
 if(!Array.isArray(ids)||ids.length!==5||new Set(ids).size!==5)return false;
 const choices=ids.map(id=>pool.find(c=>c.id===id));
 if(event.worldline)return choices.every(Boolean)&&(!event.worldline.cooperation||ids.every((id,i)=>id===pool[i]?.id));
 return choices.every(Boolean)&&choices.every(c=>!c.brand||isCorePeer(c.brand)&&c.affinities?.[c.brand])&&choices.filter(c=>c.kind==='self').length===1&&choices.filter(c=>c.kind==='public').length===1&&new Set(choices.filter(c=>c.brand).map(c=>c.brand)).size===3;
}
function weightedItem(items,weight){
 const weights=items.map(item=>Math.max(.001,weight(item))),total=weights.reduce((a,b)=>a+b,0);let ticket=Math.random()*total;
 for(let i=0;i<items.length;i++){ticket-=weights[i];if(ticket<0)return items[i];}return items.at(-1);
}
const isHardwarePeer=id=>id==='huawei'||id==='nvidia';
function peerWeight(peer,event,relations={},exposure={},index=null){
 const history=exposure[peer.id]||{},focus=eventRoute(event)?.focusBrands?.includes(peer.id)?1.15:1;
 const opportunities=((history.eligibleTurns||0)+4)/((history.count||0)+2);
 const gap=index===null?Infinity:index-(history.lastTurn??-Infinity),recent=gap===1?.25:gap===2?.6:1;
 return opportunities*recent*focus*Math.exp(clamp(relations[peer.id]||0,-100,100)/300);
}
function drawEventChoices(event,index,relations={},exposure={},keepId=null){
 if(event.worldline)return choiceCandidates(event,index).map(c=>c.id);
 const pool=choiceCandidates(event,index),neutral=pool.filter(c=>!c.brand),groups=CORE_PEERS.filter(p=>pool.some(c=>c.brand===p.id));
 const selected=[],kept=pool.find(c=>c.id===keepId),weight=p=>peerWeight(p,event,relations,exposure,index);
 const featured=pool.find(c=>c.id==='context:'+eventRoute(event).featuredOfferId);
 const take=peer=>{if(peer&&!selected.includes(peer))selected.push(peer);};
 if(kept?.brand)take(groups.find(p=>p.id===kept.brand));
 if(featured)take(groups.find(p=>p.id===featured.brand));
 const nonHardware=groups.filter(p=>!isHardwarePeer(p.id));
 if(groups.length<3||nonHardware.length<2)throw Error('事件缺少可用的合作公司：'+event.memeId);
 while(selected.filter(p=>!isHardwarePeer(p.id)).length<2){
  const available=nonHardware.filter(p=>!selected.includes(p));
  take(weightedItem(available,weight));
 }
 while(selected.length<3){
  const hasHardware=selected.some(p=>isHardwarePeer(p.id)),available=groups.filter(p=>!selected.includes(p)&&(!hasHardware||!isHardwarePeer(p.id)));
  if(!available.length)break;
  take(weightedItem(available,weight));
 }
 const peers=selected.map(peer=>kept?.brand===peer.id?kept:featured?.brand===peer.id?featured:weightedItem(pool.filter(c=>c.brand===peer.id),c=>{
  const matches=(c.tags||[]).filter(tag=>eventRoute(event).tags.includes(tag)).length;
  const attitude=c.mode==='compete'?((relations[peer.id]||0)>=40?.5:1):1.5;
  const history=exposure[peer.id]?.offers?.[c.id],recent=history?.lastTurn===index-1?.2:1;
  const age=index-((c.fromYear-2021)*4+(c.fromQuarter||1)-1);
  return (1+matches*3)*attitude*recent/(1+(history?.count||0)*.45)/(1+Math.max(0,age)*.04);
 }));
 return [...neutral,...peers].map(c=>c.id);
}
function currentChoices(s){const pool=choiceCandidates(currentEvent(s),s.index,s.hired);return (run.choiceOffers[s.index]||[]).map(id=>pool.find(c=>c.id===id)).filter(Boolean);}
function strategyAffinities(t,index){
 if(!t)return {};
 const timeline=t.affinityTimeline?.filter(e=>inStrategyEra(e,index)).at(-1);
 let result={...(timeline?.affinities||t.affinities||{})};
 if(t.requiresScientist){const source=strategyAffinities(strategyById(t.requiresScientist),index);result=Object.fromEntries(Object.keys(source).map(id=>[id,2]));}
 return Object.fromEntries(Object.entries(result).filter(([id])=>peerActive(peerById(id),index)&&isCorePeer(id)));
}
function strategicAffinities(strategies,index=0){
 const result={};
 for(const t of strategies)for(const [id,value] of Object.entries(strategyAffinities(t,index)))result[id]=(result[id]||0)+value;
 return result;
}
function relationChanges(before,choice,strategies,index){
 const after={...before},strategic=strategicAffinities(strategies,index);
 for(const p of CORE_PEERS){if(!peerActive(p,index))continue;after[p.id]=clamp((before[p.id]||0)+(choice?.affinities?.[p.id]||0)+(strategic[p.id]||0),-100,100);}
 return {after,changes:Object.fromEntries(CORE_PEERS.map(p=>[p.id,(after[p.id]||0)-(before[p.id]||0)]))};
}
function strategyCost(t,stats){return Math.ceil(t.cost*(t.category==='research'?1+.25*(stats.research>=80)+.25*(stats.research>=160):1));}
function operatingCost(i){return 14+2*Math.floor(i/4);}
function settleQuarter(before,index,choice,strategies,discoveredScientist=null){
 const stats={...before},delta=choice?eventChanges(choice):{},overhead=operatingCost(index);
 const operation=overhead+strategies.reduce((sum,t)=>sum+strategyCost(t,before),0);
 const recurring=Math.floor(Math.max(0,before.research-20)*before.trust/400);
 const revenue=recurring+strategies.reduce((sum,t)=>sum+(t.revenue||0),0),eventCash=delta.cash||0;
 for(const changes of [delta,...strategies.map(t=>t.delta),discoveredScientist?TALENT_BONUS:{}])for(const [key,value] of Object.entries(changes||{}))if(key!=='cash'&&Object.hasOwn(stats,key))stats[key]+=value;
 const rawCash=before.cash-operation+revenue+eventCash;stats.cash=rawCash;
 for(const key of Object.keys(stats))stats[key]=Math.round(key==='cash'||key==='research'?Math.max(0,stats[key]):clamp(stats[key]));
 const changes=Object.fromEntries(Object.keys(STAT_LABELS).map(key=>[key,stats[key]-before[key]]));
 return {stats,overhead,operation,recurring,revenue,eventCash,rawCash,shortfall:Math.max(0,-rawCash),changes};
}
function calculate(picks){const stats={...INITIAL},relations=Object.fromEntries(CORE_PEERS.map(p=>[p.id,0])),exposure={},contacts=new Set(),hired=[],completed=[],usage={},log=[];let ending=null,validated=false,validationTurn=-1,lastModelChange=-1,worldline=null;
 if(!Array.isArray(picks))return {stats,relations,exposure,worldline,contacted:[],hired,completed,usage,assets:[],log,ending,validated,validationTurn,lastModelChange,index:0};
 for(let i=0;i<picks.length&&i<TOTAL&&!ending;i++){
  const pick=picks[i],event=eventById(pick?.eventId),ids=pick?.strategies;
  if(!Array.isArray(ids)||ids.length!==STRATEGY_COUNT||new Set(ids).size!==ids.length||!eligibleEvent(event,i))break;
  const strategies=ids.map(strategyById);if(strategies.some(t=>!eligibleStrategy(t,i,hired,completed,usage)))break;
  if(strategies.filter(t=>t.releasesModel).length>1)break;
  const candidates=choiceCandidates(event,i,hired);
  if(!validChoiceOffers(pick.choiceOffers,event,i,candidates)||!pick.choiceOffers.includes(pick.choice))break;
  const choice=candidates.find(c=>c.id===pick.choice);if(!choice)break;
  const eventRecruit=choice.recruitScientist?strategyById(choice.recruitScientist):null;
  if(choice.recruitScientist&&(!eventRecruit||!eventRecruit.once||eventRecruit.category!=='recruit'||!eligibleStrategy(eventRecruit,i,hired,completed,usage)||ids.includes(eventRecruit.id)))break;
  strategies.sort((a,b)=>a.id.localeCompare(b.id));
  const hasDiscovery=Object.hasOwn(pick,'discoveredScientist'),discoveredScientist=hasDiscovery?strategyById(pick.discoveredScientist):null;
  if(hasDiscovery&&(!ids.includes(TALENT_PROGRAM)||!talentCandidates(i,hired,[...ids,...(eventRecruit?[eventRecruit.id]:[])]).some(t=>t.id===pick.discoveredScientist)))break;
  const before={...stats},relationsBefore={...relations},settled=settleQuarter(before,i,choice,strategies,discoveredScientist);Object.assign(stats,settled.stats);
  const contributors=[...strategies,...(discoveredScientist?[discoveredScientist]:[])];
  Object.assign(relations,relationChanges(relationsBefore,choice,contributors,i).after);
  for(const brand of new Set(candidates.map(c=>c.brand).filter(isCorePeer))){const previous=exposure[brand]||{};exposure[brand]={...previous,eligibleTurns:(previous.eligibleTurns||0)+1};}
  for(const id of pick.choiceOffers){const c=candidates.find(c=>c.id===id);if(c?.brand){const previous=exposure[c.brand]||{},offers=previous.offers||{};exposure[c.brand]={...previous,count:(previous.count||0)+1,lastTurn:i,offers:{...offers,[id]:{count:(offers[id]?.count||0)+1,lastTurn:i}}};}}
  const interactions=[choice.brand,...Object.keys(choice.affinities||{}).filter(id=>choice.affinities[id]),...Object.keys(strategicAffinities(contributors,i))];
  for(const id of interactions)if(peerActive(peerById(id),i)&&isCorePeer(id))contacts.add(id);
  hired.push(...strategies.filter(t=>t.once&&t.category==='recruit').map(t=>t.id),...(discoveredScientist?[discoveredScientist.id]:[]),...(eventRecruit?[eventRecruit.id]:[]));
  const strategyOutcomes={};
  for(const t of strategies){
   const previous=usage[t.id]?.count||0;
   strategyOutcomes[t.id]=previous&&t.repeatResults?.length?t.repeatResults[(previous-1)%t.repeatResults.length]:t.result;
   usage[t.id]={count:previous+1,lastTurn:i};
   if(!completed.includes(t.id))completed.push(t.id);
   if(t.produces?.includes('model'))lastModelChange=i;
  }
  log.push({event,choice,strategies,strategyOutcomes,discoveredScientist,pick,before,after:{...stats},relationsBefore,relationsAfter:{...relations},relationChanges:Object.fromEntries(Object.keys(relations).map(id=>[id,relations[id]-(relationsBefore[id]||0)])),...settled});
  const publicTest=strategies.some(t=>t.validatesAGI||t.id==='red-team-review')||choice.validatesAGI===true;
  if(publicTest&&companyAssets(completed).includes('model'))validationTurn=i;
  validated=validationTurn>=28&&validationTurn>=lastModelChange&&companyAssets(completed).includes('model');
  if(event.worldline)worldline=WORLD.advance(worldline,event,choice,i);
  ending=getEnding(stats,relations,i+1,hired,validated,worldline);
 }return {stats,relations,exposure,worldline,contacted:[...contacts],hired,completed,usage,assets:companyAssets(completed),log,ending,validated,validationTurn,lastModelChange,index:log.length};
}
function drawStrategies(index,hired=[],keep=[],stats=INITIAL,completed=[],usage={},excluded=[]){
 const pool=STRATEGIES.filter(t=>!excluded.includes(t.id)&&eligibleStrategy(t,index,hired,completed,usage));
 const chosen=[...new Set(keep)].filter(id=>pool.some(t=>t.id===id)).slice(0,OFFER_COUNT);
 function ensure(test,count,recruits=false){while(chosen.length<OFFER_COUNT&&chosen.filter(id=>test(strategyById(id))).length<count){const t=randomItem(pool.filter(t=>!chosen.includes(t.id)&&(recruits||t.category!=='recruit')&&test(t)));if(!t)break;chosen.push(t.id);}}
 ensure(t=>(t.revenue||0)>t.cost&&t.delta.risk<10,2);
 // The final-year validation must be available, rather than a lucky draw.
 if(index>=28&&companyAssets(completed).includes('model'))ensure(t=>t.id==='agi-cross-domain-trials',1);
 ensure(t=>t.category==='research'&&t.evolving,1);
 ensure(t=>t.category==='research',2);
 ensure(t=>(t.delta.risk||0)>=10,1);
 ensure(t=>(t.category==='operations'||t.category==='open-source')&&(t.delta.team||0)>0,1);
 if(Math.random()<.65)ensure(t=>!!t.requiresScientist,1);
 if(Math.random()<recruitChance(stats.trust))ensure(t=>t.category==='recruit',1,true);
 // Tibo gets an additional invitation opportunity without replacing the ordinary recruit draw.
 if(!chosen.includes('recruit-tibo')&&pool.some(t=>t.id==='recruit-tibo')&&Math.random()<TIBO_EXTRA_CHANCE)ensure(t=>t.id==='recruit-tibo',1,true);
 if(Math.random()<.65)ensure(t=>t.category==='hardware',1);
 ensure(()=>true,OFFER_COUNT);
 for(let i=chosen.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[chosen[i],chosen[j]]=[chosen[j],chosen[i]];}return chosen;
}
function save(){try{localStorage.setItem(STORAGE,JSON.stringify({run,collected}));}catch{}}
function ensureOffers(s){
 if(!run.started||s.ending||run.awaiting)return;
 // Update only unseen scheduled quarters; preserve the event already on the player's screen.
 for(const [turn,id] of Object.entries(DATA.fixedEvents)){
  const i=Number(turn);
  if(i<s.index||run.eventIds.includes(id)||i===s.index&&(run.choice||run.choiceOffers[i]?.length))continue;
  run.eventIds[i]=id;run.offers[i]=[];run.choiceOffers[i]=[];
 }
 const worldId=WORLD.nextId(s);
 if(worldId&&run.eventIds[s.index]!==worldId){run.eventIds[s.index]=worldId;run.choiceOffers[s.index]=[];run.choice=null;run.decisionStage='event';}
 const event=currentEvent(s),pendingRecruit=choiceCandidates(event,s.index,s.hired).find(c=>c.id===run.choice)?.recruitScientist;
 const offers=run.offers[s.index],excluded=pendingRecruit?[pendingRecruit]:[];
 const legal=id=>!excluded.includes(id)&&eligibleStrategy(strategyById(id),s.index,s.hired,s.completed,s.usage);
 if(!Array.isArray(offers)||offers.length!==OFFER_COUNT||new Set(offers).size!==OFFER_COUNT||offers.some(id=>!legal(id)))run.offers[s.index]=drawStrategies(s.index,s.hired,pendingRecruit&&Array.isArray(offers)?offers.filter(legal):[],s.stats,s.completed,s.usage,excluded);
 run.strategies=[...new Set(run.strategies||[])].filter(id=>run.offers[s.index].includes(id)).slice(0,STRATEGY_COUNT);
 const choicesValid=validChoiceOffers(run.choiceOffers[s.index],event,s.index);
 const tooManyHardware=!event.worldline&&choicesValid&&run.choiceOffers[s.index].filter(id=>isHardwarePeer(choiceCandidates(event,s.index).find(c=>c.id===id)?.brand)).length>1;
 const featured=eventRoute(event)?.featuredOfferId,missingFeatured=!run.choice&&featured&&!run.choiceOffers[s.index]?.includes('context:'+featured);
 if(!choicesValid||tooManyHardware||missingFeatured)run.choiceOffers[s.index]=drawEventChoices(event,s.index,s.relations,s.exposure,run.choice);
 if(!currentChoices(s).some(c=>c.id===run.choice))run.choice=null;
 if(!run.choice||run.decisionStage!=='strategy')run.decisionStage='event';
}
// Remove only obsolete game progress keys; audio preferences and unrelated storage are preserved.
try{for(const key of Object.keys(localStorage))if(key==='agi-tomorrow-event-v9'||/^agi-tomorrow-(?:v\d+|quarterly(?:-v\d+)?)$/.test(key))localStorage.removeItem(key);}catch{}
try{const saved=JSON.parse(localStorage.getItem(STORAGE)||'null');
 if(saved?.run&&Array.isArray(saved.run.picks)&&saved.run.picks.length<=TOTAL&&Array.isArray(saved.run.eventIds)&&saved.run.eventIds.length===TOTAL){
  const n=calculate(saved.run.picks).index;
  const validDeck=saved.run.eventIds.every((id,i)=>i>=HISTORY_TURNS&&i>=n&&id===null||eligibleEvent(eventById(id),i));
  if(n===saved.run.picks.length&&validDeck){
   run={started:saved.run.started===true||n>0||!!saved.run.choice||!!saved.run.strategies?.length,picks:saved.run.picks,awaiting:!!saved.run.awaiting&&n>0,eventIds:saved.run.eventIds,offers:Array.isArray(saved.run.offers)?saved.run.offers:[],choiceOffers:Array.isArray(saved.run.choiceOffers)?saved.run.choiceOffers:[],revealAt:Number.isFinite(saved.run.revealAt)?Math.min(saved.run.revealAt,Date.now()+REVEAL_MS):null,choice:saved.run.choice||null,strategies:Array.isArray(saved.run.strategies)?saved.run.strategies:[],decisionStage:saved.run.decisionStage==='strategy'?'strategy':'event'};
   for(let i=0;i<n;i++)run.eventIds[i]=run.picks[i].eventId;
  }
 }
 if(Array.isArray(saved?.collected))collected=[...new Set(saved.collected.filter(endingById))];
}catch{run=makeRun();}
function currentEvent(s){return eventById(run.eventIds[s.index]);}
function stateView(){const s=calculate(run.picks),active=run.started&&!introTransition&&!s.ending&&!run.awaiting;return {...quarter(Math.min(Math.max(0,s.index+(active?0:-1)),TOTAL-1)),turn:Math.min(s.index+(active?1:0),TOTAL),totalTurns:TOTAL,phase:introTransition?'starting':quarterTransition?'advancing':!run.started?'intro':isRevealing()?'settling':run.awaiting?'result':s.ending?'ending':'decision',decisionStage:active?run.decisionStage:null,transitioning:!!(stageTransition||quarterTransition),stats:s.stats,worldline:s.worldline,currencyUnit:'百万元人民币',agi:{requirements:AGI,conditions:goalStatus(s),validated:s.validated,release:'2028 Q4独立、开放或联合发布'},relations:coreAffinities(s.relations),contacted:s.contacted.filter(isCorePeer),peers:CORE_PEERS.filter(p=>s.contacted.includes(p.id)).map(p=>({id:p.id,name:peerName(p,Math.max(0,s.index-(run.awaiting?1:0))),active:peerActive(p,Math.max(0,s.index-(run.awaiting?1:0))),affinity:s.relations[p.id]})),hired:s.hired,completed:s.completed,ending:s.ending,event:active?{id:currentEvent(s).memeId,title:currentEvent(s).title}:null,choices:active?currentChoices(s).map(c=>({id:c.id,label:c.label,brand:c.brand,affinities:coreAffinities(c.affinities),delta:eventChanges(c)})):[],strategies:active?run.offers[s.index].map(id=>({...strategyById(id),cost:strategyCost(strategyById(id),s.stats),affinities:coreAffinities(strategyAffinities(strategyById(id),s.index))})):[],selectedChoice:run.choice,selectedStrategies:[...run.strategies],requiredStrategies:STRATEGY_COUNT};}
function focusMain(){$('game').focus({preventScroll:true});}
function impactText(changes){return Object.entries(STAT_LABELS).filter(([key])=>changes[key]).map(([key,label])=>`${label} ${key==='cash'?cashText(changes[key],true):signed(changes[key])}`).join(' · ');}
function brandImage(key,index=TOTAL-1){if(key==='gemini'&&index<11)key='google';const extra=peerById(key);if(extra?.monogram)return `<span class="logo logo-monogram" role="img" aria-label="${esc(extra.name)}">${esc(extra.monogram)}</span>`;const b=BRANDS[key];return b?`<img class="logo" src="${b.image}" alt="${b.name} logo" width="24" height="24">`:'';}
const numberViews=new WeakMap();
function rollNumber(node,value,withSign=false,decimals=0){
 let view=numberViews.get(node);const first=!view;
 if(first){node.innerHTML='<span class="sr-only"></span><span class="number-visual" aria-hidden="true"><span class="number-sign"></span></span>';view={value:null,digits:[],visual:node.lastElementChild};numberViews.set(node,view);}
 if(view.value===value)return;
 node.firstElementChild.textContent=(withSign&&value>0?'+':'')+money(value,decimals);
 view.visual.firstElementChild.textContent=value<0?'−':withSign&&value>0?'+':'';
 const digits=Math.abs(value).toFixed(decimals).split('').reverse();
 while(view.digits.length<digits.length){
  const place=view.digits.length,integerPlace=place-(decimals?decimals+1:0),dot=digits[place]==='.',comma=integerPlace>0&&integerPlace%3===0,cell=document.createElement('span');
  cell.className=dot?'number-decimal':'digit-position'+(comma?' has-comma':'');
  cell.innerHTML=dot?'.':'<span class="digit-window"><span class="digit-track">'+Array.from({length:10},(_,n)=>'<span>'+n+'</span>').join('')+'</span></span>'+(comma?'<span class="number-comma">,</span>':'');
  view.visual.insertBefore(cell,view.visual.children[1]||null);view.digits.push(cell);
 }
 for(let place=0;place<view.digits.length;place++){
  const cell=view.digits[place],track=cell.querySelector('.digit-track');if(!track)continue;
  if(first)cell.classList.add('number-initial');
  cell.classList.toggle('digit-visible',place<digits.length);track.style.transform=`translateY(${-Number(digits[place]||0)}em)`;
 }
 if(first){void node.offsetWidth;for(const cell of view.digits)cell.classList.remove('number-initial');}
 view.value=value;
}
function decisionPreview(s){return settleQuarter(s.stats,s.index,currentChoices(s).find(c=>c.id===run.choice),run.strategies.map(strategyById));}
function selectedChanges(s){
 if(isRevealing())return null;
 if(run.awaiting)return s.log.at(-1).changes;
 if(s.ending||!run.choice&&!run.strategies.length)return null;
 return decisionPreview(s).changes;
}
const RELATIONS_PREFERENCE='agi-tomorrow-relations-collapsed';
let relationsCollapsed=false;
try{relationsCollapsed=localStorage.getItem(RELATIONS_PREFERENCE)==='true';}catch{}
function updateRelationsDrawer(){
 const button=$('relationsToggle'),content=$('relationsContent');
 $('relationsPanel').classList.toggle('is-collapsed',relationsCollapsed);
 button.setAttribute('aria-expanded',String(!relationsCollapsed));
 button.setAttribute('aria-label',relationsCollapsed?'展开友商态度':'收起友商态度');
 button.title=relationsCollapsed?'展开友商态度':'收起友商态度';
 content.inert=relationsCollapsed;content.setAttribute('aria-hidden',String(relationsCollapsed));
}
function renderRelations(s){
 const previous=isRevealing()?calculate(run.picks.slice(0,-1)):s;
 const index=Math.max(0,Math.min(TOTAL-1,s.index-(run.awaiting||s.ending?1:0)));
 const list=$('relationsList');
 $('relationsPanel').hidden=!previous.contacted.some(isCorePeer);
 if(!list.children.length)list.innerHTML=CORE_PEERS.map(p=>`<div class="peer-row" data-peer="${p.id}">${brandImage(p.id,index)}<span class="peer-name"></span><span class="peer-score rolling-number"></span><span class="peer-locked" aria-hidden="true">—</span></div>`).join('');
 for(const row of list.children){
  const p=peerById(row.dataset.peer),active=peerActive(p,index),score=previous.relations[p.id]||0;
  row.hidden=!previous.contacted.includes(p.id);if(row.hidden)continue;
  row.classList.toggle('peer-inactive',!active);row.classList.toggle('peer-ally',score>=60);
  row.title=active?`${peerName(p,index)}：好感 ${score}；${p.researchOnly?'科研合作关系。':'60起可支持联合发布。'}`:`${p.name}：${p.fromYear} Q${p.fromQuarter||1} 起登场。`;
  row.querySelector('.peer-name').textContent=peerName(p,index,true);
  if(p.id==='gemini'&&row.dataset.logoEra!==(index<11?'google':'gemini')){row.querySelector('.logo').outerHTML=brandImage(p.id,index);row.dataset.logoEra=index<11?'google':'gemini';}
  const value=row.querySelector('.peer-score');value.hidden=!active;row.querySelector('.peer-locked').hidden=active;
  value.classList.toggle('positive',score>=60);value.classList.toggle('negative',score<0);rollNumber(value,score);
 }
}

function renderStats(s){
 if(!$('stats').children.length)$('stats').innerHTML=Object.entries(STAT_LABELS).map(([key,label])=>`<div class="stat" data-stat="${key}" ${key==='risk'?'title="第6季度起，风险达到70将被追责清盘"':''}><span class="stat-label">${statIcon(key)}${label}</span><b><span class="rolling-number stat-value"></span><span class="stat-unit">${key==='cash'?'亿':key==='risk'?'/70':''}</span></b><span class="stat-change"><span class="rolling-number"></span>${key==='cash'?'亿':''}</span></div>`).join('');
 const shown=isRevealing()?calculate(run.picks.slice(0,-1)):s,changes=selectedChanges(s);
 $('scientists').innerHTML=statIcon('scientists')+'<span>顶级科学家</span><b>'+shown.hired.length+'</b><span aria-hidden="true">›</span>';
 $('scientists').setAttribute('aria-label',`顶级科学家，${shown.hired.length} 人，查看名单`);
 $('scientistRoster').innerHTML=shown.hired.length?'<ul class="scientist-roster">'+shown.hired.map(id=>'<li>'+statIcon('scientists')+'<span>'+esc(strategyById(id).label.replace(/^招募\s*/,''))+'</span></li>').join('')+'</ul>':'<p class="scientist-empty-state">暂未招募顶级科学家</p>';

 for(const node of $('stats').children){const key=node.dataset.stat,change=node.querySelector('.stat-change'),amount=changes?.[key]||0;
  node.classList.toggle('warning',key==='cash'&&shown.stats[key]<150||key==='team'&&shown.stats[key]<20||key==='risk'&&shown.stats[key]>=50);
  rollNumber(node.querySelector('.stat-value'),key==='cash'?shown.stats[key]/100:shown.stats[key],false,key==='cash'?2:0);
  change.classList.toggle('positive',key==='risk'?amount<0:amount>0);change.classList.toggle('negative',key==='risk'?amount>0:amount<0);change.hidden=!changes;
  change.title=run.awaiting?'本季实际变化':'本季预计变化（含固定开销）';rollNumber(change.querySelector('.rolling-number'),key==='cash'?amount/100:amount,true,key==='cash'?2:0);
 }
 const i=s.index+(run.awaiting||s.ending?-1:0),q=quarter(Math.max(0,Math.min(i,TOTAL-1)));$('turnLabel').innerHTML=`<b>${q.year}</b><span>Q${q.quarter}</span>`;renderRelations(s);
}
function renderCharacterArt(prefix){
 if(!characterPair)characterPair=drawCharacterPair();
 return `<div class="${prefix}-art" aria-hidden="true">${characterPair.map((id,i)=>`<img class="${prefix}-character ${prefix}-${i?'right':'left'} ${prefix}-${id}" src="${CHARACTER_IMAGES[id]}" width="1024" height="1536" alt="" draggable="false">`).join('')}</div>`;
}
function renderIntro(){return renderCharacterArt('intro')+'<section class="start-screen" aria-labelledby="startTitle"><h1 id="startTitle">明天 AGI</h1><p><strong>2021年</strong>，你创建了一家人工智能公司，并向投资人承诺在<strong>2028年</strong>之前实现<strong>AGI</strong>。</p><button class="continue" id="startButton">开始创业<span aria-hidden="true"> →</span></button></section>';}
function renderChoiceAffinities(choice,index){
 const peers=CORE_PEERS.filter(p=>peerActive(p,index)&&choice.affinities?.[p.id]).sort((a,b)=>Number(b.id===choice.brand)-Number(a.id===choice.brand));
 if(!peers.length)return '';
 return `<span class="choice-affinities">${peers.map(p=>{const amount=choice.affinities[p.id],label=peerName(p,index)+'好感 '+signed(amount);return `<span class="choice-affinity ${amount>0?'positive':'negative'}" data-peer="${esc(p.id)}" role="img" aria-label="${esc(label)}" title="${esc(label)}">${brandImage(p.id,index)}<span>${signed(amount)}</span></span>`;}).join('')}</span>`;
}
function renderStrategyCard(t,s){
 const net=(t.revenue||0)-strategyCost(t,s.stats),affinities=renderChoiceAffinities({affinities:strategyAffinities(t,s.index)},s.index);
 const details=[t.hint,t.oncePerRun?'每局一次':t.cooldownQuarters?'间隔 '+t.cooldownQuarters+' 季':''].filter(Boolean);
 const impacts=Object.entries(STAT_LABELS).filter(([key])=>key!=='cash'&&t.delta[key]).map(([key])=>statImpact(key,t.delta[key])).join('');
 return `<label class="strategy-card" data-strategy="${esc(t.id)}"><span class="strategy-cash" data-stat="cash" data-cash-flow="${net<0?'out':net>0?'in':'flat'}" title="本季净收支">${statIcon('cash')}<span class="sr-only">净收支 </span>${cashText(net,true)}</span><input type="checkbox" name="strategyChoice" value="${esc(t.id)}" ${run.strategies.includes(t.id)?'checked':''}><span class="strategy-pin" aria-hidden="true"><span class="pin-hole"></span><span class="pin-shadow"></span><span class="pin-impact"></span><svg class="pin-model" viewBox="0 0 40 44" focusable="false"><path d="M18 24h5l-2 18-2-1z" fill="#dbd7ed"/><path d="M21 25h2l-2 17-1-4z" fill="#8d82ad"/><path d="M14 10h14l-3 12 5 5q1 3-3 4H14q-4-1-3-4l6-5z" fill="#91bf3b" stroke="#385720" stroke-width="1"/><path d="M17 13h5l-1 11-5 4h-3l6-7z" fill="#ddff94"/><ellipse cx="20" cy="11" rx="12" ry="6" fill="#a7d949" stroke="#385720" stroke-width="1"/><ellipse cx="20" cy="8" rx="12" ry="5" fill="#d2ff76" stroke="#739c32" stroke-width="1"/><ellipse cx="17" cy="6.5" rx="5" ry="1.5" fill="#f3ffd3"/></svg></span><span class="choice-label strategy-title">${esc(t.label)}</span>${details.length?`<span class="strategy-details">${details.map(text=>`<span>${esc(text)}</span>`).join('')}</span>`:''}<span class="strategy-footer"><span class="strategy-deltas">${impacts}</span>${affinities?`<span class="strategy-affinities">${affinities}</span>`:''}</span></label>`;
}
function renderDecision(s){
 const e=currentEvent(s),milestone=DATA.milestones?.[s.index],intro=!e.worldline&&milestone&&milestone.eventId!==e.memeId?milestone.text+'\n\n':'';
 if(run.decisionStage!=='strategy')return `<div class="decision-screen" data-stage="event"><section class="event-section" aria-labelledby="eventTitle"><p class="report-eyebrow event-eyebrow">行业事件</p><h1 id="eventTitle">${esc(e.title)}</h1><p class="story">${esc(intro+e.body)}</p><div class="response-heading"><span>您的态度：</span></div><div class="choices" role="group" aria-label="事件回应">${currentChoices(s).map((c,i)=>{const changes=eventChanges(c);return `<button type="button" class="choice${run.choice===c.id?' is-selected':''}" data-choice="${esc(c.id)}" data-brand="${esc(c.brand||'')}"><span class="choice-number" aria-hidden="true">${String(i+1).padStart(2,'0')}</span><span class="choice-content"><span class="choice-label"><span class="choice-title">${esc(c.label)}</span><span class="event-cash" data-cash-flow="${changes.cash<0?'out':changes.cash>0?'in':'flat'}">${statIcon('cash')}<span class="sr-only">资金 </span>${cashText(changes.cash||0,true)}</span></span><span class="choice-impact">${Object.entries(STAT_LABELS).filter(([key])=>key!=='cash'&&changes[key]).map(([key])=>statImpact(key,changes[key])).join('')}${renderChoiceAffinities(c,s.index)}</span>${c.hint?'<span class="choice-condition">'+esc(c.hint)+'</span>':''}</span><span class="choice-arrow" aria-hidden="true">↗</span></button>`;}).join('')}</div></section></div>`;
 return `<div class="decision-screen" data-stage="strategy"><section class="strategy-section" aria-labelledby="strategyTitle"><div class="strategy-heading"><div><h1 id="strategyTitle">本季策略</h1></div><p id="selectionStatus" role="status">已钉选 ${run.strategies.length} / ${STRATEGY_COUNT}</p></div><div class="strategies" role="group" aria-label="本季策略，选择三项">${run.offers[s.index].map(id=>renderStrategyCard(strategyById(id),s)).join('')}</div></section><div class="commit-row stage-actions"><button class="continue" id="commitButton" disabled>执行本季决策</button></div></div>`;
}
function updatePreview(){
 const s=calculate(run.picks);if(!run.started||run.awaiting||s.ending)return;
 const count=run.strategies.length,ready=!!run.choice&&count===STRATEGY_COUNT,button=$('commitButton');
 if($('selectionStatus'))$('selectionStatus').textContent=`已钉选 ${count} / ${STRATEGY_COUNT}`;
 if(button){
  let warning='';
  if(ready){const p=calculate([...run.picks,{eventId:run.eventIds[s.index],choice:run.choice,strategies:[...run.strategies],choiceOffers:[...run.choiceOffers[s.index]]}]);warning=p.ending==='bankrupt'?'将破产':p.ending==='burnout'?'团队将散伙':p.ending==='lawsuit'?'将被追责清盘':'';}
  button.disabled=!ready;
  button.textContent=warning?`执行本季决策 · ${warning}`:'执行本季决策';
  button.title=ready?'':`还需选择 ${STRATEGY_COUNT-count} 项策略`;
  button.setAttribute('aria-label',ready?button.textContent:`执行本季决策，已选 ${count} 项，还需选择 ${STRATEGY_COUNT-count} 项策略`);
 }
 for(const card of document.querySelectorAll('button[data-choice]'))card.classList.toggle('is-selected',run.choice===card.dataset.choice);
 for(const input of document.querySelectorAll('input[name="strategyChoice"]')){input.checked=run.strategies.includes(input.value);input.disabled=count===STRATEGY_COUNT&&!input.checked;}
 renderStats(s);
}
function finishStageTransition(cancelled=false){
 if(!stageTransition)return;
 for(const timer of stageTransition.timers)clearTimeout(timer);
 stageTransition=null;$('game').classList.remove('stage-switching');render();
 if(!cancelled)focusDecisionStage();
}
function focusDecisionStage(){
 focusMain();
 if($('game').getBoundingClientRect().top<0)$('game').scrollIntoView({block:'start',behavior:'auto'});
 $('announcement').textContent=run.decisionStage==='strategy'?'进入策略阶段，请选择三项公司策略。':'返回事件阶段，已保留策略选择。';
}
function changeDecisionStage(target){
 if(quarterTransition)throw Error('正在进入下一季度');
 if(stageTransition)return stateView();
 const s=calculate(run.picks);
 if(introTransition||!run.started||run.awaiting||s.ending)throw Error('当前不能切换决策阶段');
 if(target!=='event'&&target!=='strategy')throw Error('无效阶段');
 if(target==='strategy'&&!currentChoices(s).some(c=>c.id===run.choice))throw Error('请先选择一项事件回应');
 if(run.decisionStage===target)return stateView();
 run.decisionStage=target;save();
 if(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches){render();focusDecisionStage();return stateView();}
 const direction=target==='strategy'?'forward':'back',screen=$('game').querySelector('.decision-screen');
 stageTransition={timers:[]};$('game').classList.add('stage-switching');$('game').inert=true;$('game').setAttribute('aria-busy','true');$('restartButton').disabled=true;
 screen.dataset.direction=direction;screen.classList.add('stage-leaving');
 stageTransition.timers.push(setTimeout(()=>{
  render();const nextScreen=$('game').querySelector('.decision-screen');nextScreen.dataset.direction=direction;nextScreen.classList.add('stage-entering');
  if($('game').getBoundingClientRect().top<0)$('game').scrollIntoView({block:'start',behavior:'auto'});
  stageTransition.timers.push(setTimeout(()=>finishStageTransition(),220));
 },140));
 return stateView();
}
function renderResult(s){const l=s.log.at(-1);return `<div class="result quarter-result"><section class="result-event" aria-labelledby="resultTitle"><h2 class="section-label">事件结果</h2><div class="result-title">${brandImage(l.choice.brand,s.index-1)}<h1 id="resultTitle">${esc(l.choice.label)}</h1></div><p class="story">${esc(l.choice.result)}</p></section><section class="result-strategies" aria-labelledby="resultStrategies"><h2 class="section-label" id="resultStrategies">公司近期策略</h2><div class="result-strategy-list">${l.strategies.map(t=>`<article class="result-strategy"><h3>${esc(t.label)}</h3><p>${esc(t.id===TALENT_PROGRAM&&l.discoveredScientist?'公司的人才计划招来了个年轻人，叫：'+l.discoveredScientist.label.replace(/^招募\s*/, ''):l.strategyOutcomes[t.id])}</p></article>`).join('')}</div></section>${l.shortfall?`<p class="warning result-shortfall">现金缺口 ${cashText(l.shortfall)}。</p>`:''}<button class="continue" id="nextButton">${s.ending?'查看结局':'下一季度'}</button></div>`;
}
function renderEnding(s){const e=endingById(s.ending);return `<div class="result">${e.brand?`<div class="ending-brand">${brandImage(e.brand)}</div>`:''}<h1>${esc(e.title)}</h1><p class="story">${esc(e.body)}</p><button class="continue" id="replayButton">再来一局</button></div>`;}
function render(){
 const intro=!run.started;$('relationsPanel').hidden=intro;$('statusPanel').hidden=intro;$('turnLabel').hidden=intro;$('restartButton').hidden=intro;$('game').classList.toggle('intro',intro);
 if(intro){$('game').innerHTML=renderIntro();$('game').inert=false;$('game').setAttribute('aria-busy','false');save();return;}
 const s=calculate(run.picks);ensureOffers(s);if(run.awaiting&&!isRevealing())prepareQuarterArt(s.index);if(s.ending&&!run.awaiting&&!collected.includes(s.ending))collected.push(s.ending);renderStats(s);$('game').innerHTML=isRevealing()?'<div class="result"><p>正在结算…</p></div>':run.awaiting?renderResult(s):s.ending?renderEnding(s):renderDecision(s);if(!s.ending&&!run.awaiting)updatePreview();$('game').inert=isRevealing()||!!stageTransition||!!quarterTransition;$('game').setAttribute('aria-busy',String(isRevealing()||!!stageTransition||!!quarterTransition));$('restartButton').disabled=isRevealing()||!!stageTransition||!!quarterTransition;save();
}
function lockIntro(){
 $('game').inert=true;$('game').setAttribute('aria-busy','true');$('relationsPanel').inert=true;$('restartButton').disabled=true;
 if($('startButton'))$('startButton').disabled=true;
}
function finishIntro(cancelled=false){
 if(!introTransition)return;
 for(const timer of introTransition.timers)clearTimeout(timer);
 introTransition.layer.remove();introTransition=null;document.body.classList.remove('is-starting');
 $('game').inert=false;$('game').setAttribute('aria-busy','false');$('relationsPanel').inert=false;$('restartButton').disabled=false;
 if($('startButton'))$('startButton').disabled=false;
 window.dispatchEvent(new CustomEvent('agi:intro-end',{detail:{cancelled}}));
 if(!cancelled){$('announcement').textContent='公司已启动，进入2021年第一季度。';focusMain();}
}
function start(){
 if(run.started||introTransition)return stateView();
 const reduced=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
 const darken=reduced?150:1800,hold=reduced?150:1400,reveal=reduced?300:1400;
 const layer=document.createElement('div');layer.id='startupTransition';layer.className='startup-transition';layer.setAttribute('aria-hidden','true');layer.dataset.phase='darkening';
 layer.style.transitionDuration=darken+'ms';document.body.append(layer);
 introTransition={layer,timers:[]};document.body.classList.add('is-starting');lockIntro();
 $('announcement').textContent='正在启动公司…';
 void layer.offsetWidth;layer.classList.add('is-dark');
 window.dispatchEvent(new CustomEvent('agi:intro-start',{detail:{duration:darken+hold+reveal}}));
 introTransition.timers.push(setTimeout(()=>{layer.dataset.phase='blackout';},darken));
 introTransition.timers.push(setTimeout(()=>{
  run.started=true;render();lockIntro();layer.dataset.phase='revealing';
  layer.style.transitionDuration=reveal+'ms';layer.classList.remove('is-dark');
 },darken+hold));
 introTransition.timers.push(setTimeout(()=>finishIntro(),darken+hold+reveal));
 return stateView();
}
function selectChoice(id){if(stageTransition||quarterTransition)throw Error('正在切换阶段');if(run.decisionStage!=='event')throw Error('请返回事件阶段修改');if(introTransition)throw Error('正在启动公司');const s=calculate(run.picks);if(!run.started||run.awaiting||s.ending||!currentChoices(s).some(c=>c.id===id))throw Error('无效事件选项');run.choice=id;window.dispatchEvent(new CustomEvent('agi:event-selected',{detail:{id,index:s.index}}));save();updatePreview();return changeDecisionStage('strategy');}
const pinEffects=new WeakMap();
function animateStrategyPin(id,selected){
 const input=[...document.querySelectorAll('input[name="strategyChoice"]')].find(node=>node.value===id),card=input?.closest('.strategy-card');
 if(!card)return;
 for(const animation of pinEffects.get(card)||[])animation.cancel();
 if(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches||!card.animate)return;
 const model=card.querySelector('.pin-model'),shadow=card.querySelector('.pin-shadow'),impact=card.querySelector('.pin-impact'),duration=selected?420:340;
 const motion=selected?[
  {opacity:0,transform:'translate(-5px,-26px) rotate(-27deg) scale(1.25)',offset:0},
  {opacity:1,transform:'translate(0,1px) rotate(-14deg) scale(.94)',offset:.30},
  {opacity:1,transform:'translate(0,-3px) rotate(-9deg) scale(1.05)',offset:.49},
  {opacity:1,transform:'translate(0,0) rotate(-16deg) scale(1)',offset:.73},
  {opacity:1,transform:'translate(0,0) rotate(-14deg) scale(1)',offset:1}
 ]:[
  {opacity:1,transform:'translate(0,0) rotate(-14deg) scale(1)',offset:0},
  {opacity:1,transform:'translate(-1px,-3px) rotate(-25deg) scale(1.04)',offset:.18},
  {opacity:1,transform:'translate(-5px,-15px) rotate(-33deg) scale(1.15)',offset:.55},
  {opacity:0,transform:'translate(-8px,-29px) rotate(-38deg) scale(1.2)',offset:1}
 ];
 const effects=[model.animate(motion,{duration,easing:'linear'}),shadow.animate(selected?[
  {opacity:0,transform:'scale(1.7)',offset:0},{opacity:.65,transform:'scale(.8)',offset:.30},{opacity:.45,transform:'scale(1)',offset:1}
 ]:[{opacity:.45,transform:'scale(1)'},{opacity:0,transform:'scale(1.8)'}],{duration})];
 if(selected){
  effects.push(impact.animate([{opacity:0,transform:'scale(.3)',offset:0},{opacity:0,transform:'scale(.3)',offset:.29},{opacity:.7,transform:'scale(.6)',offset:.30},{opacity:0,transform:'scale(2.3)',offset:1}],{duration}));
  effects.push(card.animate([{transform:'translateY(0)',offset:0},{transform:'translateY(0)',offset:.29},{transform:'translateY(1.5px)',offset:.30},{transform:'translateY(-.5px)',offset:.52},{transform:'translateY(0)',offset:1}],{duration}));
 }
 pinEffects.set(card,effects);
}
function selectStrategy(id,selected=!run.strategies.includes(id)){
 if(stageTransition||quarterTransition)throw Error('正在切换阶段');if(run.decisionStage!=='strategy')throw Error('请先确认事件');
 if(introTransition)throw Error('正在启动公司');
 const s=calculate(run.picks);if(!run.started||run.awaiting||s.ending||!run.offers[s.index]?.includes(id))throw Error('只能选择本季抽到的策略');
 const wasSelected=run.strategies.includes(id);
 if(selected&&!wasSelected){if(run.strategies.length===STRATEGY_COUNT){$('announcement').textContent='已选满三项，请先取消一项。';updatePreview();return;}run.strategies.push(id);}
 else if(!selected)run.strategies=run.strategies.filter(value=>value!==id);
 save();updatePreview();
 if(wasSelected!==run.strategies.includes(id)){
  animateStrategyPin(id,selected);
  window.dispatchEvent(new CustomEvent('agi:strategy-pin',{detail:{selected,id}}));
 }
}
function commit(choice=run.choice,strategies=run.strategies){
 if(stageTransition||quarterTransition)throw Error('正在切换阶段');if(run.decisionStage!=='strategy'||choice!==run.choice)throw Error('请先确认本季事件');
 if(introTransition)throw Error('正在启动公司');
 const s=calculate(run.picks);if(!run.started||run.awaiting||s.ending)throw Error('当前不在决策阶段');
 if(!currentChoices(s).some(c=>c.id===choice)||!Array.isArray(strategies)||strategies.length!==STRATEGY_COUNT||new Set(strategies).size!==STRATEGY_COUNT||strategies.some(id=>!run.offers[s.index]?.includes(id)))throw Error('请选择一项事件和三项不同的本季策略');
 const pick={eventId:run.eventIds[s.index],choice,strategies:[...strategies],choiceOffers:[...run.choiceOffers[s.index]]};
 if(calculate([...run.picks,pick]).index!==s.index+1)throw Error('本季策略已失效，请重新选择');
 const eventRecruit=currentChoices(s).find(c=>c.id===choice)?.recruitScientist;
 const candidates=strategies.includes(TALENT_PROGRAM)?talentCandidates(s.index,s.hired,[...strategies,...(eventRecruit?[eventRecruit]:[])]):[];
 if(candidates.length&&Math.random()<talentChance(s.stats.trust))pick.discoveredScientist=randomItem(candidates).id;
 run.picks.push(pick);run.awaiting=true;run.revealAt=Date.now()+REVEAL_MS;run.choice=null;run.strategies=[];run.decisionStage='event';save();$('game').inert=true;$('game').setAttribute('aria-busy','true');$('restartButton').disabled=true;const button=$('commitButton');if(button){button.disabled=true;button.textContent='正在结算…';}window.dispatchEvent(new Event('agi:quarter-reveal'));scheduleReveal();return stateView();
}
function scheduleReveal(){clearTimeout(revealTimer);revealTimer=setTimeout(()=>{run.revealAt=null;render();window.dispatchEvent(new Event('agi:quarter-settled'));$('announcement').textContent='本季决策已结算。';focusMain();},Math.max(0,run.revealAt-Date.now()));}
function finishQuarterTransition(cancelled=false){
 const transition=quarterTransition;if(!transition)return;
 for(const timer of transition.timers)clearTimeout(timer);
 transition.layer.remove();quarterTransition=null;$('game').classList.remove('quarter-switching');
 if(!transition.rendered)render();
 $('game').inert=false;$('game').setAttribute('aria-busy','false');$('relationsPanel').inert=false;$('restartButton').disabled=false;
 if(!cancelled){$('announcement').textContent=transition.announcement;focusMain();}
}
function next(){
 if(quarterTransition||stageTransition)throw Error('正在进入下一季度');
 if(introTransition)throw Error('正在启动公司');if(isRevealing())throw Error('正在结算');if(!run.started||!run.awaiting)throw Error('没有待确认结果');
 // Accept the advance once, before animating. Reloading cannot settle or advance it twice.
 const s=calculate(run.picks),q=quarter(Math.min(s.index,TOTAL-1));
 clearTimeout(revealTimer);run.awaiting=false;run.revealAt=null;run.decisionStage='event';ensureOffers(s);save();
 const announcement=s.ending?'进入故事结局。':`进入${q.year}年，第${q.quarter}季度。`;
 if(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches){render();$('game').scrollIntoView?.({block:'start',behavior:'instant'});$('announcement').textContent=announcement;focusMain();return stateView();}
 const layer=document.createElement('div');layer.id='quarterTransition';layer.className='quarter-transition';layer.dataset.phase='darkening';layer.setAttribute('aria-hidden','true');
 characterPair=nextCharacterPair||drawCharacterPair();nextCharacterPair=null;nextCharacterTurn=null;
 layer.innerHTML=renderCharacterArt('quarter')+(s.ending?'<div class="quarter-transition-label quarter-transition-ending">结局</div>':`<div class="quarter-transition-label"><span class="quarter-transition-year">${q.year}</span><span class="quarter-transition-quarter">Q${q.quarter}</span></div>`);
 document.body.append(layer);quarterTransition={layer,timers:[],rendered:false,announcement};
 $('game').classList.add('quarter-switching');$('game').inert=true;$('game').setAttribute('aria-busy','true');$('relationsPanel').inert=true;$('restartButton').disabled=true;
 const button=$('nextButton');if(button)button.disabled=true;
 $('game').querySelector('.quarter-result')?.classList.add('quarter-leaving');
 void layer.offsetWidth;layer.classList.add('is-visible');
 const transition=quarterTransition;
 transition.timers.push(setTimeout(()=>{
  if(quarterTransition!==transition)return;
  layer.dataset.phase='holding';render();transition.rendered=true;
  document.querySelector('.page')?.scrollIntoView({block:'start',behavior:'instant'});
 },400));
 transition.timers.push(setTimeout(()=>{if(quarterTransition===transition){layer.dataset.phase='revealing';layer.classList.remove('is-visible');}},1120));
 transition.timers.push(setTimeout(()=>{if(quarterTransition===transition)finishQuarterTransition();},1600));
 return stateView();
}
function closeRestart(){$('restartConfirm').hidden=true;$('game').inert=false;}
function restart(){if(isRevealing()||introTransition||stageTransition)return;finishQuarterTransition(true);closeRestart();run=makeRun();characterPair=null;nextCharacterPair=null;nextCharacterTurn=null;render();focusMain();}
$('game').addEventListener('change',ev=>{if(ev.target.name==='strategyChoice')selectStrategy(ev.target.value,ev.target.checked);});
$('game').addEventListener('click',ev=>{const btn=ev.target.closest('button');if(!btn)return;if(stageTransition||quarterTransition||introTransition||isRevealing())return;if(btn.dataset.choice)selectChoice(btn.dataset.choice);else if(btn.id==='startButton')start();else if(btn.id==='commitButton')commit();else if(btn.id==='nextButton')next();else if(btn.id==='replayButton')restart();});
$('restartButton').onclick=()=>{if(isRevealing()||introTransition||stageTransition||quarterTransition)return;if(!run.picks.length&&!run.choice&&!run.strategies.length||calculate(run.picks).ending&&!run.awaiting)return restart();$('restartConfirm').hidden=false;$('game').inert=true;$('cancelRestart').focus();};
$('cancelRestart').onclick=()=>{closeRestart();$('restartButton').focus();};$('confirmRestart').onclick=restart;
$('relationsToggle').onclick=()=>{relationsCollapsed=!relationsCollapsed;updateRelationsDrawer();try{localStorage.setItem(RELATIONS_PREFERENCE,String(relationsCollapsed));}catch{}};
updateRelationsDrawer();
$('scientists').onclick=()=>{if(!$('scientistDialog').open)$('scientistDialog').showModal();};
$('closeScientists').onclick=()=>$('scientistDialog').close();
$('scientistDialog').addEventListener('click',ev=>{const box=$('scientistDialog').getBoundingClientRect();if(ev.target===$('scientistDialog')&&(ev.clientX<box.left||ev.clientX>box.right||ev.clientY<box.top||ev.clientY>box.bottom))$('scientistDialog').close();});
document.addEventListener('keydown',ev=>{if($('scientistDialog').open)return;if(isRevealing()||introTransition||stageTransition||quarterTransition)return;if(ev.key==='Escape'&&!$('restartConfirm').hidden){closeRestart();$('restartButton').focus();return;}if(ev.repeat||ev.ctrlKey||ev.metaKey||ev.altKey||!$('restartConfirm').hidden||/^(INPUT|TEXTAREA|BUTTON|A)$/.test(document.activeElement.tagName))return;if(ev.key==='Enter'){if(run.awaiting){ev.preventDefault();next();}else if(run.started&&run.decisionStage==='event'&&run.choice){ev.preventDefault();changeDecisionStage('strategy');}else if(run.decisionStage==='strategy'&&run.choice&&run.strategies.length===STRATEGY_COUNT){ev.preventDefault();commit();}}});
window.AGIGame={calculate,getEnding,choiceCandidates,drawEventChoices,validChoiceOffers,peerWeight,peerActive,relationChanges,strategyAffinities,strategicAffinities,partners:PARTNERS,makeDeck,drawStrategies,eligibleStrategy,worldlines:WORLD,recruitChance,talentChance,talentCandidates,strategies:STRATEGIES,quarter,eventChanges,settleQuarter,strategyCost,goalStatus,agiRequirements:{...AGI},initial:{...INITIAL},getState:stateView};
const ctx=document.modelContext;if(ctx?.registerTool){const lifecycle=new AbortController();for(const t of [
 {name:'read_agi_game',title:'读取季度经营状态',description:'读取当前季度、decisionStage（event事件或strategy策略）、切换状态、候选项及已选内容。',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true},execute:stateView},
 {name:'start_agi_game',title:'开始创业',description:'从开场进入2021年第一季度。已有经营中的游戏不会重开。',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:false},execute:start},
 {name:'choose_agi_event',title:'选择事件回应',description:'选择一项事件回应后直接进入策略阶段，不提前结算；切换约0.36秒后可操作。',inputSchema:{type:'object',properties:{choice:{type:'string'}},required:['choice'],additionalProperties:false},annotations:{readOnlyHint:false},execute:input=>selectChoice(input.choice)},
 {name:'return_to_agi_event',title:'返回修改事件',description:'返回事件阶段并保留已选策略。',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:false},execute:()=>changeDecisionStage('event')},
 {name:'choose_agi_decision',title:'执行本季决策',description:'须先通过choose_agi_event确认事件并等待阶段切换完成；在策略阶段传入已确认的事件ID和三个不同策略ID，统一结算。',inputSchema:{type:'object',properties:{choice:{type:'string'},strategies:{type:'array',items:{type:'string'},minItems:3,maxItems:3,uniqueItems:true}},required:['choice','strategies'],additionalProperties:false},annotations:{readOnlyHint:false},execute:input=>commit(input.choice,input.strategies)},
 {name:'advance_agi_round',title:'进入下一季度',description:'确认结果，通过1.6秒的过场进入下一季度或查看结局；transitioning结束后可操作。',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:false},execute:next}
 ])try{Promise.resolve(ctx.registerTool(t,{signal:lifecycle.signal})).catch(()=>{});}catch{}addEventListener('pagehide',()=>lifecycle.abort(),{once:true});}
render();if(isRevealing())scheduleReveal();addEventListener('pagehide',()=>{clearTimeout(revealTimer);finishIntro(true);finishStageTransition(true);finishQuarterTransition(true);});
})();
