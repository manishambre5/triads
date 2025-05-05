(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();let a=4;function l(e){a>0&&(a--,h()),a===0&&(console.log("Game Over"),w(e))}function h(){const e=document.getElementById("counter");e.textContent="close".repeat(a),a===1&&document.getElementById("counter").classList.add("animate-bounce")}function w(e){const n=document.querySelector(".triads");document.querySelector(".wordgrid").innerHTML="",document.querySelector(".mistakes").classList.add("hidden"),document.querySelector(".buttons").innerHTML=`
    <section class="flex flex-col items-center justify-center gap-4">
      <span class="material-symbols-outlined scale-200">sentiment_very_dissatisfied</span>
      <h2 class="text-2xl">Try Again Next Time</h2>
      <p>Refresh for a new puzzle!</p>
    </section>
  `,n&&(n.classList.replace("hidden","flex"),n.innerHTML=`
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
    `)}const p=[{connection:"Chris ___",words:["Evans","Hemsworth","Pratt"]},{connection:"Pizza Toppings",words:["Pepperoni","Mushrooms","Pineapple"]},{connection:"Jupiter's Moons",words:["Ganymede","Europa","Io"]},{connection:"Shades of Blue",words:["Navy","Sky","Indigo"]},{connection:"Big Cats",words:["Tiger","Jaguar","Puma"]},{connection:"Cheese",words:["Cheddar","Feta","Ricotta"]},{connection:"Fungi",words:["Yeast","Mushrooms","Mold"]},{connection:"Fermented beverages",words:["Kvass","Kefir","Boza"]},{connection:"Poem forms",words:["Haiku","Sonnet","Limerick"]},{connection:"Musical Instruments",words:["Ukulele","Mandolin","Banjo"]},{connection:"Kitchen tools",words:["Whisk","Tongs","Mandoline"]},{connection:"Financial Documents",words:["Ledger","Invoice","Receipt"]},{connection:"King",words:["Pharaoh","Sultan","Maharaja"]},{connection:"Ancient Supercontinents",words:["Pangea","Gondwana","Tethys"]},{connection:"River Systems of Asia",words:["Yangtze","Indus","Mekong"]},{connection:"Mountains",words:["Kilimanjaro","Matterhorn","Annapurna"]},{connection:"Mountain Ranges",words:["Andes","Rocky","Alps"]},{connection:"African Languages",words:["Swahili","Hausa","Xhosa"]},{connection:"Made of Carbon",words:["Glucose","Ethanol","Diamond"]},{connection:"Saturn's Moons",words:["Rhea","Titan","Mimas"]},{connection:"Linux Distributions",words:["Ubuntu","Debian","Fedora"]},{connection:"Herbs",words:["Thyme","Basil","Rosemary"]},{connection:"Flatbreads",words:["Naan","Tortilla","Pita"]},{connection:"Revolutionaries",words:["Che","Thomas","Rosa"]},{connection:"Catch a ___",words:["Breath","Break","Glimpse"]},{connection:"Take the ___",words:["Bait","Cake","Beating"]},{connection:"Hit the ___",words:["Sack","Road","Roof"]},{connection:"Off the ___",words:["Charts","Cuff","Hook"]},{connection:"Last night was ___",words:["Wild","Crazy","Insane"]},{connection:"A piece of ___",words:["Cake","Work","Me"]},{connection:"God of Thunder",words:["Thor","Zeus","Indra"]},{connection:"Ancient Geographical Regions",words:["Persia","Nubia","Mesopotamia"]},{connection:"Types of Bears",words:["Grizzly","Panda","Polar"]},{connection:"Musketeers",words:["Athos","Porthos","Aramis"]},{connection:"The Beatles",words:["Paul","John","George"]},{connection:"Programming Languages",words:["Cobalt","Python","Ruby"]},{connection:"World Currencies",words:["Yuan","Yen","Sterling"]},{connection:"Dog Breeds",words:["Beagle","Poodle","Labrador"]},{connection:"Bones in the Body",words:["Femur","Skull","Rib"]},{connection:"Fictional Detectives",words:["Sherlock","Poirot","Marple"]},{connection:"Types of Poems",words:["Ode","Elegy","Ballad"]},{connection:"Romance Languages",words:["Spanish","French","Romanian"]},{connection:"Latin American Countries",words:["Cuba","Chile","Peru"]},{connection:"Insects",words:["Ant","Bee","Wasp"]},{connection:"Trees",words:["Oak","Pine","Maple"]},{connection:"Types of Pasta",words:["Spaghetti","Fusilli","Penne"]},{connection:"Elements from the Periodic Table",words:["Neon","Argon","Carbon"]},{connection:"Birds",words:["Flamingo","Sparrow","Penguin"]},{connection:"Scientists",words:["Newton","Einstein","Curie"]},{connection:"Astronomers",words:["Kepler","Galileo","Copernicus"]},{connection:"Mathematicians",words:["Aryabhatta","Turing","Archimedes"]},{connection:"Biologists",words:["Darwin","Fleming","Mendel"]},{connection:"Engineers",words:["Tesla","Wright","da Vinci"]},{connection:"Video Game Characters",words:["Mario","Kratos","Sonic"]},{connection:"Synonyms for 'Fast'",words:["Quick","Rapid","Speedy"]},{connection:"Slang for 'Money'",words:["Dough","Bread","Cheddar"]},{connection:"Hang ___",words:["Out","Tight","On"]},{connection:"Very Tired",words:["Exhausted","Wiped","Drained"]},{connection:"In a ___",words:["Bind","Jam","Pickle"]},{connection:"Leave Quickly",words:["Bounce","Dip","Scram"]},{connection:"Happy",words:["Joyous","Elated","Ecstatic"]},{connection:"Cool",words:["Dope","Lit","Sick"]},{connection:"Angry",words:["Pissed","Livid","Steamed"]},{connection:"A Friend",words:["Buddy","Pal","Homie"]},{connection:"Drop the ___",words:["Ball","Mic","Act"]},{connection:"Under the ___",words:["Weather","Radar","Table"]}];function d(e){for(let n=e.length-1;n>0;n--){const s=Math.floor(Math.random()*(n+1));[e[n],e[s]]=[e[s],e[n]]}return e}const g=d([...p]).slice(0,3);let c=d(g.flatMap((e,n)=>e.words.map(s=>({word:s,connection:e.connection,connectionIndex:n}))));console.log(c);b();function u(e){return e.map(({word:n})=>`
    <button data-word="${n}" class="word">${n}</button>
  `).join("")}function m(e){const n=document.querySelector(".wordgrid");n&&(n.innerHTML=u(e))}function y(e){const n=document.querySelector(".triads");n&&(n.classList.remove("hidden"),n.querySelectorAll("div").forEach(r=>r.classList.remove("animate-exist")),n.innerHTML+=`
      <div class="flex flex-col items-center justify-center rounded-xl p-2 h-24 w-full text-xl border-4 animate-exist
        ${e[0].connectionIndex===0?"bg-amber-200 border-amber-200":e[0].connectionIndex===1?"bg-rose-200 border-rose-200":e[0].connectionIndex===2?"bg-emerald-200 border-emerald-200":""}
      ">
        <div class="font-bold">${e[0].connection}</div>
        <div class="italic">${e.map(r=>r.word).join(", ")}</div>
      </div>
    `)}function b(){document.querySelector("#app").innerHTML=`
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
  `,document.getElementById("shuffle").addEventListener("click",()=>{m(d([...c]))}),document.getElementById("submit").addEventListener("click",x),document.getElementById("close-btn").addEventListener("click",()=>{document.querySelector(".done").classList.add("animate-die"),setTimeout(()=>{document.querySelector(".done").classList.add("hidden")},300)})}document.querySelector(".wordgrid").addEventListener("click",e=>{const n=document.querySelectorAll(".selected");e.target.classList.contains("word")&&(e.target.classList.contains("selected")?e.target.classList.remove("selected"):n.length<3?e.target.classList.add("selected"):(n.forEach(s=>s.classList.add("animate-shake")),setTimeout(()=>{n.forEach(s=>s.classList.remove("animate-shake"))},500)))});function x(){const e=new Audio("complete.mp3"),n=Array.from(document.querySelectorAll(".selected")),s=Array.from(document.querySelectorAll(".selected")).map(o=>o.dataset.word),r=s.map(o=>{const i=c.find(f=>f.word===o);return i?i.connectionIndex:-1}),t=new Set(r).size===1;if(n.length===3)if(t){let o=c.filter(i=>s.includes(i.word));return c=c.filter(i=>!s.includes(i.word)),c.length===0&&(console.log("Well Done!"),document.querySelector(".wordgrid").classList.add("hidden"),setTimeout(()=>{e.volume=.5,e.play().catch(i=>{console.warn("Audio autoplay blocked:",i)}),document.querySelector(".done").classList.remove("hidden")},300),setTimeout(()=>{document.querySelector(".done").classList.remove("animate-exist")},800)),y(o),m(c),!0}else return n.forEach(o=>o.classList.add("animate-shake")),setTimeout(()=>{n.forEach(o=>o.classList.remove("animate-shake"))},500),n.forEach(o=>o.classList.remove("selected")),l(c),!1;else return n.forEach(o=>o.classList.add("animate-shake")),setTimeout(()=>{n.forEach(o=>o.classList.remove("animate-shake"))},500),n.forEach(o=>o.classList.remove("selected")),!1}l(c);
