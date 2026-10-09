/* Fictional 2027–2028 narrative. Pure rules: no storage, random draws or DOM. */
window.AGI_WORLDLINE_ENGINE = (() => {
 'use strict';
 const routes=window.AGI_WORLDLINES||[],byId=id=>routes.find(r=>r.id===id);
 const short={openai:'OpenAI',claude:'Claude',deepseek:'DeepSeek',kimi:'Kimi',gemini:'Gemini',qwen:'千问',huawei:'华为',xiaomi:'小米',xai:'xAI',nvidia:'英伟达',independent:'自主路线'};
 const stances=['advance','open','control','pragmatic','exit'];
 const endings=routes.flatMap(r=>Object.entries(r.endings).map(([kind,e])=>({...e,id:`world_${r.id}_${kind}`,brand:r.id==='independent'?null:r.id})));
 const toneText={
  huawei:{open:'你们此前公开的适配补丁已经被几家小厂接走。这一次，会议桌上也给他们留了位置。',control:'此前签下的独家条款开始兑现：供货优先，选择也更少。采购把另一家的报价留在抽屉里。'},
  deepseek:{open:'鲸鱼的改进已经分出许多支流。有人寄来一份修复，也有人把你们的名字从封面拿掉；开源的海从来不只住一条鱼。',control:'大肥鱼的服务入口逐渐收拢到你们手里。社区还能下载旧权重，新能力却需要一张账户卡。'},
  kimi:{open:'上次放出的训练记录引来了同行复现。月亮不再只在你们公司的窗户里，也有人开始对那条曲线提出异议。',control:'投资人用独家算力换走了下一次扩容的决定权。你们能把模型做得更大，却不能随意决定让谁使用。'},
  xai:{open:'你们此前坚持的居民表决条款已经写进任务软件。火星还很远，谁有权按下按钮却不能等落地后再说。',control:'地面公司的权限被一级一级带进飞行器。信号每晚几分钟抵达，命令却仍要求立即执行。'},
  claude:{open:'你们留下的人工申诉入口开始收到真正难办的申请。保留人类决定权，意味着有人必须承担机器本可以替他承担的责任。',control:'此前几次授权已经接成一条完整的指挥链。公司通知可以改写街区的日程，居民的回复栏仍是灰色的。'},
  openai:{open:'你们公开的实验记录被另一间实验室重做了一遍。一个漂亮结论被划掉，剩下的那一个第一次变得可信。',control:'独家许可把实验室的账面救了回来。每次新发现送上来时，法务都先问一句：这次卖给谁。'},
  xiaomi:{open:'上次开放的维修接口让街边店重新挂起了招牌。普及的下一步已经不是降价，而是坏了以后谁能修。',control:'统一账户让设备配合得无比顺畅。客服的工单却开始出现同一句话：退出以后，我家还能开门吗。'}
 };
 function rank(s){return routes.filter(r=>r.id!=='independent'&&(s.relations[r.id]||0)>=25).map(r=>({id:r.id,affinity:s.relations[r.id],cooperations:s.log.filter(l=>l.choice.brand===r.id&&(l.choice.affinities?.[r.id]||0)>0).length})).sort((a,b)=>b.affinity-a.affinity||b.cooperations-a.cooperations||a.id.localeCompare(b.id));}
 function cooperationRank(s){return routes.filter(r=>r.id!=='independent').map(r=>({id:r.id,affinity:s.relations[r.id]||0,cooperations:s.log.filter(l=>l.choice.brand===r.id&&(l.choice.affinities?.[r.id]||0)>0).length})).sort((a,b)=>b.affinity-a.affinity||b.cooperations-a.cooperations||a.id.localeCompare(b.id));}
 function variant(s,route){
  if(s.stats.cash<180||s.stats.team<35||s.stats.risk>=45||(route!=='independent'&&(s.relations[route]||0)<15))return 'pressure';
  if(s.stats.research>=185+(s.index-24)*12&&s.stats.team>=50&&s.stats.risk<35&&(route==='independent'||s.relations[route]>=45))return 'opportunity';
  return 'standard';
 }
 function nextId(s){
  if(s.index<24||s.index>31||!routes.length)return null;
  // This decision uses settled relationships, including zero and negative scores.
  if(s.index===24)return `world:cooperation:24:${cooperationRank(s).slice(0,4).map(p=>p.id).join(',')}`;
  const ranked=rank(s),w=s.worldline;
  const route=w?.route||ranked[0]?.id||'independent';
  // A later relationship shift creates one deliberate fork, rather than shuffling the story each quarter.
  if(s.index===28&&w?.route&&ranked[0]&&ranked[0].id!==route&&ranked[0].affinity>=Math.max(35,(s.relations[route]||0)+12))return `world:crossroads:${s.index}:${[route,...ranked.filter(p=>p.id!==route).slice(0,2).map(p=>p.id)].join(',')}`;
  const c=w?.counts||{},tone=c.open>=3&&c.open>=c.control?'open':c.control>=3?'control':'steady';
  const origin=w?.changedAt===s.index-1&&w?.transitionNarratedAt!==w?.changedAt&&w?.previousRoute?w.previousRoute:'none';
  return `world:${route}:${s.index}:${variant(s,route)}:${tone}:${origin}`;
 }
 function cooperationGateway(id,index,ids){
  if(index!==24||ids.length!==4||new Set(ids).size!==4||ids.some(x=>x==='independent'||!byId(x)))return null;
  const choices=['independent',...ids].map(route=>{
   const c=byId(route).chapters[0].choices.find(c=>c.stance==='advance'),solo=route==='independent',name=short[route];
   return {id:'world:cooperate:'+route,label:solo?'单干，独立冲击 AGI':'与 '+name+' 合作冲击 AGI',result:solo?'你们决定独立承担接下来两年的研究、算力安排和能力评测。第一笔预算已经拨出，团队重新划定任务与责任；能否兑现2028年的承诺，还要靠之后的每一次验证。':'你们与 '+name+' 确认了首轮研究、算力和评测分工，安排团队开始对接。合作计划已经启动，2028年的目标仍需双方持续投入，并接受实际能力的检验。',delta:c.delta,quarterDelta:c.delta,affinities:solo?{}:c.affinities,brand:solo?null:route,kind:solo?'self':'partner',stance:'advance',worldTarget:route,worldStance:'advance'};
  });
  return {memeId:id,year:2027,availableQuarter:1,title:'最后两年，和谁一起做？',body:'六年前你们在投资人面前说出AGI，如今这个词仍写在白板上，旁边多了员工的名字和一张张交付日期。\n\n'+ids.map(x=>byId(x).invitation).join('\n\n')+'\n\n这些往来不会替你签字。接下来，公司要把两年的时间交给哪一种未来？',choices,worldline:{gateway:true,cooperation:true,index,routes:ids}};
 }
 function gateway(id,index,ids){
  if(index!==28||ids.length<2||ids.length>3||new Set(ids).size!==ids.length||ids.some(x=>!byId(x)))return null;
  const enter=(route,stance,id)=>{
   const r=byId(route),chapter=r.chapters[index-24],c=chapter.choices.find(c=>c.stance===stance);
   return {...c,id,label:'转入「'+r.name+'」：'+c.label,result:r.invitation+'\n\n'+chapter.body+'\n\n'+c.result,quarterDelta:c.delta,affinities:c.affinities,brand:route==='independent'?null:route,kind:route==='independent'?'self':'partner',worldTarget:route,worldStance:stance};
  };
  const options=ids.map(route=>enter(route,'advance','world:join:'+route));
  if(!ids.includes('independent'))options.push(enter('independent','open','world:join:independent'));
  if(options.length<5)options.push(enter(ids[0],'open','world:join:open'));
  if(options.length<5)options.push(enter('independent','pragmatic','world:join:pragmatic'));
  // An independent company with one invitation still needs five distinct offers.
  if(options.length<5)options.push(enter(ids[0],'control','world:join:control'));
  return {memeId:id,year:2021+Math.floor(index/4),availableQuarter:index%4+1,title:'旧伙伴，新来信',body:'上一年的合作已经改变了公司。原来的伙伴仍在等你，另一封邀请却带着更熟悉的签名。'+'\n\n'+ids.map(x=>byId(x).invitation).join('\n\n')+'\n\n这些往来不会替你签字。接下来，公司要把最后一年的时间交给哪一种未来？',choices:options,worldline:{gateway:true,index,routes:ids}};
 }
 function event(id){
  if(typeof id!=='string'||!id.startsWith('world:'))return null;
  const [prefix,route,n,v='standard',tone='steady',origin='none']=id.split(':'),index=Number(n);
  if(!Number.isInteger(index)||index<24||index>31)return null;
  if(route==='cooperation')return cooperationGateway(id,index,v.split(','));
  if(route==='crossroads')return gateway(id,index,v.split(','));
  const r=byId(route),chapter=r?.chapters[index-24];
  if(index===24||!chapter||!['standard','pressure','opportunity'].includes(v)||!['steady','open','control'].includes(tone)||(origin!=='none'&&!byId(origin)))return null;
  const scene=v==='standard'?chapter:chapter[v],paragraphs=[];
  if(origin!=='none'&&origin!==route)paragraphs.push('离开「'+byId(origin).name+'」以后，你们带走了自己的成果，也接下了失去那位伙伴之后的账单。下一封邮件，需要以自己的名义回复。');
  if(tone==='open'||tone==='control')paragraphs.push(toneText[route]?.[tone]||(tone==='open'?'先前公开的成果已经有了公司之外的维护者。他们也想参与这一次的决定。':'此前集中起来的权限让交付更快，也让每次失误都直接落到你们的签名上。'));
  paragraphs.push(scene.body);
  const choices=chapter.choices.map(c=>({...c,id:'world:'+c.stance,kind:route==='independent'?'self':'partner',brand:route==='independent'?null:route,quarterDelta:c.delta,worldStance:c.stance,worldTarget:c.stance==='exit'?'independent':route}));
  return {memeId:id,year:2021+Math.floor(index/4),availableQuarter:index%4+1,title:scene.title,body:paragraphs.join('\n\n'),choices,worldline:{route,index,variant:v,tone,origin}};
 }
 function advance(previous,e,c,index){
  if(!e.worldline)return previous;
  const route=c.worldTarget||e.worldline.route,old=previous?.route||e.worldline.route;
  const counts={advance:0,open:0,control:0,pragmatic:0,exit:0,...previous?.counts};
  counts[c.worldStance]=(counts[c.worldStance]||0)+1;
  return {route,counts,startedAt:previous?.startedAt??index,changedAt:old&&old!==route?index:previous?.changedAt??null,previousRoute:old&&old!==route?old:previous?.previousRoute??null,lastStance:c.worldStance,chapters:(previous?.chapters||0)+1,...(old&&old!==route&&e.worldline.origin===old?{transitionNarratedAt:index}:{})};
 }
 function ending(w,stats,relations,ready){
  const route=w?.route,r=byId(route);if(!r)return null;
  let kind;
  if(ready){
   if(route!=='independent'&&route!=='nvidia'&&(relations[route]||0)<60&&r.endings.detached)return `world_${route}_detached`;
   kind=w.counts.control>=3&&w.counts.control>w.counts.open&&r.endings.control?'control':w.counts.open>=3&&r.endings.open?'open':'breakthrough';
   return `world_${route}_${kind}`;
  }
  if((route!=='independent'&&(relations[route]||0)<15)||stats.research<150||stats.team<25||stats.trust<25||stats.risk>=55)kind='fracture';
  else kind='compromise';
  return `world_${route}_${kind}`;
 }
 return {routes,byId,rank,nextId,event,advance,ending,endings,stances};
})();
