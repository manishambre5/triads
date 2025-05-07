let mistakesLeft = 4;

export function mistakesCounter(shuffledWords) {
  if (mistakesLeft > 0) {
    mistakesLeft--;
    updateMistakesLeft();
  }
  if (mistakesLeft === 0) {
    console.log("Game Over");
    solvePuzzle(shuffledWords);
  }
}

function updateMistakesLeft() {
  const mistakesSpan = document.getElementById('counter');
  mistakesSpan.textContent = 'close'.repeat(mistakesLeft);
  if (mistakesLeft === 1) {
    // trigger animation to indicate only one chance left...
    document.getElementById('counter').classList.add('animate-bounce');
    
  }
}

function solvePuzzle(shuffledWords) {
  const solution = document.querySelector('.triads');

  // Cleaning up UI
  document.querySelector('.triads').innerHTML = ``;
  document.querySelector('.wordgrid').innerHTML = ``;
  document.querySelector('.mistakes').classList.add('hidden');
  document.querySelector('.buttons').innerHTML = `
    <section class="flex flex-col items-center justify-center gap-4">
      <span class="material-symbols-outlined scale-200">sentiment_very_dissatisfied</span>
      <h2 class="text-2xl">Try Again Next Time</h2>
      <p>Refresh for a new puzzle!</p>
    </section>
  `;

  // Revealing puzzle solution
  if (solution) {
    solution.classList.replace('hidden','flex');
    
    const colors = [
      'bg-amber-200 border-amber-200',
      'bg-rose-200 border-rose-200',
      'bg-emerald-200 border-emerald-200'
    ];
    for (let i = 0; i < shuffledWords.length; i++) {
        solution.innerHTML += `
        <div class="flex flex-col items-center justify-center rounded-xl p-2 h-20 w-full text-xl border-4 animate-exist ${colors[i]}">
          <div class="font-bold">${shuffledWords[i].connection}</div>
          <div class="italic">${shuffledWords[i].words[0]}, ${shuffledWords[i].words[1]}, ${shuffledWords[i].words[2]}</div>
        </div>`;
    }
  }
}