import { puzzleWords } from './main.js';

let mistakesLeft = 4;

export function mistakesCounter() {
  if (mistakesLeft > 0) {
    mistakesLeft--;
    updateMistakesLeft();
  }
  if (mistakesLeft === 0) {
    console.log("Game Over");
    solvePuzzle();
  }
}

function updateMistakesLeft() {
  const mistakesSpan = document.getElementById('counter');
  mistakesSpan.textContent = '❌ '.repeat(mistakesLeft);
}

function solvePuzzle() {
  const solution = document.querySelector('.triads');
  document.querySelector('.mistakes').innerHTML = ``;
  document.querySelector('.wordgrid').innerHTML = ``;
  document.querySelector('.buttons').innerHTML = `
    <p>Refresh for a new puzzle!</p>
  `;

  if (solution) {
    solution.classList.replace('hidden','flex');
    solution.innerHTML = `
      <div class="flex flex-col items-center justify-center rounded-xl p-2 h-20 w-full text-xl border-4 animate-exist bg-amber-200 border-amber-200">
        <div class="font-bold">${puzzleWords[0].connection}</div>
        <div class="italic">${puzzleWords[0].word}, ${puzzleWords[1].word}, ${puzzleWords[2].word}</div>
      </div>
      <div class="flex flex-col items-center justify-center rounded-xl p-2 h-20 w-full text-xl border-4 animate-exist bg-rose-200 border-rose-200">
        <div class="font-bold">${puzzleWords[3].connection}</div>
        <div class="italic">${puzzleWords[3].word}, ${puzzleWords[4].word}, ${puzzleWords[5].word}</div>
      </div>
      <div class="flex flex-col items-center justify-center rounded-xl p-2 h-20 w-full text-xl border-4 animate-exist bg-emerald-200 border-emerald-200">
        <div class="font-bold">${puzzleWords[6].connection}</div>
        <div class="italic">${puzzleWords[6].word}, ${puzzleWords[7].word}, ${puzzleWords[8].word}</div>
      </div>
    `;
  }
}