'use strict';
let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');
let diceEl = document.querySelector('.dice');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');

let scores, activePlayer, curentScore, allow;
let initial = function () {
  scores = [0, 0];
  activePlayer = 0;
  curentScore = 0;
  allow = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  document.querySelector(`.player--${0}`).classList.add('player--active');
  document.querySelector(`.player--${1}`).classList.remove('player--active');

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  diceEl.classList.add('hidden');
};

initial();

let switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  curentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (allow) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      curentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        curentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (allow) {
    scores[activePlayer] += curentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      allow = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', initial);

// score0El.textContent = 0;
// score1El.textContent = 0;

// let scores = [0, 0];
// let score = 0;
// let currentScore = 0;
// let activePlayer = 0;

// diceEl.classList.add('hidden');
// btnRoll.addEventListener('click', function () {
//   diceEl.classList.remove('hidden');
//   let num = Math.trunc(Math.random() * 6) + 1;
//   diceEl.src = `dice-${num}.png`;
//   if (num !== 1) {
//     currentScore += num;
//     document.getElementById(`current--${activePlayer}`).textContent =
//       currentScore;
//     scores[activePlayer] = currentScore;
//     // score0El.textContent = scores[activePlayer];
//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];
//     // current0El.textContent = currentScore;
//   } else {
//     document
//       .querySelector(`.player--${activePlayer}`)
//       .classList.remove('player--active');
//     currentScore = 0;
//     document.getElementById(`current--${activePlayer}`).textContent = 0;
//     activePlayer = activePlayer === 0 ? 1 : 0;
//     document.getElementById(`current--${activePlayer}`).textContent =
//       currentScore;
//     document
//       .querySelector(`.player--${activePlayer}`)
//       .classList.add('player--active');
//     // player0.classList.remove('player--active');
//     // player1.classList.add('player--active');
//   }
// });

// falsef
// falseff
// falseff
// false
// false
// falsef
// false
// falsef
// falseff

// falsef

// false
