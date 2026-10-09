/* Save migration protection and BFCache reveal regression tests. */
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),SAVE='agi-tomorrow-game',BACKUP='agi-tomorrow-game-recovery';
function fixture(raw=null,{failBackup=false,previousBackup=null}={}){
 let now=100000,serial=0,randomSeed=19;
 const timers=new Map(),handlers=new Map(),nodes=new Map(),store=new Map(),writes=[];
 if(raw!==null)store.set(SAVE,raw);if(previousBackup!==null)store.set(BACKUP,previousBackup);
 const node=id=>{if(!nodes.has(id))nodes.set(id,{hidden:true,dataset:{},children:[],classList:{toggle(){},add(){},remove(){}},setAttribute(){},addEventListener(type,fn){this['on'+type]=fn;},querySelector(selector){return node(selector);},querySelectorAll(){return[];},style:{setProperty(key,value){this[key]=value;}}});return nodes.get(id);};
 const later=(fn,delay)=>{const id=++serial;timers.set(id,{fn,at:now+delay});return id;};
 const emit=type=>{for(const fn of handlers.get(type)||[])fn({type,persisted:true});};
 const advance=ms=>{now+=ms;for(let pass=0;pass<10;pass++){const due=[...timers].filter(([,t])=>t.at<=now);if(!due.length)return;for(const [id,t]of due){timers.delete(id);t.fn();}}throw Error('timer runaway');};
 const context={console,Math:Object.assign(Object.create(Math),{random:()=>((randomSeed=(Math.imul(randomSeed,1664525)+1013904223)>>>0)/4294967296)}),Date:class extends Date{static now(){return now;}},Set,Map,WeakMap,Object,Array,JSON,Number,String,Boolean,Error,Promise,AbortController,Event,CustomEvent:class extends Event{constructor(type,init){super(type);this.detail=init?.detail;}},setTimeout:later,clearTimeout:id=>timers.delete(id),localStorage:{getItem:key=>store.get(key)??null,setItem(key,value){if(key===BACKUP&&failBackup)throw Error('quota');store.set(key,value);writes.push(key);},removeItem:key=>store.delete(key)},addEventListener(type,fn){if(!handlers.has(type))handlers.set(type,[]);handlers.get(type).push(fn);},document:{documentElement:{dataset:{}},getElementById:node,addEventListener(){},querySelectorAll(){return[];}}};
 context.window=context;context.dispatchEvent=()=>{};context.renderCount=0;
 vm.createContext(context);
 for(const file of ['story.js','strategies.js','partners.js','worldlines.js','worldline-engine.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
 let source=fs.readFileSync(path.join(root,'game.js'),'utf8');
 source=source.replace('window.AGIGame={','window.__saveTest={getRun:()=>run,getCollected:()=>collected,save};window.AGIGame={');
 // Exercise the real load/save and lifecycle handlers while replacing only DOM
 // painting. This keeps the test independent of number-wheel markup.
 const initial='render();if(isRevealing())scheduleReveal();addEventListener';
 assert(source.includes(initial));
 source=source.replace(initial,`render=()=>{renderCount++;const s=calculate(run.picks,run.difficulty);ensureOffers(s);$('game').inert=isRevealing();$('restartButton').disabled=isRevealing();$('game').phase=isRevealing()?'settling':run.awaiting?'result':'decision';save();};focusMain=()=>{};render();if(isRevealing())scheduleReveal();addEventListener`);
 vm.runInContext(source,context,{filename:'game.js'});
 return {c:context,g:context.AGIGame,q:context.__saveTest,store,writes,timers,node,emit,advance};
}
const seed=fixture(),g=seed.g,picks=[],deck=g.makeDeck();
for(let index=0;index<2;index++){
 const s=g.calculate(picks),event=seed.c.AGI_STORY.catalog.find(e=>e.memeId===deck[index]),offers=g.drawEventChoices(event,index,s.relations,s.exposure);
 const strategies=seed.c.AGI_STRATEGIES.filter(t=>g.eligibleStrategy(t,index,s.hired,s.completed,s.usage,s.assets)&&t.cost<12&&t.category!=='recruit'&&!t.requiresUnreleasedModel).slice(0,3).map(t=>t.id);
 picks.push({eventId:event.memeId,choice:offers[0],choiceOffers:offers,strategies});
 assert.equal(g.calculate(picks).index,index+1);
}
function saved(turns=picks,extra={}){return JSON.stringify({run:{started:true,picks:turns,eventIds:deck,offers:[],choiceOffers:[],awaiting:false,choice:null,strategies:[],decisionStage:'event',...extra},collected:['bankrupt']});}
const original=saved(),valid=fixture(original);
assert.equal(valid.q.getRun().picks.length,2,'valid old progress must not rewind');assert.equal(valid.store.has(BACKUP),false);assert.equal(valid.node('saveRecoveryNotice').hidden,true);assert.deepEqual([...valid.q.getCollected()],['bankrupt']);
valid.node('restartButton').onclick();assert.equal(valid.q.getRun().started,false,'one click returns to the opening');assert.equal(valid.q.getRun().picks.length,0);assert.equal(JSON.parse(valid.store.get(SAVE)).run.picks.length,0,'restart immediately replaces current progress');assert.deepEqual([...valid.q.getCollected()],['bankrupt'],'restart keeps collected endings');
const invalidPicks=JSON.parse(JSON.stringify(picks));invalidPicks[1].choiceOffers[2]='context:offer-removed-by-rules-update';
const incompatible=saved(invalidPicks),recovered=fixture(incompatible);
assert.equal(recovered.q.getRun().picks.length,1,'retain the longest valid prefix');assert.equal(recovered.g.calculate(recovered.q.getRun().picks).index,1);
assert.equal(recovered.store.get(BACKUP),incompatible,'backup is verbatim');assert.equal(JSON.parse(recovered.store.get(SAVE)).run.picks.length,1);
assert.equal(recovered.q.getRun().choice,null);assert.equal(recovered.q.getRun().strategies.length,0);assert.equal(recovered.q.getRun().choiceOffers[1].length,5);assert.equal(recovered.q.getRun().offers[1].length,9);
assert.equal(recovered.node('saveRecoveryNotice').hidden,false);assert.match(recovered.node('saveRecoveryText').textContent,/2021 Q2/);assert.deepEqual([...recovered.q.getCollected()],['bankrupt']);
recovered.node('dismissSaveRecovery').onclick();assert.equal(recovered.node('saveRecoveryNotice').hidden,true);
const reload=fixture(recovered.store.get(SAVE),{previousBackup:incompatible});assert.equal(reload.q.getRun().picks.length,1);assert.equal(reload.store.get(BACKUP),incompatible);assert.equal(reload.writes.includes(BACKUP),false,'do not overwrite recovery backup on refresh');
const blocked=fixture(incompatible,{failBackup:true});assert.equal(blocked.q.getRun().picks.length,1);assert.equal(blocked.store.get(SAVE),incompatible);assert.equal(blocked.writes.includes(SAVE),false,'backup failure blocks autosave');
blocked.node('dismissSaveRecovery').onclick();blocked.q.save();assert.equal(blocked.store.get(SAVE),incompatible,'dismiss does not authorize overwriting');blocked.node('restartButton').onclick();assert.equal(JSON.parse(blocked.store.get(SAVE)).run.picks.length,0,'explicit new game permits saving again');
const occupied=fixture(incompatible,{previousBackup:'older-backup'});assert.equal(occupied.store.get(BACKUP),'older-backup');assert.equal(occupied.store.get(SAVE),incompatible,'do not discard either original when a different backup exists');
// Expired reveal after BFCache: render results once, without replaying the pick.
const revealing=fixture(saved(picks.slice(0,1),{awaiting:true,revealAt:101600}));assert.equal(revealing.node('game').inert,true);revealing.node('restartButton').onclick();assert.equal(revealing.q.getRun().picks.length,1,'restart remains blocked during settlement');revealing.emit('pagehide');assert.equal(revealing.timers.size,0);revealing.advance(2500);revealing.emit('pageshow');assert.equal(revealing.node('game').phase,'result');assert.equal(revealing.node('game').inert,false);assert.equal(revealing.node('restartButton').disabled,false);assert.equal(revealing.q.getRun().picks.length,1);assert.equal(revealing.q.getRun().revealAt,null);revealing.emit('pageshow');assert.equal(revealing.q.getRun().picks.length,1,'repeated restore must not append picks');
// Returning before the reveal deadline schedules just the remaining interval.
const early=fixture(saved(picks.slice(0,1),{awaiting:true,revealAt:101600}));early.emit('pagehide');early.advance(300);early.emit('pageshow');assert.equal(early.node('game').phase,'settling');assert.equal(early.timers.size,1);early.advance(1299);assert.equal(early.node('game').inert,true);early.advance(1);assert.equal(early.node('game').phase,'result');assert.equal(early.q.getRun().picks.length,1);assert.equal(early.timers.size,0);
// Old saves keep standard economics; chosen rules survive reload, recovery and restart.
assert.equal(valid.q.getRun().difficulty,3);
for(const difficulty of [1,2,3,4,5]){
 const selected=fixture(saved(picks,{difficulty})),state=selected.g.getState();
 assert.equal(selected.q.getRun().difficulty,difficulty);
 assert.equal(state.difficulty.level,difficulty);
 assert.equal(state.stats.cash,selected.g.calculate(picks,difficulty).stats.cash);
 const repaired=fixture(saved(invalidPicks,{difficulty}));
 assert.equal(repaired.q.getRun().difficulty,difficulty,'recovery retains the original rules');
 assert.equal(repaired.g.getState().stats.cash,repaired.g.calculate(picks.slice(0,1),difficulty).stats.cash);
 selected.node('restartButton').onclick();
 assert.equal(selected.q.getRun().difficulty,difficulty,'direct restart retains the selected difficulty');
 assert.equal(selected.g.getState().stats.cash,selected.g.difficulties[difficulty-1].cash);
 assert.equal(fixture(selected.store.get(SAVE)).q.getRun().difficulty,difficulty);
}
for(const invalid of [null,0,6,'invalid',2.5])assert.equal(fixture(saved(picks,{difficulty:invalid})).q.getRun().difficulty,3);
const opening=fixture(saved([],{started:false})),paintCount=opening.c.renderCount;
const baseResource=opening.node('baseResource'),fadingResource=opening.node('fadingResource');
baseResource.dataset={base:'true',cutoff:'5'};fadingResource.dataset={base:'false',cutoff:'3.4'};
opening.node('startupResources').children=[baseResource,fadingResource];
const initialWrites=opening.writes.length;
opening.node('game').oninput({target:{id:'difficultySlider',value:'3.22'}});
assert.equal(opening.node('difficultySlider').value,'3.22','drag position remains continuous');
assert(Math.abs(Number(opening.node('difficultySliderWrap').style['--difficulty-position'])-.555)<1e-9);
assert.equal(opening.q.getRun().difficulty,3,'rules still use the nearest whole difficulty');
assert.equal(opening.writes.length,initialWrites,'motion within one level does not rewrite storage');
assert.equal(opening.node('difficultySliderWrap').dataset.snapping,'false');
assert.equal(baseResource.style['--resource-opacity'],'1');
assert(Math.abs(Number(fadingResource.style['--resource-opacity'])-.54)<1e-9,'resource piles fade continuously with the actual drag position');
assert(Math.abs(Number(opening.node('startupResources').style['--resource-density'])-.445)<1e-9);
opening.node('game').oninput({target:{id:'difficultySlider',value:'4.84'}});
assert.equal(opening.q.getRun().difficulty,5);
assert.equal(opening.node('.start-screen').dataset.difficulty,'5');
assert.equal(opening.node('difficultySlider').value,'4.84');
assert.equal(opening.node('difficultySliderWrap').style['--difficulty-position'],'0.96');
assert.equal(JSON.parse(opening.store.get(SAVE)).run.difficulty,5,'only whole difficulty levels are stored');
opening.node('game').onchange({target:{id:'difficultySlider',value:'4.84'}});
assert.equal(opening.node('difficultySlider').value,'5','release snaps to the nearest level');
assert.equal(opening.node('difficultySliderWrap').dataset.snapping,'true');
assert.equal(opening.node('difficultySliderWrap').style['--difficulty-position'],'1');
assert.equal(opening.node('startupResources').style['--resource-density'],'0');
assert.equal(fadingResource.style['--resource-opacity'],'0');
assert.equal(baseResource.style['--resource-opacity'],'1');
assert.equal(opening.c.renderCount,paintCount,'dragging updates controls in place without replacing the slider');
assert.equal(JSON.parse(opening.store.get(SAVE)).run.difficulty,5);
assert.equal(fixture(opening.store.get(SAVE)).g.getState().stats.cash,500);
for(const [key,level] of [['ArrowLeft',4],['ArrowDown',3],['ArrowRight',4],['ArrowUp',5],['ArrowUp',5],['Home',1],['ArrowLeft',1],['End',5]]){
 let prevented=false;
 opening.node('game').onkeydown({target:{id:'difficultySlider'},key,preventDefault(){prevented=true;}});
 assert(prevented,'custom keyboard steps replace fractional native steps');
 assert.equal(opening.q.getRun().difficulty,level);assert.equal(opening.node('difficultySlider').value,String(level));
 assert.equal(opening.node('difficultySliderWrap').dataset.snapping,'true');
 assert.equal(JSON.parse(opening.store.get(SAVE)).run.difficulty,level);
}
opening.node('game').oninput({target:{id:'difficultySlider',value:'4.9'}});
assert.equal(opening.node('difficultySliderWrap').dataset.snapping,'false','a new drag tracks the pointer immediately');
assert.equal(opening.node('difficultySlider').value,'4.9');
opening.q.getRun().started=true;
opening.node('game').oninput({target:{id:'difficultySlider',value:'1'}});
assert.equal(opening.q.getRun().difficulty,5,'an ongoing run cannot change difficulty');
console.log('PASS save-recovery: valid saves, prefix recovery, exact one-time backup, dismiss, backup failure protection, explicit restart, five persisted difficulties, locked rules, BFCache expired/remaining reveal and no duplicate picks.');
