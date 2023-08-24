'use strict';

const randomNum = function () {
  return Math.floor(Math.random() * 20) + 1;
};

let secretNumber;
let currentScore = 20;
let highScore = 0;

const checkButton = document.querySelector('.btn.check');
const resetButton = document.querySelector('.btn.again');
const messageElement = document.querySelector('.message');
const userScoreElement = document.querySelector('.label-score .score');
const highScoreElement = document.querySelector('.highscore');

function displayMessage(message) {
  messageElement.textContent = message;
}

function displayScore(score) {
  userScoreElement.textContent = score;
}

function resetGame() {
  secretNumber = randomNum();
  currentScore = 20;
  displayMessage('Start guessing...');
  displayScore(currentScore);
  document.body.style.backgroundColor = '';
  checkButton.disabled = false;
}

resetButton.addEventListener('click', resetGame);

checkButton.addEventListener('click', function () {
  const guess = parseInt(document.querySelector('.guess').value);

  if (currentScore > 0) {
    if (guess === secretNumber) {
      displayMessage('You guessed it right!');
      document.body.style.backgroundColor = 'green';
      checkButton.disabled = true;

      if (currentScore > highScore) {
        highScore = currentScore;
        highScoreElement.textContent = highScore;
      }
    } else {
      const hint = guess > secretNumber ? 'Too high!' : 'Too low!';
      displayMessage(hint + ' Try again.');
      currentScore--;
      displayScore(currentScore);
    }
  } else {
    displayMessage('Game over! Try again.');
    checkButton.disabled = true;
  }
});

resetGame(); // Initial setup
