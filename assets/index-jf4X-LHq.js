(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();let a=4;function d(e){a>0&&(a--,m()),a===0&&(console.log("Game Over"),h(e))}function m(){const e=document.getElementById("counter");e.textContent="close".repeat(a)}function h(e){const t=document.querySelector(".triads");document.querySelector(".wordgrid").innerHTML="",document.querySelector(".mistakes").classList.add("text-transparent"),document.querySelector(".buttons").innerHTML=`
    <p class='py-3'>Refresh for a new puzzle!</p>
  `,t&&(t.classList.replace("hidden","flex"),t.innerHTML=`
      <div class="flex flex-col items-center justify-center rounded-xl p-2 h-20 w-full text-xl border-4 animate-exist bg-amber-200 border-amber-200">
        <div class="font-bold">${e[0].connection}</div>
        <div class="italic">${e[0].word}, ${e[1].word}, ${e[2].word}</div>
      </div>
      <div class="flex flex-col items-center justify-center rounded-xl p-2 h-20 w-full text-xl border-4 animate-exist bg-rose-200 border-rose-200">
        <div class="font-bold">${e[3].connection}</div>
        <div class="italic">${e[3].word}, ${e[4].word}, ${e[5].word}</div>
      </div>
      <div class="flex flex-col items-center justify-center rounded-xl p-2 h-20 w-full text-xl border-4 animate-exist bg-emerald-200 border-emerald-200">
        <div class="font-bold">${e[6].connection}</div>
        <div class="italic">${e[6].word}, ${e[7].word}, ${e[8].word}</div>
      </div>
    `)}const p=[{connection:"Chris ___",words:["Evans","Hemsworth","Pratt"]},{connection:"Pizza Toppings",words:["Pepperoni","Mushrooms","Pineapple"]},{connection:"Jupiter's Moons",words:["Ganymede","Europa","Io"]},{connection:"Shades of Blue",words:["Navy","Sky","Indigo"]},{connection:"Big Cats",words:["Tiger","Jaguar","Puma"]},{connection:"Cheese",words:["Cheddar","Feta","Ricotta"]},{connection:"Fungi",words:["Yeast","Mushrooms","Mold"]},{connection:"Fermented beverages",words:["Kvass","Kefir","Boza"]},{connection:"Poem forms",words:["Haiku","Sonnet","Limerick"]},{connection:"Musical Instruments",words:["Ukulele","Mandolin","Banjo"]},{connection:"Kitchen tools",words:["Whisk","Tongs","Mandoline"]},{connection:"Financial Documents",words:["Ledger","Invoice","Receipt"]},{connection:"King",words:["Pharaoh","Sultan","Maharaja"]},{connection:"Ancient Supercontinents",words:["Pangea","Gondwana","Tethys"]},{connection:"River Systems of Asia",words:["Yangtze","Indus","Mekong"]},{connection:"Mountains",words:["Kilimanjaro","Matterhorn","Annapurna"]},{connection:"Mountain Ranges",words:["Andes","Rocky","Alps"]},{connection:"African Languages",words:["Swahili","Hausa","Xhosa"]},{connection:"Made of Carbon",words:["Glucose","Ethanol","Diamond"]},{connection:"Saturn's Moons",words:["Rhea","Titan","Mimas"]},{connection:"Linux Distributions",words:["Ubuntu","Debian","Fedora"]},{connection:"Herbs",words:["Thyme","Basil","Rosemary"]},{connection:"Flatbreads",words:["Naan","Tortilla","Pita"]},{connection:"Revolutionaries",words:["Che","Thomas","Rosa"]}];function l(e){for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}const g=l([...p]).slice(0,3);let i=l(g.flatMap((e,t)=>e.words.map(s=>({word:s,connection:e.connection,connectionIndex:t}))));console.log(i);b();function u(e){return e.map(({word:t})=>`
    <button data-word="${t}" class="word">${t}</button>
  `).join("")}function f(e){const t=document.querySelector(".wordgrid");t&&(t.innerHTML=u(e))}function w(e){const t=document.querySelector(".triads");t&&(t.classList.replace("hidden","flex"),t.querySelectorAll("div").forEach(r=>r.classList.remove("animate-exist")),t.innerHTML+=`
      <div class="flex flex-col items-center justify-center rounded-xl p-2 h-20 w-full text-xl border-4 animate-exist
        ${e[0].connectionIndex===0?"bg-amber-200 border-amber-200":e[0].connectionIndex===1?"bg-rose-200 border-rose-200":e[0].connectionIndex===2?"bg-emerald-200 border-emerald-200":""}
      ">
        <div class="font-bold">${e[0].connection}</div>
        <div class="italic">${e.map(r=>r.word).join(", ")}</div>
      </div>
    `)}function b(){document.querySelector("#app").innerHTML=`
    <main class="p-2 relative w-dvw h-dvh bg-white flex flex-col items-center justify-center gap-4 font-primary">
      <section class="congrats hidden flex flex-col gap-4 items-center justify-center p-10 shadow-2xl bg-white animate-exist z-10">
        <h2 class="text-5xl font-bold">You did it!</h2>
        <p>Refresh for a new puzzle!</p>
      </section>
      <header class="p-4">
        <h1 class="text-7xl font-triad">Triads</h1>
        <h3 class="">Create three groups of three!</h3>
      </header>
      <section class="h-3/4 min-w-sm flex flex-col gap-4 items-center">
        <section class="triads hidden w-full flex-col gap-2 items-center justify-center"></section>
        <section class="wordgrid w-full grid grid-cols-3 gap-2 text-center">
          ${u(i)}
        </section>
        <section class="mistakes w-full flex flex-col items-center">
          <span id="counter" class="material-symbols-outlined"></span>
          <span>Mistakes Remaining</span>
        </section>
        <section class="buttons flex gap-2">
          <button id="shuffle" class="py-3 px-5 rounded-xl uppercase border-1 border-black cursor-pointer hover:underline transition-all">Shuffle</button>
          <button id="submit" class="py-3 px-5 rounded-xl uppercase border-1 border-black cursor-pointer hover:underline transition-all">Submit</button>
        </section>
      </section>
    </main>
  `,document.getElementById("shuffle").addEventListener("click",()=>{f(l([...i]))}),document.getElementById("submit").addEventListener("click",x)}document.querySelector(".wordgrid").addEventListener("click",e=>{const t=document.querySelectorAll(".selected");e.target.classList.contains("word")&&(e.target.classList.contains("selected")?e.target.classList.remove("selected"):t.length<3?e.target.classList.add("selected"):(t.forEach(s=>s.classList.add("animate-shake")),setTimeout(()=>{t.forEach(s=>s.classList.remove("animate-shake"))},500)))});function x(){const e=Array.from(document.querySelectorAll(".selected")),t=Array.from(document.querySelectorAll(".selected")).map(n=>n.dataset.word),s=t.map(n=>{const o=i.find(c=>c.word===n);return o?o.connectionIndex:-1}),r=new Set(s).size===1;if(e.length===3)if(r){let n=i.filter(o=>t.includes(o.word));return i=i.filter(o=>!t.includes(o.word)),i.length===0&&(console.log("Well Done!"),setTimeout(()=>{document.querySelector(".wordgrid").classList.replace("grid","hidden"),document.querySelector(".congrats").classList.replace("hidden","absolute")},500)),w(n),f(i),!0}else return e.forEach(n=>n.classList.add("animate-shake")),setTimeout(()=>{e.forEach(n=>n.classList.remove("animate-shake"))},500),e.forEach(n=>n.classList.remove("selected")),d(i),!1;else return e.forEach(n=>n.classList.add("animate-shake")),setTimeout(()=>{e.forEach(n=>n.classList.remove("animate-shake"))},500),e.forEach(n=>n.classList.remove("selected")),!1}d(i);
