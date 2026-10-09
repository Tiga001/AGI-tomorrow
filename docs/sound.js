/* Original mechanical event confirmation / UI / startup sounds + locally bundled
 * Millennium Dawn settlement popup. Audio attribution: assets/sfx/CREDITS.txt. */
(() => {
'use strict';
const settlement=document.getElementById('settlementSound');
const eventSelection=document.getElementById('eventSelectionSound');
let context,airBuffer,keyBuffer,pinBuffer,intro,muted=false,audioOperation=0;
const pinActions=new Map();
if(settlement)settlement.volume=.3;
if(eventSelection)eventSelection.volume=.48;
function enabled(){try{return localStorage.getItem('agi-tomorrow-music-v1')!=='off';}catch{return true;}}
function stopEventSelection(){if(!eventSelection)return;eventSelection.pause();eventSelection.currentTime=0;}
function playEventSelection(){
 if(!enabled()||muted||!eventSelection)return;
 // Dispatched only after game.js?v=ab5a0b54273d accepts the choice, still in its user gesture.
 // Rewind the same element instead of layering duplicate confirmation impacts.
 try{stopEventSelection();eventSelection.play().catch(()=>{});}catch{}
}
function audioContext(){
 const Audio=window.AudioContext||window.webkitAudioContext;
 if(!Audio)return null;
 if(!context||context.state==='closed'){context=new Audio();airBuffer=keyBuffer=pinBuffer=undefined;}
 return context;
}
async function clickSound(){
 if(!enabled()||muted)return;
 const operation=audioOperation;
 try{
  const audio=audioContext();if(!audio)return;
  if(audio.state==='suspended')await audio.resume();
  if(!enabled()||muted||operation!==audioOperation||audio.state!=='running')return;
  const tone=audio.createOscillator(),gain=audio.createGain(),now=audio.currentTime;
  tone.type='sine';tone.frequency.setValueAtTime(900,now);tone.frequency.exponentialRampToValueAtTime(460,now+.045);
  gain.gain.setValueAtTime(.0001,now);gain.gain.exponentialRampToValueAtTime(.045,now+.003);gain.gain.exponentialRampToValueAtTime(.0001,now+.05);
  tone.connect(gain);gain.connect(audio.destination);tone.start(now);tone.stop(now+.055);
  tone.onended=()=>{tone.disconnect();gain.disconnect();};
 }catch{}
}
function noiseBuffer(audio,seconds){
 const buffer=audio.createBuffer(1,Math.ceil(audio.sampleRate*seconds),audio.sampleRate),data=buffer.getChannelData(0);
 for(let i=0;i<data.length;i++)data[i]=Math.random()*2-1;
 return buffer;
}
function stopPinAction(action){
 if(!action)return;
 action.cancelled=true;
 for(const source of action.sources){try{source.stop();}catch{}}
 for(const node of action.nodes){try{node.disconnect();}catch{}}
 action.sources.clear();action.nodes.clear();
 if(pinActions.get(action.id)===action)pinActions.delete(action.id);
}
function stopPinAudio(){for(const action of [...pinActions.values()])stopPinAction(action);}
async function pinSound(detail){
 const id=detail?.id??'strategy-pin';
 // A rapid reversal replaces only this card's gesture, including scheduled sounds.
 stopPinAction(pinActions.get(id));
 if(typeof detail?.selected!=='boolean'||!enabled()||muted)return;
 const selected=detail.selected,operation=audioOperation;
 const action={id,startedAt:performance.now(),cancelled:false,sources:new Set(),nodes:new Set()};
 pinActions.set(id,action);
 try{
  const audio=audioContext();if(!audio){stopPinAction(action);return;}
  // Unlock in the checkbox's original pointer or keyboard gesture, before any delay.
  if(audio.state==='suspended')await audio.resume();
  const elapsed=performance.now()-action.startedAt,impactDelay=selected?125:60;
  if(action.cancelled||!enabled()||muted||operation!==audioOperation||audio.state!=='running'||elapsed>impactDelay+100){stopPinAction(action);return;}
  const now=audio.currentTime,impact=now+Math.max(0,impactDelay-elapsed)/1000;
  const node=value=>{action.nodes.add(value);return value;};
  const source=value=>{action.sources.add(value);node(value);value.onended=()=>{action.sources.delete(value);if(!action.sources.size)stopPinAction(action);};return value;};
  // A short, present transient stays audible over the game's quiet background music.
  const master=node(audio.createGain());master.gain.value=.9;master.connect(audio.destination);
  pinBuffer??=noiseBuffer(audio,.16);
  const click=source(audio.createBufferSource()),filter=node(audio.createBiquadFilter()),clickGain=node(audio.createGain());
  click.buffer=pinBuffer;
  filter.type='bandpass';filter.frequency.value=selected?2450:3400;filter.Q.value=.7;
  const clickAt=selected?impact:Math.max(now,impact-.028);
  clickGain.gain.setValueAtTime(.0001,clickAt);
  clickGain.gain.exponentialRampToValueAtTime(selected?.22:.12,selected?impact+.0015:Math.max(clickAt+.001,impact-.002));
  clickGain.gain.exponentialRampToValueAtTime(.0001,impact+(selected?.027:.035));
  click.connect(filter);filter.connect(clickGain);clickGain.connect(master);click.start(clickAt);click.stop(impact+.045);
  const body=source(audio.createOscillator()),bodyGain=node(audio.createGain());
  body.type='sine';body.frequency.setValueAtTime(selected?225:310,impact);
  body.frequency.exponentialRampToValueAtTime(selected?84:510,impact+(selected?.055:.027));
  bodyGain.gain.setValueAtTime(.0001,impact);bodyGain.gain.exponentialRampToValueAtTime(selected?.17:.08,impact+.002);
  bodyGain.gain.exponentialRampToValueAtTime(.0001,impact+(selected?.085:.048));
  body.connect(bodyGain);bodyGain.connect(master);body.start(impact);body.stop(impact+(selected?.095:.06));
  if(selected){
   // The tiny high tap gives the thumbtack a hard head without a musical chime.
   const head=source(audio.createOscillator()),headGain=node(audio.createGain());
   head.type='sine';head.frequency.setValueAtTime(1470,impact);head.frequency.exponentialRampToValueAtTime(920,impact+.024);
   headGain.gain.setValueAtTime(.0001,impact);headGain.gain.exponentialRampToValueAtTime(.03,impact+.001);
   headGain.gain.exponentialRampToValueAtTime(.0001,impact+.029);
   head.connect(headGain);headGain.connect(master);head.start(impact);head.stop(impact+.035);
  }
 }catch{stopPinAction(action);}
}
function stopIntroAudio(state){
 if(!state)return;
 state.operation++;
 for(const source of state.sources){try{source.stop();}catch{}}
 for(const node of state.nodes){try{node.disconnect();}catch{}}
 state.sources.clear();state.nodes.clear();state.playing=false;
}
function endIntro(){
 if(!intro)return;
 const state=intro;intro=undefined;clearTimeout(state.timer);stopIntroAudio(state);
}
function buildIntroAudio(state,audio){
 const elapsed=performance.now()-state.startedAt,remaining=state.duration-elapsed;
 if(remaining<=30||state.playing)return;
 state.playing=true;
 const now=audio.currentTime,end=now+remaining/1000;
 const node=value=>{state.nodes.add(value);return value;};
 const source=value=>{state.sources.add(value);return node(value);};
 const master=node(audio.createGain());master.connect(audio.destination);
 const fadeIn=Math.min(1200,state.duration*.3),fadeOut=Math.min(700,state.duration*.25),fadeAt=state.duration-fadeOut;
 const level=elapsed<fadeIn?elapsed/fadeIn:elapsed>fadeAt?(state.duration-elapsed)/fadeOut:1;
 master.gain.setValueAtTime(Math.max(0,level)*.8,now);
 if(elapsed<fadeIn)master.gain.linearRampToValueAtTime(.8,now+(fadeIn-elapsed)/1000);
 if(elapsed<fadeAt)master.gain.linearRampToValueAtTime(.8,now+(fadeAt-elapsed)/1000);
 master.gain.linearRampToValueAtTime(0,end);
 // Broad, low air movement and quiet motor harmonics suggest a computer fan.
 airBuffer??=noiseBuffer(audio,2);
 const air=source(audio.createBufferSource()),highpass=node(audio.createBiquadFilter()),lowpass=node(audio.createBiquadFilter()),airGain=node(audio.createGain());
 air.buffer=airBuffer;air.loop=true;
 highpass.type='highpass';highpass.frequency.value=85;highpass.Q.value=.5;
 lowpass.type='lowpass';lowpass.Q.value=.45;
 lowpass.frequency.setValueAtTime(800+400*Math.min(elapsed/1800,1),now);
 lowpass.frequency.linearRampToValueAtTime(1200,now+Math.min(1.8,remaining/1000));
 airGain.gain.value=.14;
 air.connect(highpass);highpass.connect(lowpass);lowpass.connect(airGain);airGain.connect(master);
 air.start(now,(elapsed/1000)%2);air.stop(end);
 for(const [frequency,volume] of [[76,.013],[152,.004]]){
  const motor=source(audio.createOscillator()),gain=node(audio.createGain());
  motor.type='sine';motor.frequency.setValueAtTime(frequency+Math.min(elapsed/1800,1)*5,now);motor.frequency.linearRampToValueAtTime(frequency+5,now+Math.min(1.8,remaining/1000));
  gain.gain.value=volume;motor.connect(gain);gain.connect(master);motor.start(now);motor.stop(end);
 }
 // A small amplitude variation gives the airflow a soft rotating texture.
 const rotation=source(audio.createOscillator()),rotationGain=node(audio.createGain());
 rotation.frequency.value=27;rotationGain.gain.value=.014;
 rotation.connect(rotationGain);rotationGain.connect(airGain.gain);rotation.start(now);rotation.stop(end);
 // Keep the short reduced-motion transition quiet instead of compressing a typing burst.
 if(state.duration<1600)return;
 keyBuffer??=noiseBuffer(audio,.065);
 const strikes=[.23,.253,.28,.321,.35,.378,.457,.48,.508,.539,.602,.63,.654,.705,.729,.763,.787,.823];
 strikes.forEach((fraction,index)=>{
  const strikeAt=fraction*state.duration;
  // Never replay a keystroke whose wall-clock time passed while audio was muted/suspended.
  if(strikeAt<elapsed+8||strikeAt>state.duration-fadeOut*.65)return;
  const at=now+(strikeAt-elapsed)/1000,strength=.82+(index%4)*.09;
  const click=source(audio.createBufferSource()),filter=node(audio.createBiquadFilter()),clickGain=node(audio.createGain());
  click.buffer=keyBuffer;click.playbackRate.value=.88+(index%5)*.055;
  filter.type='bandpass';filter.frequency.value=2300+(index%3)*260;filter.Q.value=.65;
  clickGain.gain.setValueAtTime(0,at);clickGain.gain.linearRampToValueAtTime(.075*strength,at+.0015);clickGain.gain.exponentialRampToValueAtTime(.0001,at+.027);
  click.connect(filter);filter.connect(clickGain);clickGain.connect(master);click.start(at);click.stop(Math.min(end,at+.04));
  const thock=source(audio.createOscillator()),thockGain=node(audio.createGain());
  thock.type='sine';thock.frequency.setValueAtTime(205+(index%4)*18,at);thock.frequency.exponentialRampToValueAtTime(78,at+.047);
  thockGain.gain.setValueAtTime(.0001,at);thockGain.gain.exponentialRampToValueAtTime(.058*strength,at+.002);thockGain.gain.exponentialRampToValueAtTime(.0001,at+.052);
  thock.connect(thockGain);thockGain.connect(master);thock.start(at);thock.stop(Math.min(end,at+.06));
 });
}
function playIntro(){
 const state=intro;if(!state||muted||!enabled()||state.playing)return;
 const operation=++state.operation;
 try{
  const audio=audioContext();if(!audio)return;
  // resume() runs in the original start-button / sound-button gesture.
  const resumed=audio.state==='suspended'?audio.resume():Promise.resolve();
  Promise.resolve(resumed).then(()=>{
   if(intro!==state||operation!==state.operation||muted||!enabled()||audio.state!=='running')return;
   try{buildIntroAudio(state,audio);}catch{stopIntroAudio(state);}
  }).catch(()=>{});
 }catch{}
}
document.addEventListener('click',event=>{const control=event.target.closest('button,input[type="radio"],input[type="checkbox"]');if(control&&!control.disabled&&control.id!=='startButton'&&control.name!=='strategyChoice'&&!control.matches('button[data-choice]'))clickSound();});
window.addEventListener('agi:event-selected',playEventSelection);
window.addEventListener('agi:strategy-pin',event=>pinSound(event.detail));
window.addEventListener('agi:intro-start',event=>{
 endIntro();
 const requested=Number(event.detail?.duration),duration=Number.isFinite(requested)&&requested>0?requested:4600;
 intro={startedAt:performance.now(),duration,sources:new Set(),nodes:new Set(),operation:0,playing:false,timer:undefined};
 const state=intro;state.timer=setTimeout(()=>{if(intro===state)endIntro();},duration);playIntro();
});
window.addEventListener('agi:intro-end',endIntro);
window.addEventListener('agi:quarter-reveal',()=>{if(!enabled()||muted||!settlement)return;settlement.pause();settlement.currentTime=0;settlement.play().catch(()=>{});});
window.addEventListener('agi:mute',()=>{muted=true;audioOperation++;stopPinAudio();stopEventSelection();settlement?.pause();stopIntroAudio(intro);if(context?.state==='running')context.suspend().catch(()=>{});});
window.addEventListener('agi:unmute',()=>{muted=false;playIntro();});
window.addEventListener('pagehide',()=>{audioOperation++;stopPinAudio();stopEventSelection();endIntro();settlement?.pause();context?.close().catch(()=>{});context=undefined;airBuffer=keyBuffer=pinBuffer=undefined;});
})();
