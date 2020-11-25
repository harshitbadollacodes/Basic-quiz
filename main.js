var readLineSync = require('readline-sync');

var userName = readLineSync.question('What\'s your name?');
console.log(`Hi ${userName}. Let's see how well do you know me.`);

var score = 0;

function play(question, answer) {
  var userAnswer = readLineSync.question(question);

  if(userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log('You are right!');
    score++;
    console.log(`Current score: ${score}`);
    console.log('-------');
  } else {
    console.log('You are wrong!');
    console.log('-------');
  }
};

// Array of objects
var questionsArr = [{
  question: 'Where do i live?',
  answer: 'Chennai',
}, {
  question: 'My favorite superhero would be? ',
  answer: 'Rajnikanth',
}];

// loop
questionsArr.forEach((q) => {
  play(q.question, q.answer);
});

// Final Score
console.log(`Yayy!! You SCORED: ${score}`);