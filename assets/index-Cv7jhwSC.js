(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();let a=4;function d(e){a>0&&(a--,h()),a===0&&(console.log("Game Over"),p(e))}function h(){const e=document.getElementById("counter");e.textContent="close".repeat(a),a===1&&document.getElementById("counter").classList.add("animate-bounce")}function p(e){const t=document.querySelector(".triads");document.querySelector(".wordgrid").innerHTML="",document.querySelector(".mistakes").classList.add("hidden"),document.querySelector(".buttons").innerHTML=`
    <section class="flex flex-col items-center justify-center gap-4">
      <span class="material-symbols-outlined scale-200">sentiment_very_dissatisfied</span>
      <h2 class="text-2xl">Try Again Next Time</h2>
      <p>Refresh for a new puzzle!</p>
    </section>
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
    `)}const w=[{connection:"Chris ___",words:["Evans","Hemsworth","Pratt"]},{connection:"Pizza Toppings",words:["Pepperoni","Mushrooms","Pineapple"]},{connection:"Jupiter's Moons",words:["Ganymede","Europa","Io"]},{connection:"Shades of Blue",words:["Navy","Sky","Indigo"]},{connection:"Big Cats",words:["Tiger","Jaguar","Puma"]},{connection:"Cheese",words:["Cheddar","Feta","Ricotta"]},{connection:"Fungi",words:["Yeast","Mushrooms","Mold"]},{connection:"Fermented beverages",words:["Kvass","Kefir","Boza"]},{connection:"Poem forms",words:["Haiku","Sonnet","Limerick"]},{connection:"Musical Instruments",words:["Ukulele","Mandolin","Banjo"]},{connection:"Kitchen tools",words:["Whisk","Tongs","Mandoline"]},{connection:"Financial Documents",words:["Ledger","Invoice","Receipt"]},{connection:"King",words:["Pharaoh","Sultan","Maharaja"]},{connection:"Ancient Supercontinents",words:["Pangea","Gondwana","Tethys"]},{connection:"River Systems of Asia",words:["Yangtze","Indus","Mekong"]},{connection:"Mountains",words:["Kilimanjaro","Matterhorn","Annapurna"]},{connection:"Mountain Ranges",words:["Andes","Rocky","Alps"]},{connection:"African Languages",words:["Swahili","Hausa","Xhosa"]},{connection:"Made of Carbon",words:["Glucose","Ethanol","Diamond"]},{connection:"Saturn's Moons",words:["Rhea","Titan","Mimas"]},{connection:"Linux Distributions",words:["Ubuntu","Debian","Fedora"]},{connection:"Herbs",words:["Thyme","Basil","Rosemary"]},{connection:"Flatbreads",words:["Naan","Tortilla","Pita"]},{connection:"Revolutionaries",words:["Che","Thomas","Rosa"]}];function l(e){for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}const g=l([...w]).slice(0,3);let c=l(g.flatMap((e,t)=>e.words.map(s=>({word:s,connection:e.connection,connectionIndex:t}))));console.log(c);x();function u(e){return e.map(({word:t})=>`
    <button data-word="${t}" class="word">${t}</button>
  `).join("")}function m(e){const t=document.querySelector(".wordgrid");t&&(t.innerHTML=u(e))}function b(e){const t=document.querySelector(".triads");t&&(t.classList.remove("hidden"),t.querySelectorAll("div").forEach(r=>r.classList.remove("animate-exist")),t.innerHTML+=`
      <div class="flex flex-col items-center justify-center rounded-xl p-2 h-24 w-full text-xl border-4 animate-exist
        ${e[0].connectionIndex===0?"bg-amber-200 border-amber-200":e[0].connectionIndex===1?"bg-rose-200 border-rose-200":e[0].connectionIndex===2?"bg-emerald-200 border-emerald-200":""}
      ">
        <div class="font-bold">${e[0].connection}</div>
        <div class="italic">${e.map(r=>r.word).join(", ")}</div>
      </div>
    `)}function x(){document.querySelector("#app").innerHTML=`
    <main class="relative w-dvw h-dvh bg-white flex flex-col items-center justify-center gap-2 font-primary">
      <header class="p-4 flex flex-col items-center">
        <h1 class="text-7xl font-triad">Triads</h1>
        <h3 class="">Create three groups of three!</h3>
      </header>
      <section class="h-2/3 w-full flex flex-col gap-4 items-center">
        <section class="w-dvw h-full sm:w-md p-2 flex flex-col gap-2 items-center justify-center">
          <section class="done hidden absolute flex flex-col gap-4 items-center justify-center p-6 pb-12 shadow-2xl bg-white animate-exist z-10">
            <button id="close-btn" class="material-symbols-outlined self-end text-gray-400 hover:text-black transition-colors duration-300">close</button>
            <span class="material-symbols-outlined scale-200">sentiment_very_satisfied</span>
            <h2 class="text-5xl font-bold">Nice work!</h2>
            <p>Refresh for a new puzzle!</p>
          </section>
          <section class="triads hidden w-full flex flex-col gap-2 items-center justify-center"></section>
          <section class="wordgrid w-full grid grid-cols-3 gap-2 text-center">
            ${u(c)}
          </section>
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
  `,document.getElementById("shuffle").addEventListener("click",()=>{m(l([...c]))}),document.getElementById("submit").addEventListener("click",v),document.getElementById("close-btn").addEventListener("click",()=>{document.querySelector(".done").classList.add("animate-die"),setTimeout(()=>{document.querySelector(".done").classList.add("hidden")},300)})}document.querySelector(".wordgrid").addEventListener("click",e=>{const t=document.querySelectorAll(".selected");e.target.classList.contains("word")&&(e.target.classList.contains("selected")?e.target.classList.remove("selected"):t.length<3?e.target.classList.add("selected"):(t.forEach(s=>s.classList.add("animate-shake")),setTimeout(()=>{t.forEach(s=>s.classList.remove("animate-shake"))},500)))});function v(){const e=new Audio("complete.mp3"),t=Array.from(document.querySelectorAll(".selected")),s=Array.from(document.querySelectorAll(".selected")).map(n=>n.dataset.word),r=s.map(n=>{const i=c.find(f=>f.word===n);return i?i.connectionIndex:-1}),o=new Set(r).size===1;if(t.length===3)if(o){let n=c.filter(i=>s.includes(i.word));return c=c.filter(i=>!s.includes(i.word)),c.length===0&&(console.log("Well Done!"),document.querySelector(".wordgrid").classList.add("hidden"),setTimeout(()=>{e.volume=.5,e.play().catch(i=>{console.warn("Audio autoplay blocked:",i)}),document.querySelector(".done").classList.remove("hidden")},300),setTimeout(()=>{document.querySelector(".done").classList.remove("animate-exist")},800)),b(n),m(c),!0}else return t.forEach(n=>n.classList.add("animate-shake")),setTimeout(()=>{t.forEach(n=>n.classList.remove("animate-shake"))},500),t.forEach(n=>n.classList.remove("selected")),d(c),!1;else return t.forEach(n=>n.classList.add("animate-shake")),setTimeout(()=>{t.forEach(n=>n.classList.remove("animate-shake"))},500),t.forEach(n=>n.classList.remove("selected")),!1}d(c);
