import React, {useState, useContext} from 'react'
import {Question} from "../Helpers/QuestionBank"
import { QuizContext } from '../Helpers/Contexts'
import EndScreen from './EndScreen'

function Quiz() {
  const {score ,setScore, setGameState} = useContext(QuizContext)

  const [currQuestion, setCurrQuestion] = useState(0)
  const [optionChosen, setOptionChosen] = useState("")

  const nextQuestion= ()=>{
    if(Question[currQuestion].answer==optionChosen){
      setScore(score+1);
    }
    setCurrQuestion(currQuestion+1)
  }

  const finishQuiz = ()=> {
    if(Question[currQuestion].answer==optionChosen){
      setScore(score+1);
    }
    setGameState("endScreen")
  }
  return (
    <div className='Quiz'>
      <h1> {Question[currQuestion].prompt}</h1>
      <div className='options'>
        
      <button className="btn" onClick={()=> setOptionChosen("A")}> {Question[currQuestion].optionA} </button>
      <button className="btn" onClick={()=> setOptionChosen("B")}> {Question[currQuestion].optionB} </button>
      <button className="btn" onClick={()=> setOptionChosen("C")}> {Question[currQuestion].optionC} </button>
      <button className="btn" onClick={()=> setOptionChosen("D")}> {Question[currQuestion].optionD} </button>
      </div>

    {currQuestion == Question.length - 1 ? <button className='lastbtn' onClick={ finishQuiz}> Finish Quiz </button>: <button className='lastbtn' onClick={nextQuestion}> Next Question </button>}
    </div>
  )
}

export default Quiz