import { QuizContext } from "../Helpers/Contexts";
import React, { useContext } from "react";
import "../App.css";
import { Question } from "../Helpers/QuestionBank";

function EndScreen() {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const restartQuiz= ()=>{
    setScore(0)
    setGameState("menu")
  }
  return (
    <div className="EndScreen">
      <h1> Quiz finished</h1>
      <h3>
        {score} / {Question.length}
      </h3>
      <button className="btn" onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default EndScreen;
