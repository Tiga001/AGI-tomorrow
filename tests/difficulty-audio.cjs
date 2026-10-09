// Run with: node tests/difficulty-audio.cjs
// Virtual Web Audio verifies that difficulty movement no longer plays effects.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=fs.readFileSync(path.join(__dirname,'../sound.js'),'utf8');
class Events {
 constructor(){this.handlers={};}
 addEventListener(type,fn,capture=false){(this.handlers[type]??=[]).push({fn,capture});}
 phase(event,capture){for(const handler of this.handlers[event.type]||[])if(handler.capture===capture)handler.fn(event);}
 dispatchEvent(event){this.phase(event,true);this.phase(event,false);}
}
function fixture(options={}){
 let now=0,serial=0;const timers=new Map(),nodes=[],contexts=[],buffers=[],storage=new Map([['agi-tomorrow-music-v1',options.muted?'off':'on']]);
 const later=(fn,delay=0)=>{const id=++serial;timers.set(id,{fn,at:now+delay});return id;},clear=id=>timers.delete(id);
 class Param {
  constructor(value=0){this.value=value;this.events=[];}
  setValueAtTime(value,at){this.value=value;this.events.push(['set',value,at]);}
  linearRampToValueAtTime(value,at){this.value=value;this.events.push(['ramp',value,at]);}
  exponentialRampToValueAtTime(value,at){this.value=value;this.events.push(['exponential',value,at]);}
  cancelScheduledValues(at){this.events=this.events.filter(event=>event[2]<at);}
  cancelAndHoldAtTime(at){this.cancelScheduledValues(at);}
 }
 class Node {
  constructor(kind){this.kind=kind;this.gain=new Param(1);this.frequency=new Param();this.Q=new Param();this.playbackRate=new Param(1);this.connections=[];nodes.push(this);}
  connect(target){this.connections.push(target);}
  disconnect(){this.disconnected=true;this.connections=[];}
  start(at){this.started=at;}
  stop(at=now/1000){this.stopped=at;}
 }
 class Context {
  constructor(){if(options.contextFailure)throw Error('No audio');this.state='suspended';this.sampleRate=8000;this.destination={};this.resumes=[];contexts.push(this);}
  get currentTime(){return now/1000;}
  resume(){if(options.resumeFailures>0){options.resumeFailures--;return Promise.reject(Error('Gesture required'));}if(options.deferResume)return new Promise(resolve=>this.resumes.push(resolve));this.state='running';return Promise.resolve();}
  resolveResume(){const resolve=this.resumes.shift();assert.ok(resolve,'a pending resume must exist');this.state='running';resolve();}
  suspend(){this.state='suspended';return Promise.resolve();}
  close(){this.state='closed';return Promise.resolve();}
  createBuffer(channels,length,sampleRate){const data=new Float32Array(length),buffer={duration:length/sampleRate,getChannelData:()=>data};buffers.push(buffer);return buffer;}
  createBufferSource(){return new Node('buffer');}
  createOscillator(){return new Node('oscillator');}
  createGain(){return new Node('gain');}
  createBiquadFilter(){return new Node('filter');}
 }
 const slider={id:'difficultySlider',type:'range',value:'3',disabled:false},document=new Events(),window=new Events();
 document.hidden=false;document.documentElement={dataset:{musicScene:'cover'}};document.getElementById=id=>id==='difficultySlider'?slider:null;window.AudioContext=Context;
 vm.runInNewContext(source,{document,window,localStorage:{getItem:key=>storage.get(key)},performance:{now:()=>now},setTimeout:later,clearTimeout:clear,console},{filename:'sound.js'});
 const flush=async()=>{for(let i=0;i<8;i++)await Promise.resolve();};
 const advance=async ms=>{const end=now+ms;let count=0;while(true){const next=[...timers].filter(([,timer])=>timer.at<=end).sort((a,b)=>a[1].at-b[1].at)[0];if(!next)break;if(++count>10000)throw Error('Timer runaway');now=next[1].at;timers.delete(next[0]);next[1].fn();await flush();}now=end;await flush();};
 const emit=(type,detail)=>window.dispatchEvent({type,detail});
 const input=async(value,target=slider)=>{target.value=String(value);document.dispatchEvent({type:'input',target});await flush();};
 const release=async(type='pointerup',target=slider,key='ArrowRight')=>{document.dispatchEvent({type,target,key});await flush();};
 const key=async(key,value,modifiers={})=>{const event={type:'keydown',key,target:slider,...modifiers};document.phase(event,true);slider.value=String(value);event.defaultPrevented=true;document.phase(event,false);await flush();};
 const active=()=>nodes.filter(node=>['buffer','oscillator'].includes(node.kind)&&node.started!==undefined&&!node.disconnected&&(node.stopped===undefined||node.stopped>now/1000));
 const paper=()=>active().filter(node=>node.buffer&&Math.abs(node.buffer.duration-.72)<.001);
 return {slider,document,window,contexts,nodes,buffers,timers,storage,flush,advance,emit,input,release,key,active,paper};
}
(async()=>{
 for(const muted of [false,true]){
  const f=fixture({muted});
  f.document.dispatchEvent({type:'pointerdown',target:f.slider});
  for(let i=0;i<100;i++)await f.input(1+i*4/99);
  await f.release();await f.release('change');
  for(const [key,value] of [['Home',1],['ArrowRight',2],['End',5],['ArrowLeft',4]]){await f.key(key,value);await f.release('keyup');}
  await f.advance(1000);
  assert.equal(f.contexts.length,0,'difficulty gestures do not create an effects audio context');
  assert.equal(f.nodes.length,0,'dragging and keyboard changes produce no money-counter or fan sources');
  assert.equal(f.timers.size,0,'silent slider leaves no audio timers');
 }
 console.log('PASS: difficulty slider stays silent during pointer dragging and keyboard changes, with sound on or muted.');
})().catch(error=>{console.error(error);process.exitCode=1;});
