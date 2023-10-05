'use strict';
/*
console.log(document.querySelector('.message').textContent); 

console.log(document.querySelector('.message').textContent = 'Correct Number');

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent = secretNumber;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // when there is no input
    if(!guess){
        // document.querySelector('.message').textContent =  '⛔ No Number';
        displayMessage('⛔ No Number');
    }

    // when player wins
    else if(guess === secretNumber){
        // document.querySelector('.message').textContent =  '🥳 Correct Number';
        displayMessage('🎉 Correct Number');
        // document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';


        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    // refactoring the code
    // when guess is wrong
    else if(guess !== secretNumber){
        if(score > 1){
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 To high' : '📈 To Low';
            displayMessage(guess > secretNumber ? '📈 To High!' : '📈 To Low!');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            // document.querySelector('.message').textContent =  '🎆 You lost the game';
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
    /*
    // when guess is to high
    else if(guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent =  '📈 To high';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent =  '🎆 You lost the game';
            document.querySelector('.score').textContent = 0;
        }

    }

    // when guess is to low
    else if(guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent =  '📈 To Low';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent =  '🎆 You lost the game';
            document.querySelector('.score').textContent = 0;
        }
        // document.querySelector('.message').textContent =  '📉 To Low';
        // score--;
        // document.querySelector('.score').textContent = score;
    }
    */
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15em';
});