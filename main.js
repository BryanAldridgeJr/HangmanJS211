const readline = require('readline');


let guessedLetters = [];
const word = "codecademy"

function displayWord() {
    let display = '';
    for (const letter of word) {
      if(guessedLetters.includes(letter)) {
        display += letter;
      } else {
        display += '_';
      }
    }
    return display;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion() {
  rl.question('Guess a letter: ', (answer) => {
      guessedLetters.push(answer);

      console.log(displayWord());

      if(displayWord().includes('_')) {
          askQuestion();
      } else {
          console.log('Congratulations, you guessed the word!');
          rl.close();
      }
  });
}

askQuestion();