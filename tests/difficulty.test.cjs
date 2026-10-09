/* Difficulty must change the whole run, without changing morale or capping reputation. */
const assert=require('node:assert/strict');
const {gameContext}=require('./game-quality.test.cjs');
const c=gameContext(31),g=c.AGIGame,q=c.__quality;
for(const d of g.difficulties){
 const s=g.calculate([],d.level);
 assert.equal(s.stats.cash,d.cash);assert.equal(s.riskLimit,d.riskLimit);
 assert.equal(s.stats.team,70);assert.equal(s.stats.trust,50);assert.equal(s.stats.research,6);
 const edge={...s.stats,risk:d.riskLimit};
 assert.equal(q.failureReason(edge,5,d.level),null,'risk grace period still lasts five quarters');
 assert.equal(q.failureReason({...edge,risk:d.riskLimit-1},6,d.level),null);
 assert.equal(q.failureReason(edge,6,d.level),'lawsuit');
 assert.equal(g.getEnding(edge,{},6,[],false,null,d.level),'lawsuit');
 assert.equal(g.getEnding(edge,{},6,[],false,{route:'nvidia'},d.level),'world_nvidia_fracture');
}
assert.deepEqual({...g.calculate([]).stats},{...g.initial},'unspecified difficulty remains standard');
q.setRun({...q.getRun(),difficulty:5,started:false,picks:[]});
assert.equal(g.calculate([]).stats.cash,1000,'pure replay does not inherit the currently selected difficulty');
assert.match(q.renderIntro(),/data-difficulty="5"/);
assert.match(q.renderIntro(),/id="difficultySlider" type="range" min="1" max="5" step="0.01" value="5"/);
assert.match(q.renderIntro(),/<label for="difficultySlider">难度<\/label>/);
assert.match(q.renderIntro(),/aria-label="难度" aria-valuetext="第 5 档，共 5 档，极限，初始资金 5 亿，风险上限 50"/);
assert.match(q.renderIntro(),/<span class="difficulty-thumb" aria-hidden="true"><\/span>/);
assert.doesNotMatch(q.renderIntro(),/difficultyName|difficultyStats|aria-describedby=/);
const resourcePieces=()=>[...q.renderIntro().matchAll(/<img class="resource-piece"[^>]*>/g)].map(match=>match[0]);
const hardPile=resourcePieces();
assert.equal(hardPile.length,24);
assert.equal(hardPile.filter(piece=>piece.includes('--resource-opacity:1"')).length,3,'hardest difficulty keeps two cash bundles and one GPU');
q.setRun({...q.getRun(),difficulty:1});
const easyPile=resourcePieces();
assert.equal(easyPile.filter(piece=>piece.includes('--resource-opacity:1"')).length,24);
assert.equal(easyPile.filter(piece=>piece.includes('data-resource="cash"')).length,16);
assert.equal(easyPile.filter(piece=>piece.includes('data-resource="gpu"')).length,8);
assert.equal(g.calculate([],1).assets.length,0,'cover resources remain decorative');
assert.match(q.renderIntro(),/id="startupResources" class="startup-resources" aria-hidden="true"/);

const boosted=g.settleQuarter({...g.initial,trust:98,team:98,risk:98},0,{quarterDelta:{trust:20,team:20,risk:20}},[]);
assert.equal(boosted.stats.trust,118);assert.equal(boosted.changes.trust,20);
assert.equal(boosted.stats.team,100);assert.equal(boosted.stats.risk,100);
const stacked=g.settleQuarter(boosted.stats,1,{quarterDelta:{trust:25}},[]);
assert.equal(stacked.stats.trust,143,'reputation gains continue accumulating above 100');
const floor=g.settleQuarter(stacked.stats,2,{quarterDelta:{trust:-999,team:-999}},[]);
assert.equal(floor.stats.trust,0);assert.equal(floor.stats.team,0);
assert.equal(g.recruitChance(500),g.recruitChance(100),'recruitment probability keeps its existing bound');
assert.equal(g.talentChance(500),g.talentChance(100));

// Select six real legal quarters with steadily increasing risk. Replaying the same
// decisions across difficulties must apply both the starting money and risk limit.
const picks=[],deck=g.makeDeck();
for(let index=0;index<6;index++){
 const s=g.calculate(picks,1),event=c.AGI_STORY.catalog.find(e=>e.memeId===deck[index]);
 const offers=g.drawEventChoices(event,index,s.relations,s.exposure),choices=g.choiceCandidates(event,index,s.hired).filter(choice=>offers.includes(choice.id)&&!choice.recruitScientist);
 const pool=c.AGI_STRATEGIES.filter(t=>g.eligibleStrategy(t,index,s.hired,s.completed,s.usage,s.assets)&&t.category!=='recruit'&&!t.releasesModel&&t.cost<=40);
 let best=null;
 for(const choice of choices)for(let a=0;a<pool.length-2;a++)for(let b=a+1;b<pool.length-1;b++)for(let k=b+1;k<pool.length;k++){
  const strategies=[pool[a],pool[b],pool[k]],after=g.settleQuarter(s.stats,index,choice,strategies).stats;
  if(after.cash<=1100||after.team<30)continue;
  const score=-1000*Math.abs(after.risk-(index+1)*10)+Math.min(after.cash,1800)/100+after.team/10;
  if(!best||score>best.score)best={score,pick:{eventId:event.memeId,choice:choice.id,choiceOffers:offers,strategies:strategies.map(t=>t.id)}};
 }
 assert(best,'fixture requires a solvent real decision');picks.push(best.pick);
 assert.equal(g.calculate(picks,1).index,index+1);
}
assert.equal(g.calculate(picks,1).stats.risk,60);
assert.equal(g.calculate(picks,1).ending,null);
assert.equal(g.calculate(picks,3).ending,null);
assert.equal(g.calculate(picks,4).ending,'lawsuit');
assert.equal(g.calculate(picks,5).ending,'lawsuit');
assert.equal(g.calculate(picks,1).stats.cash-g.calculate(picks,5).stats.cash,1000);
assert.deepEqual(g.calculate(picks,1).stats.team,g.calculate(picks,5).stats.team);
console.log('PASS difficulty: all five starting funds and risk limits, pure replay, exact six-quarter failures, unlimited reputation, unchanged morale, and opening controls');
