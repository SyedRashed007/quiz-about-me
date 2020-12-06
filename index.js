// Packages
var readLineSync = require('readline-sync');
const chalk = require('chalk');

// Taking username and Score
var Score = 0;
var userName = readLineSync.question("What is your name? ");
console.log(chalk.red("Welcome ") + chalk.yellow(userName) +chalk.red(" To DO YOU KNOW Rashed? "));

// question and answer
function play(question , answer) {
  var userAnswer = readLineSync.question(question);

  if (userAnswer === answer){
    console.log("You are right!");
    Score = Score + 1;
  } else {
    console.log("You are wrong!");
    Score = Score - 1;
  }

  console.log("Current Score : " , Score );
  console.log("-----------------------------");
}

var questions = [{
  question: "Where do I live? ",
  answer: "hyderabad"
} , {
  question: "My favourite Dish? ",
  answer: "biryani"
} , {
  question: "What do I study? ",
  answer: "Computer Science Engineering"
}
];

for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("YAY! You SCORED: ", Score);