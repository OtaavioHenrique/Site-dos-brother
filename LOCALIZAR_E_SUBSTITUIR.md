## 1. Estilos do Diário de Bordo, calendário e Vitrine

**Localizar:**

```html
</style>
```

**Substituir por:**

```html
/* Diário de Bordo: planeamento pessoal à esquerda, comunidade à direita. */
.journal-planning{display:grid;gap:24px;min-width:0}.journal-planning>.panel{width:100%;max-width:none;grid-column:auto}
#page-journal{align-items:start}#feed-panel{min-width:0}.feed-form{display:grid;gap:10px;margin-bottom:22px}.feed-form label{font-size:.85rem;color:var(--muted)}
.feed-form input{width:100%;min-width:0;min-height:46px;padding:12px;border:1px solid var(--line);border-radius:12px;background:#ffffff05;color:inherit}
.feed-form textarea{min-height:90px;border-radius:12px}.feed-form .btn{margin-top:4px}.feed-list{list-style:none;display:grid;gap:16px;margin:20px 0 0;padding:0}
.feed-card{padding:18px;border:1px solid var(--line);border-radius:16px;background:#ffffff04;overflow-wrap:anywhere;min-width:0}.feed-card header{display:flex;align-items:center;gap:10px;margin-bottom:12px}.feed-card header>div{min-width:0}.feed-card time{display:block;font-size:.75rem;color:var(--muted)}
.feed-symbol{display:grid;place-items:center;flex:0 0 38px;height:38px;background:#ffffff09;border-radius:12px}.feed-caption{white-space:pre-wrap}.feed-card img{display:block;width:100%;height:auto;max-height:440px;object-fit:contain;border-radius:12px;margin-top:14px;background:#0b1020}.feed-image-link{display:block;color:#9cc9ff;font-size:.8rem;text-decoration:underline;margin-top:10px}.feed-image-error{margin-top:12px;font-size:.8rem;color:var(--muted)}
.calendar-toolbar{display:flex;align-items:center;justify-content:space-between;gap:8px;margin:20px 0 16px}.calendar-toolbar h3{text-transform:capitalize;font:600 1.05rem Roboto,sans-serif}.calendar-nav{display:flex;gap:6px}.calendar-nav .gear{font-size:1.1rem}
.calendar-weekdays,.calendar-grid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:5px}.calendar-weekdays{color:var(--muted);text-align:center;font-size:.8rem;margin-bottom:8px}.calendar-weekdays abbr{text-decoration:none}
.calendar-cell{min-width:0;min-height:46px;aspect-ratio:1.15;border:1px solid transparent;border-radius:12px;background:#ffffff04;color:inherit;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:5px;padding:4px;font-size:.9rem}
.calendar-cell:hover{background:#ffffff12}.calendar-cell.is-today{background:#2866c8;color:#fff;font-weight:700}.calendar-cell[aria-pressed="true"]{border-color:#9fc6ff;box-shadow:inset 0 0 0 1px #9fc6ff}.calendar-cell.has-holiday:not(.is-today){background:#e2bd7015}.calendar-dots{display:flex;gap:4px;min-height:5px}.calendar-dot{height:5px;width:5px;border-radius:50%;background:var(--gold)}.calendar-dot.personal{background:#8fc6ff}.calendar-cell.is-today .calendar-dot{background:#fff}
.calendar-legend{display:flex;flex-wrap:wrap;gap:8px 16px;color:var(--muted);font-size:.75rem;margin-top:12px}.calendar-legend span{display:flex;align-items:center;gap:6px}.calendar-holiday{padding:12px;border:1px solid var(--line);border-radius:12px;color:var(--gold)}.calendar-holiday small{display:block;color:var(--muted)}
#page-journal .calendar-inputs{grid-template-columns:minmax(0,1fr) minmax(130px,.65fr)}#page-journal .calendar-inputs .btn{grid-column:1/-1;width:100%}#page-journal #quest-list{grid-template-columns:minmax(0,1fr)}#page-journal .quest-group+.quest-group{margin-top:20px}
@media(min-width:1000px){#page-journal{grid-template-columns:minmax(0,1.15fr) minmax(300px,.85fr)}}
@media(max-width:600px){#page-journal .calendar-inputs{grid-template-columns:minmax(0,1fr)}.calendar-cell{border-radius:9px;min-height:40px}.calendar-toolbar{flex-wrap:wrap}.calendar-toolbar h3{flex:1}.calendar-toolbar>.btn{padding:8px;min-height:40px}.feed-card{padding:14px}}
</style>
```

## 2. Calendário mensal e detalhes do dia

**Localizar:**

```html
    <h3 class="planner-heading">Próximos Eventos</h3>
    <ul id="calendar-list" class="planner-list" aria-label="Próximos eventos"></ul>
```

**Substituir por:**

```html
    <div class="calendar-toolbar">
      <h3 id="calendar-month" aria-live="polite"></h3>
      <button id="calendar-today" class="btn subtle" type="button">Hoje</button>
      <div class="calendar-nav"><button id="calendar-prev" class="gear" type="button" aria-label="Mês anterior">‹</button><button id="calendar-next" class="gear" type="button" aria-label="Próximo mês">›</button></div>
    </div>
    <div class="calendar-weekdays" aria-hidden="true"><abbr title="Domingo">D</abbr><abbr title="Segunda-feira">S</abbr><abbr title="Terça-feira">T</abbr><abbr title="Quarta-feira">Q</abbr><abbr title="Quinta-feira">Q</abbr><abbr title="Sexta-feira">S</abbr><abbr title="Sábado">S</abbr></div>
    <div id="calendar-grid" class="calendar-grid" role="group" aria-labelledby="calendar-month"></div>
    <p class="calendar-legend"><span><i class="calendar-dot" aria-hidden="true"></i>Feriado / data especial</span><span><i class="calendar-dot personal" aria-hidden="true"></i>Compromisso pessoal</span></p>
    <h3 id="calendar-selected" class="planner-heading" aria-live="polite"></h3>
    <ul id="calendar-list" class="planner-list" aria-labelledby="calendar-selected"></ul>
```

## 3. Descrição do calendário

**Localizar:**

```html
Os teus próximos compromissos, por ordem de data.
```

**Substituir por:**

```html
Escolhe um dia para ver compromissos, feriados e datas especiais.
```

## 4. Formulário e feed global

**Localizar:**

```html
</main>
```

**Substituir por:**

```html
<section id="feed-panel" class="panel" aria-labelledby="feed-title">
  <div class="panel-head"><div><p class="eyebrow">O reino em movimento</p><h2 id="feed-title">Vitrine dos Brothers</h2><p>Conquistas e prints de todos os jogadores, em tempo real.</p></div><button id="feed-retry" class="gear" type="button" aria-label="Reconectar Vitrine">↻</button></div>
  <div class="content">
    <form id="feed-form" class="feed-form">
      <label for="feed-image">URL da Imagem (Discord, Imgur, etc.)</label><input id="feed-image" type="url" maxlength="2048" required placeholder="https://i.imgur.com/exemplo.png" aria-describedby="feed-image-hint">
      <p id="feed-image-hint" class="helper">Usa o link HTTPS direto da imagem. Links do Discord podem expirar.</p>
      <label for="feed-caption">Legenda</label><textarea id="feed-caption" maxlength="500" required placeholder="Conta a história desta conquista…"></textarea>
      <button id="feed-submit" class="btn primary" type="submit" disabled>Partilhar print</button>
      <p class="helper">As prints e as missões diárias concluídas ficam visíveis para todos os jogadores.</p>
    </form>
    <p id="feed-feedback" class="helper" role="status" aria-live="polite"></p>
    <p id="feed-status" class="helper" role="status" aria-live="polite">Entre para acompanhar a Vitrine.</p>
    <ol id="feed-list" class="feed-list" aria-label="Últimas publicações"></ol>
  </div>
</section>
</main>
```

## 5. Regra da nova coleção global no bloco de configuração Firebase

**Localizar:**

```html
    match /configuracoes/sistema {
```

**Substituir por:**

```html
    // Mantém o modelo atual de perfis públicos por nome (sem Firebase Auth).
    match /feed_publico/{postId} {
      allow read: if true;
      allow create: if request.resource.data.keys().hasAll(['nome', 'acao', 'tipo', 'timestamp'])
        && request.resource.data.nome is string
        && request.resource.data.nome.size() > 0 && request.resource.data.nome.size() <= 80
        && exists(/databases/$(database)/documents/users/$(request.resource.data.nome))
        && request.resource.data.acao is string
        && request.resource.data.acao.size() > 0 && request.resource.data.acao.size() <= 500
        && request.resource.data.timestamp == request.time
        && ((request.resource.data.tipo == 'missao'
          && request.resource.data.keys().hasOnly(['nome', 'acao', 'tipo', 'timestamp']))
        || (request.resource.data.tipo == 'print'
          && request.resource.data.keys().hasOnly(['nome', 'acao', 'tipo', 'timestamp', 'imagem'])
          && request.resource.data.imagem is string
          && request.resource.data.imagem.size() <= 2048
          && request.resource.data.imagem.matches('https://.+')));
      allow update, delete: if false;
    }
    match /configuracoes/sistema {
```

## 6. Conclusão diária identifica a publicação

**Localizar:**

```html
  return {message};
}
function draw
```

**Substituir por:**

```html
  return {message,publicQuest:{id:q.id,title:q.title,cycle:s.cycle}};
}
function draw
```

## 7. Gravar a missão e o feed na mesma transação

**Localizar:**

```html
        transaction.set(playerRef,JSON.parse(JSON.stringify(next)));
        return {next,before,oldGold,oldQuests,result,unlocked};
```

**Substituir por:**

```html
        transaction.set(playerRef,JSON.parse(JSON.stringify(next)));
        if(result.publicQuest){
          const quest=result.publicQuest;
          const postId=encodeURIComponent(playerName)+'_'+quest.cycle+'_'+quest.id;
          transaction.set(cloud.doc(cloud.db,'feed_publico',postId),{
            nome:playerName,tipo:'missao',acao:'Concluiu a missão diária: '+quest.title,timestamp:cloud.serverTimestamp()
          });
        }
        return {next,before,oldGold,oldQuests,result,unlocked};
```

## 8. Abas unificadas

**Localizar:**

```html
let profileDirty=false,profileBusy=false,activePage='quests';
const flippedCards=new Set();
const pageDefs=[
  ['quests','⚔️','Missões Diárias',['quests']],
  ['routine','✅','Rotina & Missões',['routine-panel']],
  ['calendar','📅','Calendário',['calendar-panel']],
```

**Substituir por:**

```html
let profileDirty=false,profileBusy=false,activePage='journal';
const flippedCards=new Set();
const pageDefs=[
  ['journal','📖','Diário de Bordo',['quests','routine-panel','calendar-panel','feed-panel']],
```

## 9. Montagem dos painéis pessoal e social

**Localizar:**

```html
    for(const child of ids)panel.append($('#'+child));
    main.append(panel);
```

**Substituir por:**

```html
    if(id==='journal'){
      const planning=document.createElement('div');planning.className='journal-planning';
      for(const child of ids)if(child!=='feed-panel')planning.append($('#'+child));
      panel.append(planning,$('#feed-panel'));
    }else for(const child of ids)panel.append($('#'+child));
    main.append(panel);
```

## 10. Manter os links antigos das três abas

**Localizar:**

```html
  const fromHash=()=>{const page=pageDefs.find(([id,,,ids])=>location.hash==='#page-'+id||ids.some(child=>location.hash==='#'+child));if(page)activatePage(page[0]);};
  window.addEventListener('hashchange',fromHash);activatePage('quests');fromHash();
```

**Substituir por:**

```html
  const fromHash=()=>{
    if(['#page-quests','#page-routine','#page-calendar'].includes(location.hash)){activatePage('journal');return;}
    const page=pageDefs.find(([id,,,ids])=>location.hash==='#page-'+id||ids.some(child=>location.hash==='#'+child));if(page)activatePage(page[0]);
  };
  window.addEventListener('hashchange',fromHash);activatePage('journal');fromHash();
```

## 11. Datas especiais e navegação mensal

**Localizar:**

```html
function renderCalendar(){
```

**Substituir por:**

```html
// Datas recorrentes do calendário brasileiro; comemorações não são feriados.
// Acrescenta feriados locais neste dicionário no formato MM-DD.
const CALENDAR_DATES={
  '01-01':[{title:'Confraternização Universal',kind:'Feriado nacional'}],
  '03-08':[{title:'Dia Internacional da Mulher',kind:'Data comemorativa'}],
  '03-22':[{title:'Dia Mundial da Água',kind:'Data comemorativa'}],
  '04-21':[{title:'Tiradentes',kind:'Feriado nacional'}],
  '04-22':[{title:'Dia Internacional da Mãe Terra',kind:'Data comemorativa'}],
  '05-01':[{title:'Dia do Trabalho',kind:'Feriado nacional'}],
  '06-05':[{title:'Dia Mundial do Meio Ambiente',kind:'Data comemorativa'}],
  '09-07':[{title:'Independência do Brasil',kind:'Feriado nacional'}],
  '10-12':[{title:'Nossa Senhora Aparecida',kind:'Feriado nacional'}],
  '11-02':[{title:'Finados',kind:'Feriado nacional'}],
  '11-15':[{title:'Proclamação da República',kind:'Feriado nacional'}],
  '11-20':[{title:'Dia Nacional de Zumbi e da Consciência Negra',kind:'Feriado nacional'}],
  '12-25':[{title:'Natal',kind:'Feriado nacional'}]
};
function firstOfMonth(year,month){const date=new Date(0);date.setHours(12,0,0,0);date.setFullYear(year,month,1);return date;}
let calendarMonth=firstOfMonth(new Date().getFullYear(),new Date().getMonth()),calendarSelected=localDay();
function calendarDates(date){return CALENDAR_DATES[date.slice(5)]||[];}
function selectCalendarDay(day,focus=false){
  if(!validEventDate(day))return;
  calendarSelected=day;const date=new Date(day+'T12:00:00');
  calendarMonth=firstOfMonth(date.getFullYear(),date.getMonth());
  $('#event-date').value=day;renderCalendar();
  if(focus)$('#calendar-grid [data-day="'+day+'"]').focus();
}
function moveCalendarMonth(offset){
  const next=firstOfMonth(calendarMonth.getFullYear(),calendarMonth.getMonth()+offset);
  if(next.getFullYear()<1||next.getFullYear()>9999)return;
  selectCalendarDay(localDay(next));
}
function renderCalendarGrid(){
  const year=calendarMonth.getFullYear(),month=calendarMonth.getMonth(),today=localDay();
  const last=firstOfMonth(year,month+1);last.setDate(0);
  const count=last.getDate(),first=calendarMonth.getDay();
  $('#calendar-month').textContent=new Intl.DateTimeFormat('pt-BR',{month:'long',year:'numeric'}).format(calendarMonth);
  $('#calendar-prev').disabled=year===1&&month===0;$('#calendar-next').disabled=year===9999&&month===11;
  let cells=Array.from({length:first},()=>'<span aria-hidden="true"></span>').join('');
  for(let day=1;day<=count;day++){
    const date=new Date(calendarMonth);date.setDate(day);const key=localDay(date),special=calendarDates(key);
    const personal=calendarRecords.filter(e=>e.date===key),selected=key===calendarSelected;
    const label=new Intl.DateTimeFormat('pt-BR',{dateStyle:'full'}).format(date)+(special.length?' · '+special.map(e=>e.title).join(', '):'')+(personal.length?' · '+personal.length+' compromisso(s)':'');
    cells+='<button type="button" class="calendar-cell'+(key===today?' is-today':'')+(special.length?' has-holiday':'')+'" data-day="'+key+'" aria-label="'+esc(label)+'" aria-pressed="'+selected+'" tabindex="'+(selected?'0':'-1')+'"'+(key===today?' aria-current="date"':'')+'><span>'+day+'</span><span class="calendar-dots" aria-hidden="true">'+(special.length?'<i class="calendar-dot"></i>':'')+(personal.length?'<i class="calendar-dot personal"></i>':'')+'</span></button>';
  }
  $('#calendar-grid').innerHTML=cells;
  $('#calendar-selected').textContent=new Intl.DateTimeFormat('pt-BR',{dateStyle:'full'}).format(new Date(calendarSelected+'T12:00:00'));
}
function renderCalendar(){
```

## 12. Eventos e feriados do dia selecionado

**Localizar:**

```html
  $('#calendar-list').innerHTML=upcoming.map(row).join('')||'<li class="empty">'+(calendarReady?'Sem próximos eventos. Reserva espaço para algo importante.':'A aguardar o calendário…')+'</li>';
```

**Substituir por:**

```html
  const focusedDay=document.activeElement?.dataset.day;
  renderCalendarGrid();
  if(focusedDay)$('#calendar-grid [data-day="'+focusedDay+'"]')?.focus({preventScroll:true});
  const holidays=calendarDates(calendarSelected).map(e=>'<li class="calendar-holiday"><strong>'+esc(e.title)+'</strong><small>'+esc(e.kind)+'</small></li>').join('');
  $('#calendar-list').innerHTML=holidays+sorted.filter(e=>e.date===calendarSelected).map(row).join('')||'<li class="empty">'+(calendarReady?'Sem compromissos neste dia. Adiciona o teu próximo plano.':'A aguardar os compromissos pessoais…')+'</li>';
```

## 13. Abrir o dia do compromisso criado

**Localizar:**

```html
if(await calendarChange(id,current=>current?null:item)){$('#calendar-name').value='';$('#event-date').value='';$('#calendar-feedback').textContent='Evento guardado.';}
```

**Substituir por:**

```html
if(await calendarChange(id,current=>current?null:item)){$('#calendar-name').value='';selectCalendarDay(date);$('#calendar-feedback').textContent='Evento guardado.';}
```

## 14. Controlos do calendário e teclado

**Localizar:**

```html
  $('#calendar-retry').addEventListener('click',watchCalendar);
  renderProductivity();
```

**Substituir por:**

```html
  $('#calendar-retry').addEventListener('click',watchCalendar);
  $('#calendar-prev').addEventListener('click',()=>moveCalendarMonth(-1));
  $('#calendar-next').addEventListener('click',()=>moveCalendarMonth(1));
  $('#calendar-today').addEventListener('click',()=>selectCalendarDay(localDay(),true));
  $('#calendar-grid').addEventListener('click',event=>{const button=event.target.closest('[data-day]');if(button)selectCalendarDay(button.dataset.day,true);});
  $('#calendar-grid').addEventListener('keydown',event=>{
    const button=event.target.closest('[data-day]');if(!button)return;
    const offsets={ArrowLeft:-1,ArrowRight:1,ArrowUp:-7,ArrowDown:7};
    if(!(event.key in offsets)&&!['Home','End','PageUp','PageDown'].includes(event.key))return;
    event.preventDefault();const date=new Date(button.dataset.day+'T12:00:00');
    if(event.key==='PageUp'||event.key==='PageDown'){moveCalendarMonth(event.key==='PageUp'?-1:1);$('#calendar-grid [aria-pressed="true"]').focus();return;}
    date.setDate(date.getDate()+(event.key==='Home'?-date.getDay():event.key==='End'?6-date.getDay():offsets[event.key]));
    selectCalendarDay(localDay(date),true);
  });
  renderProductivity();
```

## 15. Feed em tempo real, renderização segura e partilha

**Localizar:**

```html
function renderProductivity(){renderRoutine();renderCalendar();}
```

**Substituir por:**

```html
const FEED_LIMIT=50;
let stopFeed=null,feedGeneration=0,feedBusy=false,feedReady=false,feedError='',feedQueue=Promise.resolve();
function safeImageURL(value){
  if(typeof value!=='string'||value.length>2048)return null;
  try{const url=new URL(value.trim());return url.protocol==='https:'&&!url.username&&!url.password&&url.href.length<=2048?url.href:null;}catch{return null;}
}
function renderFeedControls(){
  if(!$('#feed-form'))return;
  for(const id of ['feed-image','feed-caption','feed-submit'])$('#'+id).disabled=blocked||!loggedIn||!feedReady||feedBusy;
  $('#feed-submit').textContent=feedBusy?'A partilhar…':'Partilhar print';
  $('#feed-retry').disabled=!loggedIn||feedBusy;
}
function feedMessage(error){
  return String(error?.code||'').includes('permission-denied')
    ?'A Vitrine precisa da regra de feed_publico publicada no Firestore. Atualiza as regras e clica em Reconectar Vitrine.'
    :'Não foi possível ligar à Vitrine. Verifica a ligação e tenta reconectar.';
}
function stopFeedWatch(){feedGeneration++;stopFeed?.();stopFeed=null;feedReady=false;renderFeedControls();}
function renderFeed(snapshot){
  const list=$('#feed-list'),fragment=document.createDocumentFragment();
  for(const doc of snapshot.docs){
    const post=doc.data({serverTimestamps:'estimate'});
    if(!post||!['missao','print'].includes(post.tipo)||typeof post.nome!=='string'||!post.nome.trim()||post.nome.length>80||typeof post.acao!=='string'||!post.acao.trim()||post.acao.length>500)continue;
    const card=document.createElement('li'),header=document.createElement('header'),symbol=document.createElement('span'),byline=document.createElement('div'),name=document.createElement('strong'),time=document.createElement('time'),copy=document.createElement('p');
    card.className='feed-card';symbol.className='feed-symbol';symbol.setAttribute('aria-hidden','true');symbol.textContent=post.tipo==='print'?'🖼️':'⚔️';
    name.textContent=post.nome;copy.textContent=post.acao;copy.className='feed-caption';
    const date=typeof post.timestamp?.toDate==='function'?post.timestamp.toDate():null;
    if(date instanceof Date&&!Number.isNaN(date.getTime())){time.dateTime=date.toISOString();time.textContent=new Intl.DateTimeFormat('pt-BR',{dateStyle:'short',timeStyle:'short'}).format(date);}else time.textContent='A sincronizar…';
    byline.append(name,time);header.append(symbol,byline);card.append(header,copy);
    if(post.tipo==='print'){
      const url=safeImageURL(post.imagem),fallback=document.createElement('p');fallback.className='feed-image-error';
      fallback.textContent='Imagem indisponível. O link pode ter expirado ou não apontar para uma imagem.';
      if(url){
        const img=document.createElement('img'),link=document.createElement('a');
        img.alt=post.acao;img.loading='lazy';img.decoding='async';img.referrerPolicy='no-referrer';
        img.addEventListener('error',()=>{img.hidden=true;fallback.hidden=false;},{once:true});
        fallback.hidden=true;img.src=url;link.href=url;link.target='_blank';link.rel='noopener noreferrer';link.className='feed-image-link';link.textContent='Abrir imagem original';card.append(img,fallback,link);
      }else card.append(fallback);
    }
    fragment.append(card);
  }
  if(!fragment.childNodes.length){const empty=document.createElement('li');empty.className='empty';empty.textContent=snapshot.metadata.fromCache?'A aguardar publicações da Vitrine…':'O reino espera a primeira conquista. Partilha uma print ou conclui uma missão diária!';fragment.append(empty);}
  list.replaceChildren(fragment);
}
function watchFeed(){
  stopFeedWatch();if(!loggedIn||!cloud)return;
  const generation=feedGeneration;feedError='';$('#feed-status').textContent='A ligar à Vitrine…';
  try{
    const query=cloud.query(cloud.collection(cloud.db,'feed_publico'),cloud.orderBy('timestamp','desc'),cloud.limit(FEED_LIMIT));
    stopFeed=cloud.onSnapshot(query,{includeMetadataChanges:true},snapshot=>{
      if(generation!==feedGeneration)return;
      feedReady=!snapshot.metadata.fromCache;feedError='';renderFeed(snapshot);renderFeedControls();
      $('#feed-status').textContent=snapshot.metadata.fromCache?'Vitrine em cache · a aguardar ligação.':'Ao vivo · até '+FEED_LIMIT+' publicações mais recentes';
    },error=>{
      if(generation!==feedGeneration)return;
      feedReady=false;feedError=feedMessage(error);$('#feed-status').textContent=feedError;renderFeedControls();
    });
  }catch(error){feedReady=false;feedError=feedMessage(error);$('#feed-status').textContent=feedError;renderFeedControls();}
}
function initFeed(){
  $('#feed-retry').addEventListener('click',watchFeed);
  $('#feed-form').addEventListener('submit',event=>{
    event.preventDefault();if(blocked||!loggedIn||!feedReady||feedBusy)return;
    const imagem=safeImageURL($('#feed-image').value),acao=$('#feed-caption').value.trim();
    if(!imagem||!acao||acao.length>500){$('#feed-feedback').textContent='Usa uma URL HTTPS válida e uma legenda de até 500 caracteres.';return;}
    const owner=playerRef,nome=playerName,ref=cloud.doc(cloud.collection(cloud.db,'feed_publico'));
    feedBusy=true;renderFeedControls();$('#feed-feedback').textContent='A guardar a tua print…';
    feedQueue=(async()=>{
      try{
        await cloud.runTransaction(cloud.db,async transaction=>{
          const parent=await transaction.get(owner);if(!parent.exists())throw Error('Perfil ausente');
          transaction.set(ref,{nome,tipo:'print',acao,imagem,timestamp:cloud.serverTimestamp()});
        });
        $('#feed-form').reset();$('#feed-feedback').textContent='Print partilhada com os Brothers!';
      }catch(error){$('#feed-feedback').textContent=feedMessage(error)+' A print não foi publicada; os campos foram preservados.';}
      finally{feedBusy=false;renderFeedControls();}
    })();
  });
  renderFeedControls();
}
function renderProductivity(){renderRoutine();renderCalendar();renderFeedControls();}
```

## 16. Ligar Vitrine após login

**Localizar:**

```html
watchPlayer();loadFriends();watchCalendar();if(Date.now()
```

**Substituir por:**

```html
watchPlayer();loadFriends();watchCalendar();watchFeed();if(Date.now()
```

## 17. Desligar Vitrine se o login falhar

**Localizar:**

```html
stopCalendarWatch();stopPlayer=null;
```

**Substituir por:**

```html
stopCalendarWatch();stopFeedWatch();stopPlayer=null;
```

## 18. Reconectar todos os listeners

**Localizar:**

```html
$('#cloud-retry').addEventListener('click',async()=>{await sync();if(!blocked){watchPlayer();loadFriends();watchCalendar();}});
```

**Substituir por:**

```html
$('#cloud-retry').addEventListener('click',async()=>{await sync();if(!blocked){watchPlayer();loadFriends();watchCalendar();watchFeed();}});
```

## 19. Esperar uma print pendente antes de trocar de jogador

**Localizar:**

```html
$('#switch-player').addEventListener('click',async()=>{if(opening||validation)return;await Promise.all([queue,calendarQueue]);location.reload();});
```

**Substituir por:**

```html
$('#switch-player').addEventListener('click',async()=>{if(opening||validation)return;await Promise.all([queue,calendarQueue,feedQueue]);location.reload();});
```

## 20. Retomar o feed quando a rede voltar

**Localizar:**

```html
window.addEventListener('online',()=>{loadSystemConfig(true);sync();if(loggedIn){loadFriends();watchCalendar();}});
```

**Substituir por:**

```html
window.addEventListener('online',()=>{loadSystemConfig(true);sync();if(loggedIn){loadFriends();watchCalendar();watchFeed();}});
```

## 21. Encerrar listener ao sair da página

**Localizar:**

```html
window.addEventListener('pagehide',()=>{stopPlayer?.();stopFriends?.();stopCalendarWatch();});
```

**Substituir por:**

```html
window.addEventListener('pagehide',()=>{stopPlayer?.();stopFriends?.();stopCalendarWatch();stopFeedWatch();});
```

## 22. Restaurar listener ao regressar à página

**Localizar:**

```html
window.addEventListener('pageshow',event=>{if(event.persisted&&loggedIn){watchPlayer();loadFriends();watchCalendar();sync();}});
```

**Substituir por:**

```html
window.addEventListener('pageshow',event=>{if(event.persisted&&loggedIn){watchPlayer();loadFriends();watchCalendar();watchFeed();sync();}});
```

## 23. Inicializar formulário social

**Localizar:**

```html
initGameUI();initProductivity();initTheme();
```

**Substituir por:**

```html
initGameUI();initProductivity();initFeed();initTheme();
```

## 24. Indicar a regra social quando uma missão não puder ser gravada

**Localizar:**

```html
Confira as regras de users no console Firebase.
```

**Substituir por:**

```html
Confira as regras de users e feed_publico no console Firebase.
```
