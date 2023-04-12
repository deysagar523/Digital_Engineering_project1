import React, { useState, useEffect } from "react";

const QuestionAnswerFunc = () => {
  const [finalScore, setFinalScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [index, setIndex] = useState(0);
  const question = [
    "What is ReactJS?",
    "Who created React.js?",
    "In which language is React.js written?",
    "A state in React.js is also known as?",
    "Which of the following is used in React.js to increase performance?",
  ];

  const answers = [
    "JS library",
    "Jordan Walke",
    "JavaScript",
    "The internal storage of the component",
    "Virtual DOM",
  ];

  const clickHandler = (ind, q, len) => {
    const ans = prompt(q);
    if (ans.toLowerCase() === answers[ind].toLowerCase()) {
      setFinalScore(finalScore + 1);
    }
    setIndex(index + 1);
    if (ind === len - 1) {
      setShowScore(true);
    }
  };

  const startQuizHandler = () => {
    setIndex(0);
    setShowScore(false);
    setFinalScore(0);
  };
  return (
    <>
      {/* {question.map((q, ind) => {
        return (
          <button
            onClick={() => {
              clickHandler(ind, q,question.length);
            }}
          >
            Question{ind + 1}
          </button>
        );
      })} */}
      {!showScore && (
        <button
          onClick={() => {
            clickHandler(index, question[index], question.length);
          }}
          style={{ margin: "25% auto", display: " block", width: "200px" }}
        >
          Question{index + 1}
        </button>
      )}
      {showScore && (
        <>
          <h1>Final Score is {finalScore}</h1>
          <button onClick={startQuizHandler}>Start Quiz Again</button>
        </>
      )}
    </>
  );
};
export default QuestionAnswerFunc;
