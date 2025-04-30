(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();let d=4;function a(){d>0&&(d--,p()),d===0&&(console.log("Game Over"),h())}function p(){const e=document.getElementById("counter");e.textContent="❌ ".repeat(d)}function h(){const e=document.querySelector(".triads");document.querySelector(".mistakes").innerHTML="",document.querySelector(".wordgrid").innerHTML="",document.querySelector(".buttons").innerHTML=`
    <p>Refresh for a new puzzle!</p>
  `,e&&(e.classList.replace("hidden","flex"),e.innerHTML=`
      <div class="flex flex-col items-center justify-center rounded-xl p-2 h-20 w-full text-xl border-4 animate-exist bg-amber-200 border-amber-200">
        <div class="font-bold">${n[0].connection}</div>
        <div class="italic">${n[0].word}, ${n[1].word}, ${n[2].word}</div>
      </div>
      <div class="flex flex-col items-center justify-center rounded-xl p-2 h-20 w-full text-xl border-4 animate-exist bg-rose-200 border-rose-200">
        <div class="font-bold">${n[3].connection}</div>
        <div class="italic">${n[3].word}, ${n[4].word}, ${n[5].word}</div>
      </div>
      <div class="flex flex-col items-center justify-center rounded-xl p-2 h-20 w-full text-xl border-4 animate-exist bg-emerald-200 border-emerald-200">
        <div class="font-bold">${n[6].connection}</div>
        <div class="italic">${n[6].word}, ${n[7].word}, ${n[8].word}</div>
      </div>
    `)}const g=[{connection:"Chris ___",words:["Evans","Hemsworth","Pratt"]},{connection:"Pizza Toppings",words:["Pepperoni","Mushrooms","Pineapple"]},{connection:"Jupiter's Moons",words:["Ganymede","Europa","Io"]}];function u(e){for(let o=e.length-1;o>0;o--){const r=Math.floor(Math.random()*(o+1));[e[o],e[r]]=[e[r],e[o]]}return e}const n=g.flatMap((e,o)=>e.words.map(r=>({word:r,connection:e.connection,connectionIndex:o})));let c=u([...n]);b();function f(e){return e.map(({word:o})=>`
    <button data-word="${o}" class="word">${o}</button>
  `).join("")}function m(e){const o=document.querySelector(".wordgrid");o&&(o.innerHTML=f(e))}function x(e){const o=document.querySelector(".triads");o&&(o.classList.replace("hidden","flex"),o.querySelectorAll("div").forEach(i=>i.classList.remove("animate-exist")),o.innerHTML+=`
      <div class="flex flex-col items-center justify-center rounded-xl p-2 h-20 w-full text-xl border-4 animate-exist
        ${e[0].connectionIndex===0?"bg-amber-200 border-amber-200":e[0].connectionIndex===1?"bg-rose-200 border-rose-200":e[0].connectionIndex===2?"bg-emerald-200 border-emerald-200":""}
      ">
        <div class="font-bold">${e[0].connection}</div>
        <div class="italic">${e.map(i=>i.word).join(", ")}</div>
      </div>
    `)}function b(){document.querySelector("#app").innerHTML=`
    <main class="relative w-dvw h-dvh bg-white flex flex-col items-center justify-center gap-7 font-primary">
      <section class="congrats hidden flex flex-col gap-4 items-center justify-center p-10 shadow-2xl bg-white animate-exist z-10">
        <h2 class="text-5xl font-bold">You did it!</h2>
        <p>Refresh for a new puzzle!</p>
      </section>
      <h1 class="text-7xl font-triad">Triads</h1>
      <h3>Create three groups of three!</h3>
      <section class="flex flex-col gap-2 items-center">
        <section class="triads hidden min-w-100 flex-col gap-2 items-center justify-center"></section>
        <section class="wordgrid grid grid-cols-3 gap-2 text-center">
          ${f(c)}
        </section>
        <section class="mistakes p-1">
          <span>Mistakes Remaining: </span><span id="counter"></span>
        </section>
        <section class="buttons flex gap-2">
          <button id="shuffle" class="py-3 px-5 rounded-xl uppercase border-1 border-black cursor-pointer hover:underline transition-all">Shuffle</button>
          <button id="submit" class="py-3 px-5 rounded-xl uppercase border-1 border-black cursor-pointer hover:underline transition-all">Submit</button>
        </section>
      </section>
    </main>
  `,document.getElementById("shuffle").addEventListener("click",()=>{m(u([...c]))}),document.getElementById("submit").addEventListener("click",v),console.log(n)}document.querySelector(".wordgrid").addEventListener("click",e=>{const o=document.querySelectorAll(".selected");e.target.classList.contains("word")&&(e.target.classList.contains("selected")?e.target.classList.remove("selected"):o.length<3?e.target.classList.add("selected"):(o.forEach(r=>r.classList.add("animate-shake")),setTimeout(()=>{o.forEach(r=>r.classList.remove("animate-shake"))},500)))});function v(){const e=Array.from(document.querySelectorAll(".selected")),o=Array.from(document.querySelectorAll(".selected")).map(t=>t.dataset.word),r=o.map(t=>{const s=n.find(l=>l.word===t);return s?s.connectionIndex:-1}),i=new Set(r).size===1;if(e.length===3)if(i){let t=c.filter(s=>o.includes(s.word));return c=c.filter(s=>!o.includes(s.word)),c.length===0&&(console.log("Well Done!"),document.querySelector(".wordgrid").classList.replace("grid","hidden"),document.querySelector(".congrats").classList.replace("hidden","absolute")),x(t),m(c),!0}else return e.forEach(t=>t.classList.add("animate-shake")),setTimeout(()=>{e.forEach(t=>t.classList.remove("animate-shake"))},500),e.forEach(t=>t.classList.remove("selected")),a(),!1;else return e.forEach(t=>t.classList.add("animate-shake")),setTimeout(()=>{e.forEach(t=>t.classList.remove("animate-shake"))},500),e.forEach(t=>t.classList.remove("selected")),!1}a();
