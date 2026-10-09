/* Growing Threat — TESTUDO & Decerno. Source: Millennium Dawn, CC BY-SA 4.0.
 * AAC for mobile compatibility; attribution: assets/music/CREDITS.txt.
 * The three quiet ending arrangements below are original procedural compositions.
 */
(() => {
'use strict';
const audio=document.getElementById('bgm'),button=document.getElementById('musicButton');
const control=document.getElementById('musicControl'),volumeWrap=document.getElementById('musicVolumeWrap'),volumeSlider=document.getElementById('musicVolume');
const preference='agi-tomorrow-music-v1',volumePreference='agi-tomorrow-music-volume-v2',legacyVolumePreference='agi-tomorrow-music-volume-v1',musicLevel=.25,backgroundMix=.75;
const credits='Growing Threat — TESTUDO & Decerno · Millennium Dawn · CC BY-SA 4.0';
let soundOn=true,pending=false,failed=false,needsGesture=false,operation=0,inIntro=false,pageActive=true;
const retiringScores=new Set();
let audioGraph,webAudioUnavailable=false,score,fadeFrame=0,pauseTimer,level=musicLevel,scene='cover',endingMood='neutral',endingId='';
let volumePercent=100;
function validVolume(value){const number=Number(value);return value==null||value===''||!Number.isFinite(number)?100:Math.max(0,Math.min(100,Math.round(number)));}
try{soundOn=localStorage.getItem(preference)!=='off';}catch{}
try{
 const saved=localStorage.getItem(volumePreference),legacy=localStorage.getItem(legacyVolumePreference);
 if(saved!=null)volumePercent=validVolume(saved);
 else if(legacy!=null&&legacy!==''&&Number.isFinite(Number(legacy))){
  volumePercent=Math.max(1,Math.min(5,Math.round(Number(legacy))))*20;
  localStorage.setItem(volumePreference,String(volumePercent));
 }
}catch{}
// The existing on/off preference represents silence, while this value remembers
// the last audible setting so the mute button can restore it after a reload.
if(!volumePercent){volumePercent=100;soundOn=false;remember('off');}
function outputRatio(){return volumePercent/100*backgroundMix;}
audio.volume=soundOn?level*outputRatio():0;
function remember(value){try{localStorage.setItem(preference,value);}catch{}}
function rememberVolume(){try{localStorage.setItem(volumePreference,String(volumePercent));}catch{}}
function setVolume(value){level=value;const output=soundOn?value*outputRatio():0;if(audioGraph?.source)audioGraph.gain.gain.value=output;else audio.volume=output;}
function selectVolume(){
 const selected=validVolume(volumeSlider.value);
 if(!selected){if(soundOn||failed||pending)stop();else update();return;}
 volumePercent=selected;rememberVolume();
 if(!soundOn){soundOn=true;remember('on');window.dispatchEvent(new Event('agi:unmute'));}
 failed=false;
 setVolume(level);
 if(score)score.output.gain.value=outputRatio();
 for(const retiring of retiringScores)retiring.output.gain.value=outputRatio();
 update();
 // A slider gesture can also unlock restored audio, without restarting an active
 // track or replacing the intro/scene fade already in progress.
 if(!pageActive)return;
 if(audioGraph?.context.state==='suspended'||(scene==='ending'&&audioGraph?!score:audio.paused))startFromGesture();
}
function unlockAudio(){
 // iOS ignores media-element volume. Prefer a gain node, retaining native playback
 // if a browser cannot attach this media element to Web Audio.
 const Audio=window.AudioContext||window.webkitAudioContext;
 if(!Audio||webAudioUnavailable)return Promise.resolve();
 if(!audioGraph){
  let context;
  try{context=new Audio();}catch{webAudioUnavailable=true;return Promise.resolve();}
  const gain=context.createGain();gain.gain.value=level*outputRatio();gain.connect(context.destination);
  // Save the context before binding the element: a binding error must not leak a
  // fresh AudioContext on every retry or disable the separately synthesized ending.
  audioGraph={context,gain,source:null};
  try{
   const source=context.createMediaElementSource(audio);source.connect(gain);
   audioGraph.source=source;audio.volume=1;
  }catch{audio.volume=level*outputRatio();}
 }
 return audioGraph.context.state==='running'?Promise.resolve():audioGraph.context.resume();
}
function volumeTo(target,duration=0){
 cancelAnimationFrame(fadeFrame);
 if(!duration){setVolume(target);return;}
 const from=level,started=performance.now();
 function step(now){const fraction=Math.min(1,(now-started)/duration);setVolume(from+(target-from)*fraction);if(fraction<1)fadeFrame=requestAnimationFrame(step);}
 fadeFrame=requestAnimationFrame(step);
}
function pauseBackground(duration=0){
 clearTimeout(pauseTimer);volumeTo(0,duration);
 if(duration)pauseTimer=setTimeout(()=>audio.pause(),duration);else audio.pause();
}
function update(){
 const active=soundOn&&!failed&&!needsGesture;
 button.textContent=pending?'♫ 加载中':failed?'♫ 重试声音':needsGesture?'♫ 播放':soundOn?'♫':'♫ 声音关';
 button.setAttribute('aria-pressed',String(active));
 button.setAttribute('aria-label',failed?'重新开启声音':needsGesture?'播放声音':soundOn?'关闭声音':'开启声音');
 button.title=(soundOn&&!needsGesture?'点击关闭':'点击播放')+' · '+(scene==='ending'?'原创结局配乐':credits);
 if(control)control.dataset.sound=pending?'loading':failed?'error':soundOn?'on':'off';
 if(volumeWrap){volumeWrap.hidden=false;volumeWrap.style.setProperty('--volume-position',String((soundOn?volumePercent:0)/100));}
 if(volumeSlider){volumeSlider.value=String(soundOn?volumePercent:0);volumeSlider.setAttribute('aria-valuetext',soundOn?`${volumePercent}%`:'静音');}
}
const ENDING_SCORES={
 success:{chords:[[50,57,61,64],[47,54,57,62],[43,50,54,59],[45,52,57,61]],melody:[[74,78,81],[78,76,74],[71,74,78],[76,73,74]]},
 neutral:{chords:[[50,57,60,64],[46,53,57,60],[48,55,59,62],[45,52,55,60]],melody:[[76,74,69],[72,74,77],[74,71,67],[72,69,74]]},
 failure:{chords:[[50,57,60,65],[46,53,57,60],[43,50,57,62],[45,52,55,60]],melody:[[77,76,74],[72,69,65],[69,67,62],[64,67,69]]}
};
function disconnectScore(state){
 if(!state||state.disposed)return;retiringScores.delete(state);state.disposed=true;clearTimeout(state.timer);clearTimeout(state.cleanup);
 for(const source of state.sources){try{source.stop();}catch{}}
 for(const node of state.nodes){try{node.disconnect();}catch{}}
 state.sources.clear();state.nodes.clear();
}
function stopScore(duration=0){
 if(!duration)for(const retiring of [...retiringScores])disconnectScore(retiring);
 const state=score;score=undefined;if(!state)return;
 clearTimeout(state.timer);state.stopping=true;
 if(!duration||!audioGraph||audioGraph.context.state!=='running'){disconnectScore(state);return;}
 const now=audioGraph.context.currentTime,param=state.master.gain;
 // A freshly started fade can be interrupted safely without jumping to full volume.
 const current=Math.min(state.volume,Math.max(0,(now-state.startedAt)/1.2)*state.volume);
 param.cancelScheduledValues(now);param.setValueAtTime(current,now);param.linearRampToValueAtTime(0,now+duration/1000);
 retiringScores.add(state);state.cleanup=setTimeout(()=>disconnectScore(state),duration+30);
}
function startScore(){
 if(score||!audioGraph||audioGraph.context.state!=='running')return;
 const context=audioGraph.context,now=context.currentTime;
 const arrangement=ENDING_SCORES[endingMood]||ENDING_SCORES.neutral;
 const state={sources:new Set(),nodes:new Set(),startedAt:now,nextAt:now+.06,bar:0,volume:endingMood==='failure'?.8:.9,stopping:false,disposed:false};
 const node=value=>{state.nodes.add(value);return value;};
 const master=node(context.createGain()),output=node(context.createGain()),filter=node(context.createBiquadFilter()),delay=node(context.createDelay(1)),echo=node(context.createGain()),feedback=node(context.createGain());
 state.master=master;state.output=output;score=state;output.gain.value=outputRatio();
 master.gain.setValueAtTime(0,now);master.gain.linearRampToValueAtTime(state.volume,now+1.2);
 filter.type='lowpass';filter.frequency.value=1800;filter.Q.value=.5;
 delay.delayTime.value=.34;echo.gain.value=.13;feedback.gain.value=.2;
 filter.connect(master);filter.connect(delay);delay.connect(echo);echo.connect(master);delay.connect(feedback);feedback.connect(delay);master.connect(output);output.connect(context.destination);
 function note(midi,at,duration,volume,kind='pad'){
  const oscillator=node(context.createOscillator()),gain=node(context.createGain());state.sources.add(oscillator);
  const attack=kind==='pad'?.55:kind==='bass'?.12:.018;
  oscillator.type=kind==='pad'?'triangle':'sine';oscillator.frequency.value=440*2**((midi-69)/12);
  if(kind==='pad')oscillator.detune.value=midi%2?2:-2;
  gain.gain.setValueAtTime(.0001,at);gain.gain.linearRampToValueAtTime(volume,at+attack);
  if(kind==='pad')gain.gain.linearRampToValueAtTime(volume*.72,at+duration*.65);
  gain.gain.exponentialRampToValueAtTime(.0001,at+duration);
  oscillator.connect(gain);gain.connect(filter);oscillator.start(at);oscillator.stop(at+duration+.02);
  oscillator.onended=()=>{state.sources.delete(oscillator);state.nodes.delete(oscillator);state.nodes.delete(gain);oscillator.disconnect();gain.disconnect();};
 }
 function schedule(){
  if(score!==state||state.stopping||state.disposed)return;
  // If a browser throttled timers, resume at a bar boundary rather than replaying old notes.
  if(state.nextAt<context.currentTime-.1){state.bar+=Math.ceil((context.currentTime-state.nextAt)/6);state.nextAt=context.currentTime+.06;}
  while(state.nextAt<context.currentTime+1.2){
   const index=state.bar%4,chord=arrangement.chords[index],at=state.nextAt;
   chord.forEach((pitch,i)=>note(pitch,at+i*.035,6.6,.024));
   note(chord[0]-12,at,5.8,.034,'bass');
   arrangement.melody[index].forEach((pitch,i)=>{const start=at+.7+i*1.7;note(pitch,start,2.6,.085,'melody');note(pitch+12,start,1.3,.009,'melody');});
   state.bar++;state.nextAt+=6;
  }
  state.timer=setTimeout(schedule,500);
 }
 schedule();
}
async function start({quietFailure=false}={}){
 if(!soundOn||!pageActive||pending)return;
 needsGesture=false;
 if(scene==='ending'&&score&&audioGraph?.context.state==='running'){update();return;}
 if(scene!=='ending'&&!audio.paused&&(!audioGraph||audioGraph.context.state==='running')){clearTimeout(pauseTimer);volumeTo(inIntro?0:musicLevel,400);update();return;}
 const request=++operation,targetScene=scene;pending=true;failed=false;update();
 try{
  // Invoke resume and play before awaiting so Safari receives the original user gesture.
  const resumed=unlockAudio();
  let playing=Promise.resolve();
  if(scene!=='ending'||!audioGraph){
   clearTimeout(pauseTimer);
   // Cancel any previous scene's fade as well as its pause timer. Native audio
   // must stay audible when Web Audio is unavailable and the ending falls back.
   volumeTo(inIntro?0:scene==='ending'?.16:musicLevel,700);
   if(audio.error)audio.load();playing=audio.play();
  }
  await Promise.all([resumed,playing]);
  if(request!==operation||targetScene!==scene||!pageActive||!soundOn)return;
  pending=false;if(scene==='ending'&&audioGraph)startScore();update();
 }catch(error){if(request!==operation)return;pending=false;needsGesture=quietFailure&&error.name!=='AbortError';failed=!quietFailure&&error.name!=='AbortError';update();}
}
function startFromGesture(){
 // Autoplay can leave resume()/play() pending until a trusted interaction. Start
 // a fresh attempt in that gesture so an older pending request cannot block it.
 if(pending&&(audioGraph?.context.state==='suspended'||audio.paused)){operation++;pending=false;}
 start();
}
function stop(){
 operation++;pending=false;failed=false;needsGesture=false;soundOn=false;pauseBackground();stopScore();remember('off');
 window.dispatchEvent(new Event('agi:mute'));update();
}
button.addEventListener('click',()=>{
 const awaitingUnlock=pending&&(audioGraph?.context.state==='suspended'||audio.paused);
 if(soundOn&&!failed&&!needsGesture&&!awaitingUnlock)stop();
 else{soundOn=true;failed=false;remember('on');rememberVolume();window.dispatchEvent(new Event('agi:unmute'));startFromGesture();update();}
});
volumeSlider?.addEventListener('input',selectVolume);
volumeSlider?.addEventListener('change',selectVolume);
function firstInteraction(event){
 if(!event.isTrusted||!soundOn||!pageActive||event.target.closest('#musicControl, #musicButton')||inIntro)return;
 if(event.type==='keydown'&&!['Enter',' ','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(event.key))return;
 if(!event.target.closest('.page,dialog'))return;
 startFromGesture();
}
document.addEventListener('click',firstInteraction,true);
document.addEventListener('keydown',firstInteraction);
function syncScene(){
 const data=document.documentElement.dataset,next=['game','ending'].includes(data.musicScene)?data.musicScene:'cover';
 const mood=Object.prototype.hasOwnProperty.call(ENDING_SCORES,data.endingMood)?data.endingMood:'neutral',id=data.endingId||'';
 if(next===scene&&(next!=='ending'||mood===endingMood&&id===endingId)){update();return;}
 operation++;pending=false;failed=false;stopScore(300);scene=next;endingMood=mood;endingId=id;
 if(scene==='cover'){inIntro=false;if(soundOn)start({quietFailure:true});}else if(scene==='ending'){pauseBackground(650);if(audioGraph?.context.state==='running'||!audio.paused)start({quietFailure:true});}else if(soundOn&&(audioGraph?.context.state==='running'||!audio.paused))start({quietFailure:true});
 update();
}
window.addEventListener('agi:music-scene',syncScene);
window.addEventListener('agi:intro-start',()=>{
 operation++;pending=false;failed=false;inIntro=true;stopScore();pauseBackground();if(soundOn)start();update();
});
window.addEventListener('agi:intro-end',()=>{
 inIntro=false;
 if(soundOn){start();if(scene!=='ending')volumeTo(musicLevel,900);}
 update();
});
audio.addEventListener('playing',update);audio.addEventListener('pause',update);
audio.addEventListener('error',()=>{if(scene==='ending'&&audioGraph)return;operation++;pending=false;needsGesture=false;failed=soundOn;update();});
window.addEventListener('pagehide',()=>{pageActive=false;operation++;pending=false;inIntro=false;pauseBackground();stopScore();if(audioGraph?.context.state==='running')audioGraph.context.suspend().catch(()=>{});});
window.addEventListener('pageshow',()=>{pageActive=true;syncScene();if(soundOn)start({quietFailure:true});});
syncScene();if(scene==='cover'&&soundOn)start({quietFailure:true});update();
})();
