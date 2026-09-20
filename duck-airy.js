/* Airy presentation: reuse existing controls, records and exam behaviour. */
(function(){
 const $=id=>document.getElementById(id),dash=$('dashboardScreen');
 document.body.classList.add('duck-airy');
 let serial=0;
 function duckArt(){const id='airyDuck'+(++serial);return `<svg viewBox="0 0 220 200" aria-hidden="true" focusable="false"><defs><linearGradient id="${id}" x2=".8" y2="1"><stop stop-color="#fff591"/><stop offset=".5" stop-color="#ffdc35"/><stop offset="1" stop-color="#f5b91b"/></linearGradient><radialGradient id="${id}w"><stop stop-color="#ffe978"/><stop offset="1" stop-color="#ffcf2b"/></radialGradient></defs><ellipse cx="111" cy="184" rx="65" ry="7" fill="#b78d16" opacity=".12"/><path d="M88 174v10m28-11v11" stroke="#f3ad17" stroke-width="9" stroke-linecap="round"/><path d="M53 108c-5 49 24 69 64 66 43-3 71-28 77-65-19 12-37 14-49 7l-17-24z" fill="url(#${id})"/><circle cx="85" cy="70" r="44" fill="url(#${id})"/><path d="M49 73c-13 0-26-9-31-4-7 9 10 23 32 20" fill="#ffac21"/><ellipse cx="77" cy="64" rx="5" ry="7" fill="#24251c"/><ellipse cx="78" cy="62" rx="1.5" ry="2" fill="white"/><path d="M105 119c13-10 36-5 42 10 3 14-25 27-41 9-5-6-5-13-1-19" fill="url(#${id}w)"/><path d="M61 40c10-10 26-13 39-8" fill="none" stroke="#fff9be" stroke-width="5" opacity=".55" stroke-linecap="round"/></svg>`;}
 const mascot=dash.querySelector('.duck-mascot');
 if(mascot){const logo=mascot.querySelector('.duck-logo');logo.classList.add('airy-duck-art');logo.innerHTML=duckArt();dash.querySelector('.studio-heading').append(mascot);}
 const oldWelcome=dash.querySelector('.du-welcome');if(oldWelcome)oldWelcome.hidden=true;
 const grid=document.createElement('div');grid.className='airy-dashboard';dash.querySelector('.studio-heading').after(grid);
 const stats=dash.querySelector('.dash-stats'),mastery=dash.querySelector('.mastery-card'),chart=dash.querySelector('.studio-chart');
 const statsColumn=document.createElement('div');statsColumn.className='airy-stats';statsColumn.append(stats,mastery);grid.append(statsColumn,chart);
 const next=dash.querySelector('.du-next');grid.append(next);
 const recent=$('dashRecent').closest('.studio-analysis');recent.classList.add('airy-recent');grid.append(recent);
 const topics=$('dashTopics').closest('.studio-analysis');topics.classList.add('airy-topics');
 chart.querySelector('h2').textContent='Performance';recent.querySelector('h2').textContent='Recent papers';topics.querySelector('h2').textContent='Topics';
 const navLabels={navDashboard:'Overview',navPapers:'Papers',navBank:'Question bank',navReview:'Review',navWrong:'Wrong answers',navJournal:'Journal',navBookmarks:'Bookmarks',navPlanner:'Planner'};
 Object.entries(navLabels).forEach(([id,text])=>{const n=$(id)?.querySelector('.side-nav-label');if(n)n.textContent=text;});
 document.querySelectorAll('.studio-heading .studio-eyebrow').forEach(e=>e.hidden=true);
 const headingTitles={dashboardScreen:'Overview',libraryScreen:'Papers',reviewHubScreen:'Review',wrongHubScreen:'Wrong answers',bankScreen:'Question bank',bookmarksScreen:'Bookmarks',journalScreen:'Journal',plannerScreen:'Planner'};
 Object.entries(headingTitles).forEach(([id,title])=>{const h=$(id)?.querySelector('h1');if(h)h.textContent=title;});
 function refreshAiry(){
  const cards=[...next.querySelectorAll('.du-next-item')];
  if(cards[0]){const b=cards[0].querySelector('b'),label=cards[0].querySelector('small'),p=cards[0].querySelector('p');
   if(b.textContent==='A fresh paper awaits'){label.textContent='Practice';b.textContent='Choose a paper';p.textContent='Timed or untimed';}
   else {label.textContent='Continue';b.textContent=b.textContent.replace(/^Saved: /,'');}
   const art=document.createElement('span');art.className='airy-card-duck';art.innerHTML=duckArt();cards[0].append(art);
  }
  if(cards[1]){cards[1].querySelector('small').textContent='Focus';const b=cards[1].querySelector('b');if(b.textContent==='One question at a time'){b.textContent='Question bank';cards[1].querySelector('p').textContent='Filter by topic and difficulty';}}
  if(cards[2]){cards[2].querySelector('small').textContent='Planner';cards[2].querySelector('b').textContent='Practice planner';cards[2].querySelector('p').textContent='Plan your next session';const button=cards[2].querySelector('button');button.textContent='Open planner';button.replaceWith(button.cloneNode(true));cards[2].querySelector('button').onclick=()=>studyNav('planner');}
 }
 const build=buildDashboard;buildDashboard=function(...args){const result=build.apply(this,args);refreshAiry();return result;};refreshAiry();
 const reduced=()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 document.addEventListener('click',e=>{
  const target=e.target.closest('button,.paper,.study-clickable-row,summary');
  if(!target||reduced()||target.disabled||!target.closest('.modern-ui,#sideNav'))return;
  if(target.animate)target.animate([{transform:'scale(1)'},{transform:'scale(.97)'},{transform:'scale(1)'}],{duration:180,easing:'ease-out'});
 });
 // Decorative duck responds without replacing the established triple-click handler.
 const play=mascot?.querySelector('.duck-play');
 play?.addEventListener('click',()=>{if(reduced())return;const art=play.querySelector('svg');art?.animate?.([{transform:'rotate(0deg)'},{transform:'rotate(-12deg) translateY(-8px)'},{transform:'rotate(8deg)'},{transform:'rotate(0deg)'}],{duration:480,easing:'ease-out'});});
})();
