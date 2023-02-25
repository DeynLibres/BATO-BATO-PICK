let choices = ['rock', 'hand', 'scissors'];
let images = {
  rock: 'rock.png',
  hand: 'hand.png',
  scissors: 'scissor.png',
};

let rock = document.getElementById('rock');
let hand = document.getElementById('hand');
let scissors = document.getElementById('scissors');
let playerChoice = document.getElementById('playerChoice');
let computerChoice = document.getElementById('computerChoice');
let result = document.getElementById('result');
let playerScore = document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore');

let playerScoreCount = 0;
let computerScoreCount = 0;



rock.addEventListener('click', function() {
  play('rock');
});

hand.addEventListener('click', function() {
  play('hand');
});

scissors.addEventListener('click', function() {
  play('scissors');
});

function play(pChoice) {
  const cChoice = choices[Math.floor(Math.random() * 3)];
  let outcome;

  playerChoice.src = images[pChoice];
  computerChoice.src = images[cChoice];

  if (pChoice == cChoice) {
    outcome = 'Tie!';

  } else if (
    (pChoice == 'rock' && cChoice == 'scissors') ||
    (pChoice == 'hand' && cChoice == 'rock') ||
    (pChoice == 'scissors' && cChoice == 'hand')
  ) {
    outcome = 'Player win!';
  } else {
    
    outcome = 'Computer wins!';
  }

  result.innerHTML = outcome;

  if(outcome == "Player win!"){
    playerScoreCount++;
    playerScore.innerHTML = playerScoreCount;
} else if(outcome == "Computer wins!"){
    computerScoreCount++;
    computerScore.innerHTML = computerScoreCount;
}

}






