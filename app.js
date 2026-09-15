const designs = [
  // Preset 01 — Framer / orange-red editorial
  ["Folio Heat","creative orange","creative","Syne","assets/presets/preset-01.png","reveal"],
  ["Sunset Studio","creative orange","creative","Manrope","assets/presets/preset-01.png","slide"],
  ["Signal Red","creative orange","dark","Space Grotesk","assets/presets/preset-01.png","zoom"],
  ["Editorial Glow","creative orange","dark","Montserrat","assets/presets/preset-01.png","rise"],

  // Preset 02 — bold cinematic visual designer
  ["Lens & Layers","cinematic designer","dark","Montserrat","assets/presets/preset-02.png","reveal"],
  ["Black Canvas","cinematic designer","dark","Inter","assets/presets/preset-02.png","slide"],
  ["Studio Noir","cinematic designer","dark","Manrope","assets/presets/preset-02.png","zoom"],
  ["Gold Contrast","cinematic designer","dark","Playfair Display","assets/presets/preset-02.png","marquee"],

  // Preset 03 — oversized typography / magazine
  ["Type Poster","editorial type","dark","Montserrat","assets/presets/preset-03.png","marquee"],
  ["Mono Magazine","editorial type","dark","Space Grotesk","assets/presets/preset-03.png","reveal"],
  ["Brutal Portfolio","editorial type","dark","Syne","assets/presets/preset-03.png","slide"],
  ["White Type","editorial type","dark","Inter","assets/presets/preset-03.png","glitch"],

  // Preset 04 — esports / dashboard
  ["Arena Profile","gaming dashboard","dark","Space Grotesk","assets/presets/preset-04.png","glitch"],
  ["Player Card","gaming dashboard","dark","Manrope","assets/presets/preset-04.png","zoom"],
  ["Neon Stats","gaming dashboard","dark","Montserrat","assets/presets/preset-04.png","slide"],
  ["Competitive UI","gaming dashboard","dark","Inter","assets/presets/preset-04.png","rise"],

  // Preset 05 — bright interactive grid
  ["Lime Light","interactive bright","light","Manrope","assets/presets/preset-05.png","rise"],
  ["Soft Grid","interactive bright","light","DM Sans","assets/presets/preset-05.png","reveal"],
  ["Playful Mono","interactive bright","light","Space Grotesk","assets/presets/preset-05.png","zoom"],
  ["Acid Studio","interactive bright","creative","Syne","assets/presets/preset-05.png","marquee"],

  // Preset 06 — cool minimal editorial
  ["Quiet Studio","cool editorial","minimal","Libre Baskerville","assets/presets/preset-06.png","reveal"],
  ["Gallery Mode","cool editorial","light","Playfair Display","assets/presets/preset-06.png","rise"],
  ["Minimal Frame","cool editorial","light","Montserrat","assets/presets/preset-06.png","slide"],
  ["Architect Grid","cool editorial","minimal","Inter","assets/presets/preset-06.png","zoom"]
];

let state={
name:"Aarav Mehta",title:"UI/UX Designer",bio:"I create thoughtful digital experiences that are simple, useful and memorable.",
location:"Karachi, Pakistan",availability:"Available for freelance",email:"hello@example.com",phone:"+92 300 0000000",
instagram:"@yourname",linkedin:"yourname",github:"yourname",behance:"yourname",dribbble:"yourname",
skills:"Figma, Photoshop, React, Branding, UI Design",services:"Web Design\nBrand Identity\nSocial Media Design",
experience:"2+ years freelance experience\nWorked with startups and small businesses",education:"BS Computer Science — Your University",resume:"",photo:"",template:0, animation:"auto",
projects:[
{name:"Creative Landing Page",type:"Web Design",description:"A clean conversion-focused landing page for a growing digital brand.",image:"",fit:"contain",focus:"center"},
{name:"Brand Identity",type:"Branding",description:"A complete visual identity system with logo, colors and social assets.",image:"",fit:"contain",focus:"center"},
{name:"Mobile App UI",type:"UI/UX",description:"A modern mobile experience designed around clarity and simple interactions.",image:"",fit:"contain",focus:"center"}
]};

const $=id=>document.getElementById(id);
const fields=["name","title","bio","location","availability","email","phone","instagram","linkedin","github","behance","dribbble","skills","services","experience","education","resume"];

function esc(s=""){return s.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function cleanHandle(v=""){return v.trim().replace(/^@/,"").replace(/^https?:\/\/(www\.)?/,"").replace(/\/.*$/,"")}
function socialUrl(type,value=""){
  const h=cleanHandle(value); if(!h)return "#";
  if(/^https?:\/\//i.test(value.trim())) return value.trim();
  const map={instagram:`https://www.instagram.com/${h}/`,linkedin:`https://www.linkedin.com/in/${h}/`,github:`https://github.com/${h}`,behance:`https://www.behance.net/${h}`,dribbble:`https://dribbble.com/${h}`};
  return map[type]||"#";
}
function socialIcon(type){
  const common='width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';
  const icons={
    instagram:`<svg ${common}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>`,
    linkedin:`<svg ${common}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v2"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
    github:`<svg ${common}><path d="M9 19c-4 1-4-2-5-2m10 4v-3.9c.1-.8-.3-1.6-.9-2.1 3-.3 6-1.5 6-6a4.6 4.6 0 0 0-1.2-3.2A4.3 4.3 0 0 0 17.8 3S16.7 2.6 14 4.5a10.4 10.4 0 0 0-5 0C6.3 2.6 5.2 3 5.2 3a4.3 4.3 0 0 0-1.1 2.8A4.6 4.6 0 0 0 3 9.1c0 4.5 3 5.7 6 6-.6.5-.9 1.2-.9 2.1V21"/></svg>`,
    behance:`<svg ${common}><path d="M4 5h6a3 3 0 0 1 0 6H4zm0 6h6.5a3.5 3.5 0 0 1 0 7H4z"/><path d="M15 8h5M15 14h6a3 3 0 0 0-6 0 3.5 3.5 0 0 0 6 2"/></svg>`,
    dribbble:`<svg ${common}><circle cx="12" cy="12" r="9"/><path d="M5 6.5c4 2 8 2.5 13 2M4 15c5-1.5 10-1 15 1M9 3c2 4 4 8 5 15"/></svg>`
  };return icons[type]||"";
}

function initials(){return(state.name||"Your Name").split(/\s+/).slice(0,2).map(x=>x[0]).join("").toUpperCase()}
function splitList(s){return s.split(",").map(x=>x.trim()).filter(Boolean)}
function save(){try{localStorage.setItem("portfolioForgeStateV2",JSON.stringify(state))}catch(e){}}
function load(){
 try{const saved=JSON.parse(localStorage.getItem("portfolioForgeStateV2"));if(saved)state={...state,...saved}}catch(e){}
 fields.forEach(k=>{if($(k))$(k).value=state[k]||""});
 if(state.photo)$("avatarPreview").innerHTML=`<img src="${state.photo}" alt="">`;
 renderProjects();renderDesigns();renderPreview();updateReady();if(document.getElementById("animationOverride"))document.getElementById("animationOverride").value=state.animation||"auto";
}
fields.forEach(k=>document.addEventListener("input",e=>{if(e.target.id===k){state[k]=e.target.value;save();renderPreview();updateReady()}}));

function renderProjects(){
 $("projects").innerHTML="";
 state.projects.forEach((p,i)=>{
  const el=document.createElement("div");el.className="project-card";p.fit=p.fit||"contain";p.focus=p.focus||"center";
  el.innerHTML=`<div class="project-top"><strong>Project ${String(i+1).padStart(2,"0")}</strong><button class="remove-project" data-remove="${i}">Remove</button></div>
  <div class="project-image-upload">
    <div class="project-image-preview project-fit-${p.fit||"cover"}" id="projectPreview${i}">${p.image?`<img src="${p.image}" alt="">`:"WORK PIC"}</div>
    <div class="project-upload-fields">
      <label>Upload work picture
        <input type="file" accept="image/*" data-image="${i}">
      </label>
      <div class="grid two compact-grid">
        <label>Image fit
          <select data-p="${i}" data-k="fit">
            <option value="contain" ${p.fit==="contain"?"selected":""}>Show full image</option>
            <option value="cover" ${p.fit==="cover"?"selected":""}>Fill frame</option>
          </select>
        </label>
        <label>Image focus
          <select data-p="${i}" data-k="focus">
            <option value="center" ${p.focus==="center"?"selected":""}>Center</option>
            <option value="top" ${p.focus==="top"?"selected":""}>Top</option>
            <option value="bottom" ${p.focus==="bottom"?"selected":""}>Bottom</option>
            <option value="left" ${p.focus==="left"?"selected":""}>Left</option>
            <option value="right" ${p.focus==="right"?"selected":""}>Right</option>
          </select>
        </label>
      </div>
    </div>
  </div>
  <label>Project name<input data-p="${i}" data-k="name" value="${esc(p.name)}" placeholder="Project name"></label>
  <div class="grid two"><label>Category<input data-p="${i}" data-k="type" value="${esc(p.type)}" placeholder="Web Design"></label>
  <label>Project description<input data-p="${i}" data-k="description" value="${esc(p.description)}" placeholder="What did you create?"></label></div>`;
  $("projects").appendChild(el);
 });
 document.querySelectorAll("[data-remove]").forEach(b=>b.onclick=()=>{state.projects.splice(+b.dataset.remove,1);renderProjects();save();renderPreview()});
 document.querySelectorAll("[data-p]").forEach(inp=>inp.oninput=()=>{state.projects[+inp.dataset.p][inp.dataset.k]=inp.value;save();renderProjects();renderPreview()});
 document.querySelectorAll("[data-image]").forEach(inp=>inp.onchange=e=>{
  const i=+e.target.dataset.image,f=e.target.files[0];if(!f)return;
  const r=new FileReader();r.onload=()=>{state.projects[i].image=r.result;save();renderProjects();renderPreview()};r.readAsDataURL(f);
 });
}
$("addProject").onclick=()=>{if(state.projects.length>=6)return alert("You can add up to 6 projects.");state.projects.push({name:"New Project",type:"Design",description:"Describe your project here.",image:"",fit:"contain",focus:"center"});renderProjects();save();renderPreview()};

function renderDesigns(){
 const q=($("designSearch").value||"").toLowerCase(),cat=$("categoryFilter").value;
 $("designGrid").innerHTML="";
 designs.forEach((d,i)=>{
  if(q&&!d[0].toLowerCase().includes(q))return;if(cat!=="all"&&d[2]!==cat)return;
  const card=document.createElement("div");card.className="design-card"+(state.template===i?" selected":"");
  card.innerHTML=`<div class="design-thumb has-ref t${(i%24)+1}" style="--ref:url('${d[4]}')"><span class="design-num">${String(i+1).padStart(2,"0")}</span><div class="design-overlay"><b>${d[0]}</b><span>${d[5].toUpperCase()}</span></div></div><div class="design-name">${d[0]}<div class="design-tag">${d[2].toUpperCase()} · PRESET ${Math.floor(i/4)+1}</div><div class="font-note">Aa ${d[3]}</div></div>`;
  card.onclick=()=>{state.template=i;state.animation="auto";save();renderDesigns();renderPreview();updateReady();if(document.getElementById("animationOverride"))document.getElementById("animationOverride").value="auto";};
  $("designGrid").appendChild(card);
 });
}
$("designSearch").oninput=renderDesigns;$("categoryFilter").onchange=renderDesigns;

function renderPreview(){
 const i=state.template,d=designs[i],skills=splitList(state.skills),anim=state.animation==="auto"?d[5]:state.animation,preset=Math.floor(i/4)+1;
 $("previewTemplate").textContent=`Template ${String(i+1).padStart(2,"0")} · ${d[0]} · ${d[3]} · ${anim}`;
 $("browserTitle").textContent=`${state.name||"Portfolio"} — ${state.title||"Freelancer"}`;
 $("livePreview").innerHTML=`<div class="site t${(i%24)+1} preset-${preset}" data-anim="${anim}">
 <nav class="site-nav"><div class="site-logo">${esc(state.name||"Your Name")}</div><div class="site-links"><span>ABOUT</span><span>WORK</span><span>SERVICES</span><span>CONTACT</span></div><div class="social-links top-social">${["instagram","linkedin","github","behance","dribbble"].map(type=>state[type]?`<a href="${esc(socialUrl(type,state[type]))}" target="_blank" rel="noopener noreferrer" title="${type}" aria-label="${type}">${socialIcon(type)}</a>`:"").join("")}</div></nav>
 <section class="site-hero"><div><div class="site-kicker">${esc(state.availability||"AVAILABLE FOR FREELANCE")}</div><h2>I'm ${esc(state.name||"Your Name")}</h2><div class="role">${esc(state.title||"Creative Freelancer")}</div><p class="site-bio">${esc(state.bio||"Your introduction goes here.")}</p><a class="site-btn" href="#work">View My Work →</a></div>
 <div class="hero-visual">${state.photo?`<img src="${state.photo}" alt="Profile">`:`<div class="hero-initial">${initials()}</div>`}</div></section>
 <section class="site-section"><h3>Skills</h3><div class="skills">${(skills.length?skills:["Design","Development","Strategy"]).map(x=>`<span class="skill">${esc(x)}</span>`).join("")}</div></section>
 <section class="site-section" id="work"><h3>Selected Work</h3><div class="project-grid">${state.projects.map((p,n)=>`<article class="project project-pos-${((n+state.template)%4)+1}"><div class="project-img project-fit-${p.fit||"contain"}" style="--focus:${p.focus||"center"}">${p.image?`<img src="${p.image}" alt="${esc(p.name)}">`:`0${n+1}`}</div><div class="project-body"><strong>${esc(p.name)}</strong><p>${esc(p.type)} · ${esc(p.description)}</p></div></article>`).join("")}</div></section>
 <section class="site-section"><h3>About & Experience</h3><p class="site-bio">${esc(state.experience||"Your experience goes here.").replace(/\n/g,"<br>")}</p><p class="site-bio">${esc(state.services||"Your services go here.").replace(/\n/g,"<br>")}</p></section>
 <footer class="site-footer"><span>${esc(state.email||"hello@example.com")}</span><span>${esc(state.location||"Your City")}</span><div class="social-links" aria-label="Social links">
  ${["instagram","linkedin","github","behance","dribbble"].map(type=>state[type]?`<a href="${esc(socialUrl(type,state[type]))}" target="_blank" rel="noopener noreferrer" title="${type}" aria-label="${type}">${socialIcon(type)}</a>`:"").join("")}
</div></footer>
 </div>`;
}
function updateReady(){$("readyName").textContent=state.name||"Your portfolio";$("readyTemplate").textContent=`Template ${String(state.template+1).padStart(2,"0")} — ${designs[state.template][0]} · ${designs[state.template][3]} · ${designs[state.template][5]}`}
function go(step){
 document.querySelectorAll(".form-step").forEach(x=>x.classList.toggle("active",x.dataset.panel==step));
 document.querySelectorAll(".step").forEach(x=>x.classList.toggle("active",x.dataset.step==step));
 const titles=["Create your portfolio","Add your work","Choose a design","Portfolio ready"],subs=["Add your information and make your work stand out.","Upload your project pictures, skills, services and experience.","Pick a visual style, font and animation.","Review the live preview, then export your portfolio."];
 $("pageTitle").textContent=titles[step-1];$("pageSubtitle").textContent=subs[step-1];window.scrollTo({top:0,behavior:"smooth"});
}
document.querySelectorAll(".next-btn").forEach(b=>b.onclick=()=>go(+b.dataset.next));
document.querySelectorAll(".prev-btn").forEach(b=>b.onclick=()=>go(+b.dataset.prev));
document.querySelectorAll(".step").forEach(b=>b.onclick=()=>go(+b.dataset.step));
$("jumpDesigns").onclick=()=>go(3);$("previewBtn").onclick=()=>go(4);

$("photoInput").onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{state.photo=r.result;$("avatarPreview").innerHTML=`<img src="${r.result}" alt="">`;save();renderPreview()};r.readAsDataURL(f)};
$("resetBtn").onclick=()=>{if(confirm("Reset all portfolio information?")){localStorage.removeItem("portfolioForgeStateV2");location.reload()}};

function openPreview(){
 const win=window.open("","_blank");if(!win)return alert("Please allow pop-ups to open the full preview.");
 const content=$("livePreview").innerHTML;
 const css=[...document.styleSheets].map(s=>{try{return[...s.cssRules].map(r=>r.cssText).join("")}catch(e){return""}}).join("");
 win.document.write(`<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(state.name||"Portfolio")}</title><style>${css}body{margin:0}.portfolio-preview{height:auto}.site{min-height:100vh}</style></head><body><div class="portfolio-preview">${content}</div></body></html>`);win.document.close();
}
$("openFullPreview").onclick=openPreview;
$("downloadSite").onclick=()=>{
 const html=`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(state.name||"Portfolio")}</title><link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:wght@500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@500;600;700;800&family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet"><style>${[...document.styleSheets].map(s=>{try{return[...s.cssRules].map(r=>r.cssText).join("")}catch(e){return""}}).join("")}body{margin:0}.portfolio-preview{height:auto}.site{min-height:100vh}</style></head><body><div class="portfolio-preview">${$("livePreview").innerHTML}</div></body></html>`;
 const blob=new Blob([html],{type:"text/html"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=(state.name||"my-portfolio").replace(/\s+/g,"-").toLowerCase()+".html";a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500);
};
document.getElementById("animationOverride")?.addEventListener("change",e=>{state.animation=e.target.value;save();renderPreview();});
load();

