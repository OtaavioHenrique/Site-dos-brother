**1. HTML — Streak no cabeçalho**

Localizar:

```html
<strong id="rank" class="rank">Nv. 1 · Aprendiz</strong>
```

Substituir por:

```html
<strong id="rank" class="rank">Nv. 1 · Novato</strong>
    <span id="login-streak" class="login-streak" role="status" aria-live="polite">🔥 0 dias</span>
```

**2. HTML — Entrada de URL ou Base64**

Localizar:

```html
      <label for="feed-image">URL da Imagem (Discord, Imgur, etc.)</label><input id="feed-image" type="url" maxlength="2048" required placeholder="https://i.imgur.com/exemplo.png" aria-describedby="feed-image-hint">
      <p id="feed-image-hint" class="helper">Usa o link HTTPS direto da imagem. Links do Discord podem expirar.</p>
```

Substituir por:

```html
      <label for="feed-image">Imagem · URL ou Base64</label>
      <textarea id="feed-image" rows="2" maxlength="600000" required spellcheck="false" placeholder="https://… ou data:image/png;base64,…" aria-describedby="feed-image-hint"></textarea>
      <p id="feed-image-hint" class="helper">Link HTTPS direto ou Data URL Base64 de PNG, JPEG, WebP ou GIF (até 600 mil caracteres). Links do Discord podem expirar.</p>
```

**3. HTML — Template do perfil personalizável**

Localizar:

```html
</main>
```

Substituir por:

```html
<template id="profile-template">
  <div class="panel-head"><div><h2 id="profile-title">O seu aventureiro</h2><p>A tua identidade no reino.</p></div></div>
  <div id="profile-banner-preview" class="profile-banner" aria-hidden="true"></div>
  <div class="content">
    <div class="profile-top profile-identity"><span id="profile-avatar" class="profile-avatar" aria-hidden="true"></span><div><h3 id="profile-name"></h3><p id="profile-class" class="level-title"></p></div></div>
    <p id="profile-status-preview" class="public-status"></p>
    <dl id="profile-stats" class="profile-stats"></dl>
    <form id="profile-form" class="profile-form">
      <fieldset id="profile-fields">
        <legend>Personaliza o teu perfil</legend>
        <div id="avatar-options" class="avatar-options"></div>
        <label for="profile-avatar-file">Enviar avatar do dispositivo</label>
        <input id="profile-avatar-file" type="file" accept="image/*" aria-describedby="avatar-help">
        <p id="avatar-help" class="helper">Imagem até 10 MB. Redimensionada para até 150 × 150 px e comprimida antes de guardar.</p>
        <label for="profile-status">Recado / status público</label>
        <input id="profile-status" type="text" maxlength="160" placeholder="Hoje a missão é…">
        <label for="profile-banner">URL HTTPS do banner</label>
        <input id="profile-banner" type="url" maxlength="2048" placeholder="https://…">
        <p id="profile-banner-feedback" class="helper" role="status"></p>
        <label for="profile-color">Cor principal</label><input id="profile-color" type="color" value="#e2bd70">
      </fieldset>
      <button id="profile-save" class="btn primary" type="submit">Guardar perfil na nuvem</button>
      <p id="profile-feedback" class="helper" role="status" aria-live="polite"></p>
    </form>
  </div>
</template>
</main>
```

**4. HTML — Regras do feed: aplicar também no Console Firebase antes de usar**

Localizar:

```html
        && ((request.resource.data.tipo == 'missao'
          && request.resource.data.keys().hasOnly(['nome', 'acao', 'tipo', 'timestamp']))
        || (request.resource.data.tipo == 'print'
          && request.resource.data.keys().hasOnly(['nome', 'acao', 'tipo', 'timestamp', 'imagem'])
          && request.resource.data.imagem is string
          && request.resource.data.imagem.size() <= 2048
          && request.resource.data.imagem.matches('https://.+')));
```

Substituir por:

```html
        // Publique esta alteração também em Firestore Database > Regras.
        && ((request.resource.data.tipo in ['missao', 'midia']
          && request.resource.data.keys().hasOnly(['nome', 'acao', 'tipo', 'timestamp']))
        || (request.resource.data.tipo == 'print'
          && request.resource.data.keys().hasOnly(['nome', 'acao', 'tipo', 'timestamp', 'imagem'])
          && request.resource.data.imagem is string
          && ((request.resource.data.imagem.size() <= 2048
            && request.resource.data.imagem.matches('https://.+'))
          || (request.resource.data.imagem.size() <= 600000
            && request.resource.data.imagem.matches('data:image/(png|jpeg|webp|gif);base64,[A-Za-z0-9+/]+={0,2}')))));
        // Perfis continuam públicos por nome, conforme o modelo atual do site.
```

**5. CSS — Imagens, perfis, títulos e animações**

Localizar:

```html
</style>
```

Substituir por:

```html
/* Perfil social e gamificação */
.level-title{display:inline-block;color:var(--title-color,#c8cede);font-size:.8rem;font-weight:700;line-height:1.6}
.login-streak{display:inline-flex;align-items:center;gap:6px;padding:6px 10px;border:1px solid #ffac6655;border-radius:999px;background:#ff8e1710;color:#ffc386;font-size:.8rem;white-space:nowrap}
.profile-banner{position:relative;height:170px;overflow:hidden;background:linear-gradient(125deg,#384a74,#665185,#20343c)}
.profile-banner img{width:100%;height:100%;object-fit:cover;display:block;animation:bannerFade .45s ease-out}
.profile-banner::after{content:"";position:absolute;inset:0;background:linear-gradient(transparent,#11182788);pointer-events:none}
.profile-identity{position:relative;margin-top:-66px;align-items:flex-end}.profile-identity>div{padding-top:46px;min-width:0}
.profile-avatar{flex-shrink:0;overflow:hidden;background:var(--panel);border:3px solid var(--panel);box-shadow:0 0 0 2px var(--gold)}
.profile-avatar img,.header-avatar img,.friend-avatar img,.feed-card .feed-symbol img{display:block;width:100%;height:100%;object-fit:cover;border-radius:inherit;margin:0;max-height:none;transform:none}
.header-avatar{display:inline-grid;place-items:center;width:34px;height:34px;border-radius:50%;overflow:hidden;flex-shrink:0}
.profile-form label{display:block;margin-top:18px;margin-bottom:8px;color:var(--muted);font-size:.875rem}
.profile-form input[type=url],.profile-form input[type=file]{width:100%;min-width:0;padding:12px;border:1px solid var(--line);border-radius:12px;background:#ffffff05;color:inherit}
.profile-form input[type=file]::file-selector-button{padding:8px;border:0;border-radius:8px;background:var(--gold);color:var(--on-accent);margin-right:10px}
.public-status{color:var(--muted);white-space:pre-wrap;overflow-wrap:anywhere;font-size:.875rem}.public-status:empty{display:none}
.feed-author-title{display:block}.feed-author-status{display:block;margin-top:4px;font-size:.75rem;color:var(--muted);white-space:pre-wrap;overflow-wrap:anywhere}
.feed-card .feed-symbol{overflow:hidden;flex:0 0 38px}.feed-card .feed-image-frame{overflow:hidden;border-radius:14px;margin-top:14px;background:#0b1020}
.feed-card .feed-image-frame img{display:block;width:100%;height:auto;max-height:480px;object-fit:contain;margin:0;border-radius:14px;transition:transform .22s ease}
#feed-image{min-height:76px;max-height:160px;overflow:auto;overflow-wrap:anywhere}
.friend-profile{display:block;padding:0;overflow:hidden;border:1px solid var(--line);margin-bottom:16px}.friend-profile .profile-banner{height:80px}
.friend-body{position:relative;display:flex;gap:12px;align-items:center;padding:16px;flex-wrap:wrap}.friend-copy{flex:1;min-width:120px}.friend-avatar{display:grid;place-items:center;width:48px;height:48px;flex-shrink:0;border-radius:14px;overflow:hidden;background:var(--panel);font-size:1.8rem}
.stat-pulse{animation:statPulse .65s ease-out}
@keyframes statPulse{40%{transform:scale(1.06);filter:brightness(1.25)}100%{transform:scale(1);filter:brightness(1)}}
@keyframes bannerFade{from{opacity:0}to{opacity:1}}
@media(hover:hover) and (pointer:fine){.feed-image-frame:hover img{transform:scale(1.025)}}
@media(max-width:600px){.profile-banner{height:130px}.profile-identity{margin-top:-58px}.profile-identity>div{padding-top:38px}.friend-body{gap:10px}}
@media(prefers-reduced-motion:reduce){.stat-pulse,.profile-banner img{animation:none}.feed-card .feed-image-frame img{transition:none;transform:none}}
</style>
```

**6. JavaScript — Títulos configuráveis e perfis públicos**

Localizar:

```javascript
const classes=[[25,'Lenda Viva'],[15,'Arquimago'],[10,'Guardião'],[5,'Aventureiro'],[1,'Aprendiz']];
```

Substituir por:

```javascript
const LEVEL_TITLES=[
  {min:25,label:'Lenda Viva',color:'#f5c26b'},
  {min:15,label:'Arquimago',color:'#ed9cc8'},
  {min:10,label:'Mestre Arcano',color:'#c4a0ea'},
  {min:5,label:'Explorador',color:'#80b9eb'},
  {min:1,label:'Novato',color:'#acc595'}
];
const levelTitle=l=>LEVEL_TITLES.find(t=>l>=t.min)||LEVEL_TITLES.at(-1);
const publicPlayers=new Map();
```

**7. JavaScript — Modelo do perfil e streak com migração compatível**

Localizar:

```javascript
function profileOf(s={}){const p=s.profile||{};return {avatar:AVATARS.includes(p.avatar)?p.avatar:'🧙',primaryColor:/^#[0-9a-f]{6}$/i.test(p.primaryColor||'')?p.primaryColor:'#e2bd70'};}
function validProfile(p){return !!p&&AVATARS.includes(p.avatar)&&/^#[0-9a-f]{6}$/i.test(p.primaryColor);}
const fresh=()=>({version:2,catalogVersion:4,gold:0,xp:0,cycle:Date.now(),done:[],media:[],inventory:{},combo:0,keys:0,claimed:false,event:rollEvent(),stats:emptyStats(),achievements:[],profile:profileOf(),routine:[]});
const level=xp=>Math.floor((1+Math.sqrt(1+xp/25))/2),threshold=l=>100*l*(l-1),title=l=>classes.find(([min])=>l>=min)[1];
```

Substituir por:

```javascript
function validInlineImage(value,max=600000){
  return typeof value==='string'&&value.length<=max&&/^data:image\/(png|jpeg|webp|gif);base64,(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(value)&&value.split(',')[1].length>0;
}
function httpsImage(value){
  if(typeof value!=='string'||value.length>2048)return null;
  try{const url=new URL(value.trim());return url.protocol==='https:'&&!url.username&&!url.password&&url.href.length<=2048?url.href:null;}catch{return null;}
}
function validAvatar(value){return AVATARS.includes(value)||validInlineImage(value,60000)||!!httpsImage(value);}
function profileOf(s={}){
  const p=s.profile||{};
  return {avatar:validAvatar(p.avatar)?p.avatar:'🧙',primaryColor:/^#[0-9a-f]{6}$/i.test(p.primaryColor||'')?p.primaryColor:'#e2bd70',status:typeof p.status==='string'?p.status.slice(0,160):'',banner:httpsImage(p.banner)||''};
}
function validProfile(p){return !!p&&validAvatar(p.avatar)&&/^#[0-9a-f]{6}$/i.test(p.primaryColor)&&typeof p.status==='string'&&p.status.length<=160&&typeof p.banner==='string'&&(p.banner===''||!!httpsImage(p.banner));}
function validLoginStreak(s){return Number.isSafeInteger(s.currentStreak)&&s.currentStreak>=0&&(s.lastLoginDate===null?s.currentStreak===0:validEventDate(s.lastLoginDate)&&s.currentStreak>=1);}
function applyLoginStreak(s,today=localDay()){
  if(!validEventDate(today))throw Error('Data de login inválida');
  const previous=validEventDate(s.lastLoginDate)?s.lastLoginDate:null;
  const gap=previous?(Date.parse(today+'T00:00:00Z')-Date.parse(previous+'T00:00:00Z'))/DAY:null;
  if(previous&&gap<=0)return false;
  s.currentStreak=gap===1&&Number.isSafeInteger(s.currentStreak)&&s.currentStreak>0?s.currentStreak+1:1;
  s.lastLoginDate=today;return true;
}
const fresh=()=>({version:2,catalogVersion:4,gold:0,xp:0,cycle:Date.now(),done:[],media:[],inventory:{},combo:0,keys:0,claimed:false,event:rollEvent(),stats:emptyStats(),achievements:[],profile:profileOf(),routine:[],lastLoginDate:null,currentStreak:0});
const level=xp=>Math.floor((1+Math.sqrt(1+xp/25))/2),threshold=l=>100*l*(l-1),title=l=>levelTitle(l).label;
```

**8. JavaScript — Migrar saves anteriores sem apagar dados**

Localizar:

```javascript
return {...s,routine:s.routine===undefined?[]:s.routine,profile:profileOf(s),stats:{...baseline,...s.stats},achievements:s.achievements===undefined?[]:s.achievements};
```

Substituir por:

```javascript
return {...s,lastLoginDate:s.lastLoginDate===undefined?null:s.lastLoginDate,currentStreak:s.currentStreak===undefined?0:s.currentStreak,routine:s.routine===undefined?[]:s.routine,profile:profileOf(s),stats:{...baseline,...s.stats},achievements:s.achievements===undefined?[]:s.achievements};
```

**9. JavaScript — Validar os novos campos do save**

Localizar:

```javascript
return validBase(s)&&validStats(s)&&validRoutine(s.routine)&&validProfile(s.profile)&&
```

Substituir por:

```javascript
return validBase(s)&&validStats(s)&&validRoutine(s.routine)&&validProfile(s.profile)&&validLoginStreak(s)&&
```

**10. JavaScript — Notificar apenas consumo confirmado**

Localizar:

```javascript
  m.done=true;s.stats[isMusic(m.kind)?'musicListened':m.kind==='book'?'booksRead':'filmsWatched']++;m.personalRating=personalRating;m.retryAt=0;const meta=mediaTypes[m.kind];return {approved:true,message:`${isMusic(m.kind)?'Escuta registada!':'Glória! Os sábios reconhecem sua jornada.'} ${award(s,meta.gold,meta.xp)}.`};
```

Substituir por:

```javascript
  m.done=true;s.stats[isMusic(m.kind)?'musicListened':m.kind==='book'?'booksRead':'filmsWatched']++;m.personalRating=personalRating;m.retryAt=0;
  const meta=mediaTypes[m.kind],reward=award(s,meta.gold,meta.xp);
  const action=m.kind==='film'?'assistiu a um Filme!':isMusic(m.kind)?(m.kind==='album'?'ouviu um Álbum!':'ouviu uma Música!'):null;
  return {approved:true,message:action?playerName+' '+action+' '+reward+'.':'Glória! Os sábios reconhecem sua jornada. '+reward+'.',
    ...(action?{publicMedia:{id:m.id,action:action+' '+String(m.displayTitle||m.title).slice(0,300)}}:{})};
```

**11. JavaScript — Gravar a notificação social junto com o consumo**

Localizar:

```javascript
        return {next,before,oldGold,oldQuests,result,unlocked};
```

Substituir por:

```javascript
        if(result.publicMedia){
          const media=result.publicMedia;
          transaction.set(cloud.doc(cloud.db,'feed_publico',encodeURIComponent(playerName)+'_media_'+encodeURIComponent(media.id)),{
            nome:playerName,tipo:'midia',acao:media.action,timestamp:cloud.serverTimestamp()
          });
        }
        return {next,before,oldGold,oldQuests,result,unlocked};
```

**12. JavaScript — Streak de login atómico, uma vez por dia**

Localizar:

```javascript
    const ref=cloud.doc(cloud.db,'users',name),importLocal=$('#import-local').checked&&!$('#import-local-label').hidden;
    const saved=await cloud.runTransaction(cloud.db,async transaction=>{
      const snapshot=await transaction.get(ref);
      if(snapshot.exists())return {next:decodeSave(snapshot.data()),imported:false};
      const next=importLocal?readLocal():fresh();
      if(!valid(next))throw Error('O save local é inválido. Desmarque a importação para criar um perfil vazio.');
      reset(next);next.cloudRevision=1;transaction.set(ref,JSON.parse(JSON.stringify(next)));return {next,imported:importLocal};
    });
```

Substituir por:

```javascript
    const ref=cloud.doc(cloud.db,'users',name),importLocal=$('#import-local').checked&&!$('#import-local-label').hidden,today=localDay();
    const saved=await cloud.runTransaction(cloud.db,async transaction=>{
      const snapshot=await transaction.get(ref),exists=snapshot.exists();
      const next=exists?decodeSave(snapshot.data()):importLocal?readLocal():fresh();
      if(!valid(next))throw Error('O save é inválido. Os dados foram preservados.');
      const streakChanged=applyLoginStreak(next,today);
      if(!exists)reset(next);
      if(!valid(next))throw Error('Streak inválido');
      if(!exists||streakChanged){next.cloudRevision=(next.cloudRevision||0)+1;transaction.set(ref,JSON.parse(JSON.stringify(next)));}
      return {next,imported:!exists&&importLocal,streakChanged};
    });
```

**13. JavaScript — Feedback visual ao entrar num novo dia**

Localizar:

```javascript
overlay.close();$('#app-shell').inert=false;$('#tab-'+activePage).focus();
```

Substituir por:

```javascript
overlay.close();$('#app-shell').inert=false;$('#tab-'+activePage).focus();
    if(saved.streakChanged&&!reduced.matches)animate($('#login-streak'),'stat-pulse');
```

**14. JavaScript — Mostrar os perfis dos outros jogadores**

Localizar:

```javascript
function renderFriends(snapshot){
  const friends=snapshot.docs.map(doc=>{const data=doc.data();return {name:doc.id,xp:int(data.xp)?data.xp:0,gold:int(data.gold)?data.gold:0};}).sort((a,b)=>b.xp-a.xp||b.gold-a.gold||a.name.localeCompare(b.name,'pt-BR'));
  $('#friends-list').innerHTML=friends.map((friend,index)=>`<li class="friend-row${friend.name===playerName?' self':''}"><span class="friend-position">${index+1}</span><div><strong>${esc(friend.name)}</strong><small>Nv. ${level(friend.xp)} · ${esc(title(level(friend.xp)))}</small></div><span class="friend-gold">${fmt(friend.gold)} Gold</span></li>`).join('')||'<li class="helper">Nenhum aventureiro registrado.</li>';
  $('#friends-status').textContent=snapshot.metadata.fromCache?'Ranking em cache · aguardando conexão':`${friends.length} aventureiro${friends.length===1?'':'s'} · atualizado em tempo real`;
}

```

Substituir por:

```javascript
function renderFriends(snapshot){
  publicPlayers.clear();
  const friends=snapshot.docs.map(doc=>{const data=doc.data();publicPlayers.set(doc.id,data);return {name:doc.id,data,xp:int(data.xp)?data.xp:0,gold:int(data.gold)?data.gold:0};}).sort((a,b)=>b.xp-a.xp||b.gold-a.gold||a.name.localeCompare(b.name,'pt-BR'));
  const fragment=document.createDocumentFragment();
  friends.forEach((friend,index)=>{
    const p=profileOf(friend.data),row=document.createElement('li');row.className='friend-row friend-profile'+(friend.name===playerName?' self':'');
    row.innerHTML='<div class="profile-banner" aria-hidden="true"></div><div class="friend-body"><span class="friend-position"></span><span class="friend-avatar" aria-hidden="true"></span><div class="friend-copy"><strong></strong><div class="level-title"></div><p class="public-status"></p></div><span class="friend-gold"></span></div>';
    row.querySelector('.friend-position').textContent=index+1;row.querySelector('strong').textContent=friend.name;
    row.querySelector('.public-status').textContent=p.status;row.querySelector('.friend-gold').textContent=fmt(friend.gold)+' Gold';
    paintAvatar(row.querySelector('.friend-avatar'),p.avatar);paintBanner(row.querySelector('.profile-banner'),p.banner);
    paintTitle(row.querySelector('.level-title'),friend.xp);fragment.append(row);
  });
  $('#friends-list').replaceChildren(fragment);
  if(!friends.length)$('#friends-list').textContent='Nenhum aventureiro registrado.';
  $('#friends-status').textContent=snapshot.metadata.fromCache?'Ranking em cache · aguardando conexão':friends.length+' aventureiro(s) · atualizado em tempo real';
  refreshFeedAuthors();
}

```

**15. JavaScript — Estado da edição de avatar**

Localizar:

```javascript
let profileDirty=false,profileBusy=false,activePage='journal';
```

Substituir por:

```javascript
let profileDirty=false,profileBusy=false,activePage='journal';
let avatarDraft=null,avatarProcessing=false,avatarGeneration=0,lastProfileStats=null;
```

**16. JavaScript — Renderizar perfil, banner, avatar e títulos**

Localizar:

```javascript
function renderProfile(){
  if(!$('#profile-form'))return;
  const p=profileOf(state);
  $('#profile-name').textContent=playerName||'Aventureiro';
  $('#profile-avatar').textContent=p.avatar;$('#header-avatar').textContent=p.avatar;
  $('#profile-class').textContent='Nv. '+level(state.xp)+' · '+title(level(state.xp));
  $('#profile-stats').innerHTML=[
    ['Gold',state.gold],['Experiência',state.xp],['Missões',state.stats.totalQuests],
    ['Combo diário',state.combo],['Conquistas',state.achievements.length],['Relíquias',Object.values(state.inventory).reduce((a,b)=>a+b,0)]
  ].map(([label,value])=>'<div><dt>'+label+'</dt><dd>'+fmt(value)+'</dd></div>').join('');
  if(!profileDirty&&!profileBusy){
    $$('#profile-form input[name="avatar"]').forEach(input=>input.checked=input.value===p.avatar);
    $('#profile-color').value=p.primaryColor;
  }
  $('#profile-save').disabled=blocked||profileBusy;
  $('#profile-fields').disabled=blocked||profileBusy;
  if(loggedIn)setPrimaryColor(p.primaryColor);
}

```

Substituir por:

```javascript
function paintTitle(element,xp=0){
  const l=level(int(xp)?xp:0),t=levelTitle(l);
  element.textContent='Nv. '+l+' · '+t.label;element.style.setProperty('--title-color',t.color);
}
function paintAvatar(element,avatar){
  const source=AVATARS.includes(avatar)?null:(validInlineImage(avatar,60000)?avatar:httpsImage(avatar));
  if(source){
    if(element.querySelector('img')?.getAttribute('src')===source)return;
    const img=document.createElement('img');img.alt='';img.referrerPolicy='no-referrer';
    img.onerror=()=>{element.textContent='🧙';};img.src=source;element.replaceChildren(img);
  }else element.textContent=AVATARS.includes(avatar)?avatar:'🧙';
}
function paintBanner(element,value,feedback=null){
  const source=httpsImage(value)||'';
  if(element.dataset.source===source)return;
  element.dataset.source=source;element.replaceChildren();if(feedback)feedback.textContent='';
  if(!source)return;
  const img=document.createElement('img');img.alt='';img.referrerPolicy='no-referrer';
  img.onerror=()=>{if(element.dataset.source!==source)return;img.remove();if(feedback)feedback.textContent='Banner indisponível. Verifica se o link aponta diretamente para uma imagem.';};
  img.src=source;element.append(img);
}
function refreshFeedAuthors(){
  $$('#feed-list .feed-author').forEach(header=>{
    const data=header.dataset.player===playerName?state:publicPlayers.get(header.dataset.player);
    const p=profileOf(data||{});
    paintAvatar(header.querySelector('.feed-symbol'),p.avatar);
    const badge=header.querySelector('.feed-author-title');
    if(data)paintTitle(badge,data.xp);else{badge.textContent='Perfil a carregar…';badge.style.removeProperty('--title-color');}
    header.querySelector('.feed-author-status').textContent=p.status;
  });
}
function renderProfile(){
  if(!$('#profile-form'))return;
  const p=profileOf(state),l=level(state.xp),streak=state.currentStreak||0;
  $('#profile-name').textContent=playerName||'Aventureiro';
  paintAvatar($('#header-avatar'),p.avatar);paintTitle($('#profile-class'),state.xp);paintTitle($('#rank'),state.xp);
  $('#rank').style.color=levelTitle(l).color;
  $('#login-streak').textContent='🔥 '+streak+' '+(streak===1?'dia':'dias');$('#login-streak').title='Dias consecutivos de login';
  $('#profile-stats').innerHTML=[
    ['Gold',state.gold],['Experiência',state.xp],['Missões',state.stats.totalQuests],['Streak de login',streak],
    ['Combo de missões',state.combo],['Conquistas',state.achievements.length],['Relíquias',Object.values(state.inventory).reduce((a,b)=>a+b,0)]
  ].map(([label,value])=>'<div><dt>'+label+'</dt><dd>'+fmt(value)+'</dd></div>').join('');
  if(!profileDirty&&!profileBusy&&!avatarProcessing){
    avatarDraft=p.avatar;
    $$('#profile-form input[name="avatar"]').forEach(input=>input.checked=input.value===p.avatar);
    $('#profile-color').value=p.primaryColor;$('#profile-status').value=p.status;$('#profile-banner').value=p.banner;
  }
  paintAvatar($('#profile-avatar'),avatarDraft||p.avatar);
  paintBanner($('#profile-banner-preview'),$('#profile-banner').value,$('#profile-banner-feedback'));
  $('#profile-status-preview').textContent=$('#profile-status').value;
  $('#profile-save').disabled=blocked||profileBusy||avatarProcessing;
  $('#profile-fields').disabled=blocked||profileBusy||avatarProcessing;
  if(loggedIn){
    setPrimaryColor(p.primaryColor);
    if(lastProfileStats?.name===playerName&&!reduced.matches){
      if(l>lastProfileStats.level){animate($('#profile-class'),'stat-pulse');animate($('#rank'),'stat-pulse');}
      if(streak>lastProfileStats.streak)animate($('#login-streak'),'stat-pulse');
    }
    lastProfileStats={name:playerName,level:l,streak};
  }
  refreshFeedAuthors();
}
async function compressAvatar(file){
  if(!file||!/^image\/(png|jpeg|webp|gif|avif)$/.test(file.type)||file.size>10*1024*1024)throw Error('Escolhe uma imagem PNG, JPEG, WebP, GIF ou AVIF de até 10 MB.');
  const source=URL.createObjectURL(file),img=new Image();
  try{
    await new Promise((resolve,reject)=>{img.onload=resolve;img.onerror=()=>reject(Error('Não foi possível ler esta imagem.'));img.src=source;});
    const w=img.naturalWidth,h=img.naturalHeight;
    if(!w||!h||w*h>40000000)throw Error('A imagem é demasiado grande. Escolhe outra com até 40 megapixels.');
    const scale=Math.min(1,150/w,150/h),canvas=document.createElement('canvas');
    canvas.width=Math.max(1,Math.round(w*scale));canvas.height=Math.max(1,Math.round(h*scale));
    const ctx=canvas.getContext('2d');if(!ctx)throw Error('O navegador não suporta o editor de avatar.');
    ctx.fillStyle='#20251f';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.drawImage(img,0,0,canvas.width,canvas.height);
    const result=canvas.toDataURL('image/jpeg',0.7);
    if(!validInlineImage(result,60000))throw Error('Não foi possível comprimir o avatar. Escolhe outra imagem.');
    return result;
  }finally{URL.revokeObjectURL(source);}
}

```

**17. JavaScript — Montar o template do perfil**

Localizar:

```javascript
  profile.innerHTML='<div class="panel-head"><div><h2 id="profile-title">O seu aventureiro</h2><p>A sua identidade acompanha-o em todos os dispositivos.</p></div></div><div class="content"><div class="profile-top"><span id="profile-avatar" class="profile-avatar" aria-hidden="true">🧙</span><div><h3 id="profile-name"></h3><p id="profile-class" class="muted"></p></div></div><dl id="profile-stats" class="profile-stats"></dl><form id="profile-form" class="profile-form"><fieldset id="profile-fields"><legend>Escolha o seu avatar</legend><div class="avatar-options">'+AVATARS.map((avatar,index)=>'<label class="avatar-option"><input type="radio" name="avatar" value="'+avatar+'" required aria-label="'+['Mago','Elfo','Vampiro','Raposa','Dragão','Coruja','Robô','Guerreiro'][index]+'"><span aria-hidden="true">'+avatar+'</span></label>').join('')+'</div><label for="profile-color">Cor principal</label><input id="profile-color" type="color" value="#e2bd70"></fieldset><button id="profile-save" class="btn primary" type="submit">Guardar perfil na nuvem</button><p id="profile-feedback" class="helper" role="status" aria-live="polite"></p></form></div>';
```

Substituir por:

```javascript
  profile.append($('#profile-template').content.cloneNode(true));
  profile.querySelector('#avatar-options').innerHTML=AVATARS.map((avatar,index)=>'<label class="avatar-option"><input type="radio" name="avatar" value="'+avatar+'" aria-label="'+['Mago','Elfo','Vampiro','Raposa','Dragão','Coruja','Robô','Guerreiro'][index]+'"><span aria-hidden="true">'+avatar+'</span></label>').join('');
```

**18. JavaScript — Editar e guardar status, banner e avatar**

Localizar:

```javascript
  $('#profile-form').addEventListener('input',()=>{profileDirty=true;$('#profile-feedback').textContent='Alterações por guardar.';});
  $('#profile-form').addEventListener('submit',async event=>{
    event.preventDefault();if(blocked||profileBusy)return;
    const profile={avatar:$('#profile-form input[name="avatar"]:checked')?.value,primaryColor:$('#profile-color').value};
    if(!validProfile(profile)){notify('Escolha um avatar e uma cor válidos.');return;}
    profileBusy=true;renderProfile();$('#profile-feedback').textContent='A guardar…';
    try{
      const result=await change(next=>{next.profile={...profile};return {profileSaved:true};});
      if(result?.profileSaved){profileDirty=false;$('#profile-feedback').textContent='Perfil guardado e sincronizado.';}
      else $('#profile-feedback').textContent='Não foi possível guardar. Reconecte e tente novamente.';
    }finally{profileBusy=false;renderProfile();}
  });

```

Substituir por:

```javascript
  $('#profile-form').addEventListener('input',event=>{
    if(event.target.id==='profile-avatar-file')return;
    profileDirty=true;
    if(event.target.name==='avatar'){avatarGeneration++;avatarDraft=event.target.value;$('#profile-avatar-file').value='';paintAvatar($('#profile-avatar'),avatarDraft);}
    if(event.target.id==='profile-status')$('#profile-status-preview').textContent=event.target.value;
    $('#profile-feedback').textContent='Alterações por guardar.';
  });
  $('#profile-banner').addEventListener('change',()=>paintBanner($('#profile-banner-preview'),$('#profile-banner').value,$('#profile-banner-feedback')));
  $('#profile-avatar-file').addEventListener('change',async event=>{
    const file=event.target.files?.[0];if(!file)return;
    const generation=++avatarGeneration;avatarProcessing=true;renderProfile();$('#profile-feedback').textContent='A preparar avatar…';
    try{
      const avatar=await compressAvatar(file);if(generation!==avatarGeneration)return;
      avatarDraft=avatar;profileDirty=true;$$('#profile-form input[name="avatar"]').forEach(input=>input.checked=false);
      $('#profile-feedback').textContent='Avatar pronto. Guarda o perfil para partilhar.';
    }catch(error){if(generation===avatarGeneration)$('#profile-feedback').textContent=error.message;}
    finally{if(generation===avatarGeneration){avatarProcessing=false;event.target.value='';renderProfile();}}
  });
  $('#profile-form').addEventListener('submit',async event=>{
    event.preventDefault();if(blocked||profileBusy||avatarProcessing)return;
    const profile={avatar:avatarDraft||profileOf(state).avatar,primaryColor:$('#profile-color').value,status:$('#profile-status').value.trim(),banner:$('#profile-banner').value.trim()};
    if(!validProfile(profile)){$('#profile-feedback').textContent='Verifica o avatar, o status (até 160 caracteres) e a URL HTTPS do banner.';return;}
    profileBusy=true;renderProfile();$('#profile-feedback').textContent='A guardar…';
    try{
      const result=await change(next=>{next.profile={...profile};return {profileSaved:true};});
      if(result?.profileSaved){profileDirty=false;$('#profile-feedback').textContent='Perfil guardado e sincronizado.';}
      else $('#profile-feedback').textContent='Não foi possível guardar. Reconecte e tente novamente.';
    }finally{profileBusy=false;renderProfile();}
  });

```

**19. JavaScript — Aceitar imagem HTTPS ou Base64**

Localizar:

```javascript
function safeImageURL(value){
  if(typeof value!=='string'||value.length>2048)return null;
  try{const url=new URL(value.trim());return url.protocol==='https:'&&!url.username&&!url.password&&url.href.length<=2048?url.href:null;}catch{return null;}
}

```

Substituir por:

```javascript
function safeImageURL(value){
  if(typeof value!=='string')return null;
  const source=value.trim();return validInlineImage(source)?source:httpsImage(source);
}

```

**20. JavaScript — Renderizar consumo de média e identidade no feed**

Localizar:

```javascript
    if(!post||!['missao','print'].includes(post.tipo)
```

Substituir por:

```javascript
    if(!post||!['missao','print','midia'].includes(post.tipo)
```

**21. JavaScript — Título e status junto do nome na Vitrine**

Localizar:

```javascript
    byline.append(name,time);header.append(symbol,byline);card.append(header,copy);
```

Substituir por:

```javascript
    const badge=document.createElement('span'),status=document.createElement('span');
    badge.className='level-title feed-author-title';status.className='feed-author-status';
    header.className='feed-author';header.dataset.player=post.nome;
    byline.append(name,badge,status,time);header.append(symbol,byline);card.append(header,copy);
```

**22. JavaScript — Mostrar apenas a imagem, sem link clicável**

Localizar:

```javascript
        const img=document.createElement('img'),link=document.createElement('a');
        img.alt=post.acao;img.loading='lazy';img.decoding='async';img.referrerPolicy='no-referrer';
        img.addEventListener('error',()=>{img.hidden=true;fallback.hidden=false;},{once:true});
        fallback.hidden=true;img.src=url;link.href=url;link.target='_blank';link.rel='noopener noreferrer';link.className='feed-image-link';link.textContent='Abrir imagem original';card.append(img,fallback,link);
```

Substituir por:

```javascript
        const img=document.createElement('img'),frame=document.createElement('div');frame.className='feed-image-frame';
        img.alt=post.acao;img.loading='lazy';img.decoding='async';img.referrerPolicy='no-referrer';
        img.addEventListener('error',()=>{frame.hidden=true;fallback.hidden=false;},{once:true});
        fallback.hidden=true;img.src=url;frame.append(img);card.append(frame,fallback);
```

**23. JavaScript — Atualizar autores ao renderizar publicações**

Localizar:

```javascript
  list.replaceChildren(fragment);
}
function watchFeed(){
```

Substituir por:

```javascript
  list.replaceChildren(fragment);refreshFeedAuthors();
}
const seenMediaPosts=new Set();
let mediaFeedInitialized=false;
function notifyNewMedia(snapshot){
  if(snapshot.metadata.fromCache||snapshot.metadata.hasPendingWrites)return;
  for(const doc of [...snapshot.docs].reverse()){
    const post=doc.data();
    if(mediaFeedInitialized&&!seenMediaPosts.has(doc.id)&&post.tipo==='midia'&&post.nome!==playerName&&typeof post.nome==='string'&&post.nome.length<=80&&typeof post.acao==='string'&&post.acao.length<=500)notify(post.nome+' '+post.acao);
    seenMediaPosts.add(doc.id);
  }
  mediaFeedInitialized=true;
  while(seenMediaPosts.size>200)seenMediaPosts.delete(seenMediaPosts.values().next().value);
}
function watchFeed(){
```

**24. JavaScript — Notificações ao vivo sem repetir o histórico**

Localizar:

```javascript
feedReady=!snapshot.metadata.fromCache;feedError='';renderFeed(snapshot);renderFeedControls();
```

Substituir por:

```javascript
feedReady=!snapshot.metadata.fromCache;feedError='';renderFeed(snapshot);renderFeedControls();notifyNewMedia(snapshot);
```

**25. JavaScript — Mensagem de validação da imagem**

Localizar:

```javascript
Usa uma URL HTTPS válida e uma legenda de até 500 caracteres.
```

Substituir por:

```javascript
Usa uma URL HTTPS ou Base64 de imagem válido (até 600 mil caracteres) e uma legenda de até 500 caracteres.
```
