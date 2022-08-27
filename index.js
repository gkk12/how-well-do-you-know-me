var readlineSync = require("readline-sync");
questionOne = {
  question: "Who is my favorite superhero? ",
  answer: "Ironman"
}

questionTwo = {
  question: "Which is my favorite song? ",
  answer: "Slow Motion"
}

questionThree = {
  question: "What is the name of the city I live in Germany? ",
  answer: "Heilbronn"
}

questionFour = {
  question: "Which city was I born in India? ",
  answer: "Mangalore"
}

questionFive = {
  question: "Which field am I pursuing my Masters in Germany ",
  answer: "Software Engineering"
}

var scores = [
  {
    name: "Gautham",
    highestScore: "5"
  },
  {
    name: "Sam",
    highestScore: "4"
  }
]

var score = 0;

function checkCorrectness(questionToAsk, answer) {
  var userAnswer = readlineSync.question(questionToAsk);

  if (userAnswer.toUpperCase() == answer.toUpperCase()) {
    console.log("You are right");
    score = score + 1;
  }
  else {
    console.log("You are wrong. It is " + answer);
  }
  console.log("Your score is: " + score);
}

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

var username = readlineSync.question("Enter your name: ");

for (var i = 0; i < questions.length; i++) {
  //console.log("Entered for loop");
  checkCorrectness(questions[i].question, questions[i].answer);
}

console.log("High Scores-");
var highestScore = getHighScore();

function getHighScore() {
  var topScore = 0;
  for (var j = 0; j < scores.length; j++) {
    console.log(scores[j].name, ":", scores[j].highestScore)
    topScore = checkIfHighScoreBeaten(topScore, scores[j].highestScore);
  }
  return topScore;
}

function checkIfHighScoreBeaten(topScore, currentScore) {
  if (topScore < currentScore) {
    topScore = currentScore;
  }
  return topScore;
}

if (score >= highestScore) {
  console.log("Congrats " + username + " , you have equalled the highest score. Kindly send a screenshot of the same to the admin");
}


