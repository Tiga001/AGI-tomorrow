/* Growing Threat — TESTUDO & Decerno. Source: Millennium Dawn.
 * Original recording, unmodified. Upstream license: CC BY-SA 4.0.
 * Source and license details: assets/music/CREDITS.txt.
 */
(() => {
'use strict';
const audio=document.getElementById('bgm'),button=document.getElementById('musicButton');
const preference='agi-tomorrow-music-v1';
const credits='Growing Threat — TESTUDO & Decerno · Millennium Dawn · CC BY-SA 4.0';
let autoStart=true,pending=false,failed=false,operation=0,inIntro=false,soundOn=true,fadeFrame=0;
try{soundOn=autoStart=localStorage.getItem(preference)!=='off';}catch{}
audio.volume=.25;
function remember(value){try{localStorage.setItem(preference,value);}catch{}}
function volumeTo(target,duration=0){
 cancelAnimationFrame(fadeFrame);
 if(!duration){audio.volume=target;return;}
 const from=audio.volume,started=performance.now();
 function step(now){const fraction=Math.min(1,(now-started)/duration);audio.volume=from+(target-from)*fraction;if(fraction<1)fadeFrame=requestAnimationFrame(step);}
 fadeFrame=requestAnimationFrame(step);
}
function update(){
 const playing=inIntro?soundOn:!audio.paused&&!pending&&!failed;
 button.textContent=inIntro?(soundOn?'♫ 声音开':'♫ 声音关'):pending?'♫ 加载中':failed?'♫ 重试声音':playing?'♫ 声音开':'♫ 声音关';
 button.setAttribute('aria-pressed',String(playing));
 button.setAttribute('aria-label',inIntro?(soundOn?'关闭声音':'开启声音'):pending?'关闭声音':playing?'关闭声音':failed?'重新开启声音':'开启声音');
 button.title=(playing?'点击关闭':'点击播放')+' · '+credits;
}
async function start(){
 if(!soundOn||pending||!audio.paused)return;
 const request=++operation;pending=true;failed=false;update();
 try{await audio.play();if(request!==operation)return;pending=false;update();}
 catch(error){if(request!==operation)return;pending=false;failed=error.name!=='AbortError';update();}
}
function stop(){operation++;pending=false;failed=false;autoStart=false;soundOn=false;cancelAnimationFrame(fadeFrame);audio.pause();remember('off');window.dispatchEvent(new Event('agi:mute'));update();}
button.addEventListener('click',()=>{
 autoStart=false;
 if(inIntro?soundOn:pending||!audio.paused)stop();
 else{soundOn=true;remember('on');volumeTo(inIntro?0:.25);window.dispatchEvent(new Event('agi:unmute'));start();update();}
});
function firstInteraction(event){
 if(!autoStart||inIntro||!event.target.closest('#game')||event.target.closest('.start-screen'))return;
 if(event.type==='keydown'&&!['Enter',' ','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(event.key))return;
 autoStart=false;start();
}
document.addEventListener('pointerdown',firstInteraction);
document.addEventListener('keydown',firstInteraction);
window.addEventListener('agi:intro-start',()=>{
 inIntro=true;autoStart=false;volumeTo(0);if(soundOn)start();update();
});
window.addEventListener('agi:intro-end',event=>{
 inIntro=false;
 if(!event.detail?.cancelled&&soundOn){start();volumeTo(.25,900);}else volumeTo(.25);
 update();
});
audio.addEventListener('playing',update);
audio.addEventListener('pause',update);
audio.addEventListener('error',()=>{operation++;pending=false;failed=true;update();});
window.addEventListener('pagehide',()=>{operation++;pending=false;inIntro=false;cancelAnimationFrame(fadeFrame);audio.pause();});
update();
})();
