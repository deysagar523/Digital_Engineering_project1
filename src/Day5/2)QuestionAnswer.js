// 2. given a set of questions and answers in two different arrays. prepare a quiz. ask each question and take the answer in a prompt. if the answer is correct then increase the score by 1. if answer is incorrect then score remains same. display the final score in an alert.

question = [
  "What is ReactJS?",
  "Who created React.js?",
  "In which language is React.js written?",
  "A state in React.js is also known as?",
  "Which of the following is used in React.js to increase performance?",
];

answers = [
  "JS library",
  "Jordan Walke",
  "JavaScript",
  "The internal storage of the component",
  "Virtual DOM",
];

executeFunction();
function executeFunction() {
  var finalScore = 0;
  for (let i = 0; i < question.length; i++) {
    var ans = prompt(question[i]);
    
    if (ans.toLowerCase() === answers[i].toLowerCase()) {
      finalScore++;
    }
  }
  alert("Your final score is "+finalScore);
}
