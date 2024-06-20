const readline = require ('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const min = 1;
const max = 100;
const target = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(`Guess a number between ${min} and ${max}`);

const askQuestion = () => {
    rl.question('Enter your guess: ', (input: string) => {
        const guess = parseInt(input, 10);

        if (isNaN(guess)) {
            console.log('Please enter a valid number.');
            askQuestion();
            return;
        }

        if (guess < target) {
            console.log('Too low!');
            askQuestion();
        } else if (guess > target) {
            console.log('Too high!');
            askQuestion();
        } else {
            console.log('Congratulations! You guessed it!');
            rl.close();
        }
    });
};

askQuestion();
