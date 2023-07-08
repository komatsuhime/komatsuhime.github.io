const body = document.querySelector('body');
let answer = false;
let turn = 0;
let guess = [];
let sum = 0;

let numbers = [[1,3,5,7,9],[2,3,6,7,10],[4,5,6,7,12],[8,9,10,11,12]];

function showNumbers(turn){
  for (let i = 0; i < 5; i++) {
        document.getElementById(`n${i}`).innerHTML = numbers[turn][i];
  }
};

function guessNumber(turn){
  if (answer == true) {
    guess.push(numbers[turn][0]);
    sum = guess.reduce((a, b) => a + b, 0);
    document.getElementById('question').innerHTML = "Reading your mind..."
  }
}

document.getElementById('start').onclick = function() {
  document.getElementById('question').innerHTML = "Is your number among these?";
  showNumbers(turn);
};

document.getElementById('yes').onclick = function() {
  answer = true;
  guessNumber(turn);
  if (turn === (numbers.length - 1) ) {
    document.getElementById('question').innerHTML = "Your number is..." + sum;
  } else {
    showNumbers(++turn);
  }
};

document.getElementById('no').onclick = function() {
  answer = false;
  guessNumber(turn);
  if (turn === numbers.length - 1) {
    document.getElementById('question').innerHTML = "Your number is..." + sum;
  } else {
    showNumbers(++turn);
  }
};

