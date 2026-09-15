const designs = [
  ["Minimal Light","minimal light","light"],["Dark Modern","dark modern","dark"],["Clean Professional","clean professional","light"],
  ["Bold Dark","bold dark","dark"],["Pastel Gradient","pastel gradient","creative"],["Purple Creative","purple creative","creative"],
  ["Beige Aesthetic","beige aesthetic","minimal"],["Dark Green","dark green","dark"],["Minimal Blue","minimal blue","light"],
  ["Creative Dark","creative dark","dark"],["Modern Agency","modern agency","light"],["Neon Dark","neon dark","dark"],
  ["Photography Minimal","photography minimal","minimal"],["3D Artist","3d artist","creative"],["SEO Specialist","seo specialist","light"],
  ["Corporate","corporate","light"],["Winter Layout","winter layout","light"],["Tech Dark","tech dark","dark"],
  ["Colorful Fun","colorful fun","creative"],["Architecture","architecture","minimal"],["Mobile Developer","mobile developer","dark"],
  ["Life Coach","life coach","light"],["AI Engineer","ai engineer","dark"],["Interior Designer","interior designer","minimal"]
];

let state = {
  name:"Aarav Mehta", title:"UI/UX Designer", bio:"I design thoughtful digital experiences that are simple, useful and memorable.",
  location:"Karachi, Pakistan", availability:"Available for freelance", email:"hello@example.com", phone:"+92 300 0000000",
  instagram:"@yourname", linkedin:"linkedin.com/in/yourname", github:"github.com/yourname",
  skills:"Figma, Photoshop, React, Branding, UI Design", services:"Web Design\nBrand Identity\nSocial Media Design",
  experience:"2+ years freelance experience\nWorked with startups and small businesses", education:"BS Computer Science — Your University",
  resume:"", photo:"", template:0,
  projects:[
    {name:"Creative Landing Page",type:"Web Design",description:"A clean conversion-focused landing page for a growing digital brand."},
    {name:"Brand Identity",type:"Branding",description:"A complete visual identity system with logo, colors and social assets."},
    {name:"Mobile App UI",type:"UI/UX",description:"A modern mobile experience designed around clarity and simple interactions."}
  ]
};

const $ = id => document.getElementById(id);
const fields = ["name","title","bio","location","availability","email","phone","instagram","linkedin","github","skills","services","experience","education","resume"];

function loadState(){
  try { const saved=JSON.parse(localStorage.getItem("portfolioForgeState")); if(saved) state={...state,...saved}; } catch(e){}
  fields.forEach(k=>{ if($(k)) $(k).value=state[k]||""; });
  renderProjects(); renderDesigns(); renderPreview(); updateReady();
}
function save(){ localStorage.setItem("portfolioForgeState",JSON.stringify(state)); }
function sync(){
  fields.forEach(k=>{if($(k)) state[k]=$(k).value;});
  save(); renderPreview(); updateReady();
}
fields.forEach(k=>document.addEventListener("input",e=>{if(e.target.id===k) sync()}));

function renderProjects(){
  $("projects").innerHTML="";
  state.projects.forEach((p,i)=>{
    const el=document.createElement("div"); el.className="project-card";
    el.innerHTML=`<div class="project-top"><strong>Project ${String(i+1).padStart(2,"0")}</strong><button class="remove-project" data-remove="${i}">Remove</button></div>
      <label>Project name<input data-p="${i}" data-k="name" value="${esc(p.name)}" placeholder="Project name"></label>
      <div class="grid two"><label>Category<input data-p="${i}" data-k="type" value="${esc(p.type)}" placeholder="Web Design"></label>
      <label>Project description<input data-p="${i}" data-k="description" value="${esc(p.description)}" placeholder="What did you create?"></label></div>`;
    $("projects").appendChild(el);
  });
  document.querySelectorAll("[data-remove]").forEach(b=>b.onclick=()=>{state.projects.splice(+b.dataset.remove,1);renderProjects();save();renderPreview()});
  document.querySelectorAll("[data-p]").forEach(inp=>inp.oninput=()=>{state.projects[+inp.dataset.p][inp.dataset.k]=inp.value;save();renderPreview()});
}
$("addProject").onclick=()=>{if(state.projects.length>=6)return alert("You can add up to 6 projects.");state.projects.push({name:"New Project",type:"Design",description:"Describe your project here."});renderProjects();save();renderPreview()};

function esc(s=""){return s.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function initials(){return (state.name||"Your Name").split(/\s+/).slice(0,2).map(x=>x[0]).join("").toUpperCase()}
function splitList(s){return s.split(",").map(x=>x.trim()).filter(Boolean)}
function nl(s){return esc(s).replace(/\n/g,"<br>")}

function renderDesigns(){
  const q=($("designSearch").value||"").toLowerCase(), cat=$("categoryFilter").value;
  $("designGrid").innerHTML="";
  designs.forEach((d,i)=>{
    if(q && !d[0].toLowerCase().includes(q)) return;
    if(cat!=="all" && d[2]!==cat) return;
    const card=document.createElement("div"); card.className="design-card"+(state.template===i?" selected":"");
    card.innerHTML=`<div class="design-thumb t${i+1}"><span class="design-num">${String(i+1).padStart(2,"0")}</span><div class="mock-nav"></div><div class="mock-title"></div><div class="mock-line"></div><div class="mock-block"></div></div><div class="design-name">${d[0]}<div class="design-tag">${d[2].toUpperCase()}</div></div>`;
    card.onclick=()=>{state.template=i;save();renderDesigns();renderPreview();updateReady()};
    $("designGrid").appendChild(card);
  });
}
$("designSearch").oninput=renderDesigns;$("categoryFilter").onchange=renderDesigns;

function renderPreview(){
  const i=state.template, cls=`site t${i+1}`, d=designs[i];
  $("previewTemplate").textContent=`Template ${String(i+1).padStart(2,"0")} · ${d[0]}`;
  $("browserTitle").textContent=`${state.name || "Portfolio"} — ${state.title || "Freelancer"}`;
  const skills=splitList(state.skills);
  $("livePreview").innerHTML=`<div class="${cls}">
    <nav class="site-nav"><div class="site-logo">${esc(state.name||"Your Name")}</div><div class="site-links"><span>ABOUT</span><span>WORK</span><span>SERVICES</span><span>CONTACT</span></div></nav>
    <section class="site-hero"><div><div class="site-kicker">${esc(state.availability||"AVAILABLE FOR FREELANCE")}</div><h2>I'm ${esc(state.name||"Your Name")}</h2><div class="role">${esc(state.title||"Creative Freelancer")}</div><p class="site-bio">${esc(state.bio||"Your introduction goes here.")}</p><a class="site-btn" href="#work">View My Work →</a></div>
    <div class="hero-visual">${state.photo?`<img src="${state.photo}" alt="Profile">`:`<div class="hero-initial">${initials()}</div>`}</div></section>
    <section class="site-section"><h3>Skills</h3><div class="skills">${(skills.length?skills:["Design","Development","Strategy"]).map(x=>`<span class="skill">${esc(x)}</span>`).join("")}</div></section>
    <section class="site-section" id="work"><h3>Selected Work</h3><div class="project-grid">${state.projects.map((p,n)=>`<article class="project"><div class="project-img">0${n+1}</div><div class="project-body"><strong>${esc(p.name)}</strong><p>${esc(p.type)} · ${esc(p.description)}</p></div></article>`).join("")}</div></section>
    <section class="site-section"><h3>About & Experience</h3><p class="site-bio">${nl(state.experience||"Your experience goes here.")}</p><p class="site-bio">${nl(state.services||"Your services go here.")}</p></section>
    <footer class="site-footer"><span>${esc(state.email||"hello@example.com")}</span><span>${esc(state.location||"Your City")} · ${esc(state.github||"GitHub")}</span></footer>
  </div>`;
}
function updateReady(){$("readyName").textContent=state.name||"Your portfolio";$("readyTemplate").textContent=`Template ${String(state.template+1).padStart(2,"0")} — ${designs[state.template][0]}`}
function go(step){
  document.querySelectorAll(".form-step").forEach(x=>x.classList.toggle("active",x.dataset.panel==step));
  document.querySelectorAll(".step").forEach(x=>x.classList.toggle("active",x.dataset.step==step));
  const titles=["Create your portfolio","Add your work","Choose a design","Portfolio ready"];
  const subs=["Add your information and make your work stand out.","Show your skills, services and best projects.","Pick a visual style. Your information stays the same.","Review the live preview, then export your portfolio."];
  $("pageTitle").textContent=titles[step-1];$("pageSubtitle").textContent=subs[step-1];
  window.scrollTo({top:0,behavior:"smooth"});
}
document.querySelectorAll(".next-btn").forEach(b=>b.onclick=()=>go(+b.dataset.next));
document.querySelectorAll(".prev-btn").forEach(b=>b.onclick=()=>go(+b.dataset.prev));
document.querySelectorAll(".step").forEach(b=>b.onclick=()=>go(+b.dataset.step));
$("jumpDesigns").onclick=()=>go(3);$("previewBtn").onclick=()=>go(4);$("openFullPreview").onclick=()=>openPreview();

$("photoInput").onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{state.photo=r.result;$("avatarPreview").innerHTML=`<img src="${r.result}" alt="">`;save();renderPreview()};r.readAsDataURL(f)};

$("resetBtn").onclick=()=>{if(confirm("Reset all portfolio information?")){localStorage.removeItem("portfolioForgeState");location.reload()}};

function openPreview(){
  const win=window.open("","_blank");
  if(!win)return alert("Please allow pop-ups to open the full preview.");
  const content=$("livePreview").innerHTML;
  const css=[...document.styleSheets].map(s=>{try{return [...s.cssRules].map(r=>r.cssText).join("")}catch(e){return ""}}).join("");
  win.document.write(`<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(state.name||"Portfolio")}</title><style>${css}body{margin:0}.portfolio-preview{height:auto}.site{min-height:100vh}</style></head><body><div class="portfolio-preview">${content}</div></body></html>`);
  win.document.close();
}

$("downloadSite").onclick=()=>{
  const html=document.documentElement.outerHTML;
  const css=document.querySelector('link[rel="stylesheet"]').href ? "" : "";
  const blob=new Blob([`<!doctype html>\n${html}`],{type:"text/html"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="my-portfolio-generator-preview.html";a.click();URL.revokeObjectURL(a.href);
};

loadState();
