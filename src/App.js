import "./App.css";
import { useState, useContext } from "react";
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import { QuizContext } from "./Helpers/Contexts";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <QuizContext.Provider value={{gameState, setGameState, score ,setScore}}>
        <h1> Quiz App </h1>
        {gameState === "menu" && <MainMenu></MainMenu>}
        {gameState === "quiz" && <Quiz></Quiz>}
        {gameState === "endScreen" && <EndScreen></EndScreen>}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
