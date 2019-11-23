const coinArray = ['Heads', 'Tails'];
let score = [0, 0];
const message = document.querySelector('.message');
const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', tossCoin);
}

function tossCoin(e) {
let playerGuess =e.target.innerText;
let computerToss =Math.floor(Math.random() * coinArray.length);
let computerGuess = coinArray[computerToss];
let output;

if(playerGuess === computerGuess) {
    output = 'You Won';
    score[0]++;
} else {
    output = 'Computer Won';
    score[1]++
}
message.innerHTML = 'Computer Selected - ' + ' ' + computerGuess + '<br>' + output + '<br> Player' + ' ' + score[0] + ' ' + 'Computer' + ' ' + score[1];

}

