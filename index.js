var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var min = 1;
var max = 100;
var target = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("Guess a number between ".concat(min, " and ").concat(max));
var askQuestion = function () {
    rl.question('Enter your guess: ', function (input) {
        var guess = parseInt(input, 10);
        if (isNaN(guess)) {
            console.log('Please enter a valid number.');
            askQuestion();
            return;
        }
        if (guess < target) {
            console.log('Too low!');
            askQuestion();
        }
        else if (guess > target) {
            console.log('Too high!');
            askQuestion();
        }
        else {
            console.log('Congratulations! You guessed it!');
            rl.close();
        }
    });
};
askQuestion();
