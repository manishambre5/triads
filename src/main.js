import './style.css'
import { mistakesCounter } from './counter.js'

const dictionary = [
  {
    "connection": "Chris ___",
    "words": ["Evans","Hemsworth","Pratt"]
  },
  {
    "connection": "Pizza Toppings",
    "words": ["Pepperoni","Mushrooms","Pineapple"]
  },
  {
    "connection": "Jupiter's Moons",
    "words": ["Ganymede","Europa","Io"]
  },
];

// Fisher-Yates algorithm to shuffle the array...
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Combining the words with their connection index into a single array...
export const puzzleWords = dictionary.flatMap((item, connectionIndex) => 
  item.words.map(word => ({ word:word, connection:item.connection, connectionIndex })));

// Shuffling the puzzleWords elements...
let shuffledWords = shuffleArray([...puzzleWords]);

renderPuzzlePage();

// For rendering the Puzzle...
function renderPuzzle(shuffledWords) {
  return shuffledWords.map(({word}) => `
    <button data-word="${word}" class="word">${word}</button>
  `).join('');
}

// For DOM updates after every correct triad submission...
function updatePuzzleGrid(shuffledWords) {
  const grid = document.querySelector('.wordgrid');
  if (grid) grid.innerHTML = renderPuzzle(shuffledWords);
}

function updateFoundTriads(foundTriad) {
  const row = document.querySelector('.triads');
  if (row) {
    row.classList.replace('hidden','flex');

    // Remove the 'animate-exist' class from all existing divs
    const existingDivs = row.querySelectorAll('div');
    existingDivs.forEach(div => div.classList.remove('animate-exist'));

    row.innerHTML += `
      <div class="flex flex-col items-center justify-center rounded-xl p-2 h-20 w-full text-xl border-4 animate-exist
        ${
          foundTriad[0].connectionIndex === 0 ? 'bg-amber-200 border-amber-200' :
          foundTriad[0].connectionIndex === 1 ? 'bg-rose-200 border-rose-200' :
          foundTriad[0].connectionIndex === 2 ? 'bg-emerald-200 border-emerald-200' :
          ''
        }
      ">
        <div class="font-bold">${foundTriad[0].connection}</div>
        <div class="italic">${foundTriad.map(words => words.word).join(', ')}</div>
      </div>
    `;
  }
}

// Initial render...
function renderPuzzlePage() {
  document.querySelector('#app').innerHTML = `
    <main class="relative w-dvw h-dvh bg-white flex flex-col items-center justify-center gap-7">
      <section class="congrats hidden flex flex-col gap-4 items-center justify-center p-10 shadow-2xl bg-white animate-exist z-10">
        <h2 class="text-5xl font-bold">You did it!</h2>
        <p>Refresh for a new puzzle!</p>
      </section>
      <h1 class="text-7xl">Triads</h1>
      <h3>Create three groups of three!</h3>
      <section class="flex flex-col gap-2 items-center">
        <section class="triads hidden min-w-100 flex-col gap-2 items-center justify-center"></section>
        <section class="wordgrid grid grid-cols-3 gap-2 text-center">
          ${renderPuzzle(shuffledWords)}
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
  `;
  document.getElementById('shuffle').addEventListener('click', () => {
    updatePuzzleGrid(shuffleArray([...shuffledWords]));
  });
  document.getElementById('submit').addEventListener('click', checkTriad);
  console.log(puzzleWords);
}

// Allowing maximum of 3 words to be selected
document.querySelector('.wordgrid').addEventListener('click', (e) => {
  const selectedButtons = document.querySelectorAll('.selected');
  if (e.target.classList.contains('word')) {
    if (e.target.classList.contains('selected')) {
      e.target.classList.remove('selected');
    } else {
      if (selectedButtons.length < 3) {
        e.target.classList.add('selected');
      } else {
        // trigger animation to indicate wrong answer...
        selectedButtons.forEach(button => button.classList.add('animate-shake'));
        setTimeout(() => {
          selectedButtons.forEach(button => button.classList.remove('animate-shake'));
        }, 500);
      }
    }
  }
});

// Checking whether selected triad is correct...
function checkTriad() {
  // Getting selected words upon Submit...
  const selectedButtons = Array.from(document.querySelectorAll('.selected'));
  const submittedWords = Array.from(document.querySelectorAll('.selected')).map(button => button.dataset.word);

  // Fetching connectionIndex for selected words...
  const connectionIndices = submittedWords.map(word => {
    const found = puzzleWords.find(item => item.word === word);
    return found ? found.connectionIndex : -1;
  });

  // Check if all indices are the same
  const allSameConnection = new Set(connectionIndices).size === 1;
  
  if (selectedButtons.length === 3) {
    if (allSameConnection) {
      //const connectionIndex = connectionIndices[0];
      //console.log(`Correct! All words belong to: ${dictionary[connectionIndex].connection}`);

      //selectedButtons.forEach(button => {
        //button.disabled = true;
        //button.classList.remove('selected');
      //});

      // Remove selected words from shuffledWords
      let foundTriad = shuffledWords.filter(wordObj => 
        submittedWords.includes(wordObj.word)
      );
      shuffledWords = shuffledWords.filter(wordObj => 
        !submittedWords.includes(wordObj.word)
      );

      //console.log(shuffledWords);
      if(shuffledWords.length === 0) {
        console.log("Well Done!");
        document.querySelector('.wordgrid').classList.replace('grid','hidden');
        document.querySelector('.congrats').classList.replace('hidden','absolute');
      }
      updateFoundTriads(foundTriad);
      updatePuzzleGrid(shuffledWords);
      return true;
    } else {
      // trigger animation to indicate wrong answer...
      selectedButtons.forEach(button => button.classList.add('animate-shake'));
      setTimeout(() => {
        selectedButtons.forEach(button => button.classList.remove('animate-shake'));
      }, 500);
      // clear selection...
      selectedButtons.forEach(button => button.classList.remove('selected'));
      //console.log("These words aren't related.");
      mistakesCounter();
      return false;
    }
  } else {
    // trigger animation to indicate inadequate word selection...
    selectedButtons.forEach(button => button.classList.add('animate-shake'));
    setTimeout(() => {
      selectedButtons.forEach(button => button.classList.remove('animate-shake'));
    }, 500);
    // clear selection...
    selectedButtons.forEach(button => button.classList.remove('selected'));
    //console.log("Please select atleast 3 words.");
    return false;
  }
}


mistakesCounter();