import React, {useEffect, useState} from 'react'
import Question from './Question'
import Stopwatch from "./Stopwatch";
import QuizHeader from './QuizHeader'
import QuestionFeedback from "./QuestionFeedback";
import {useSelector} from "react-redux";

const Quiz = ({setShowResult}) => {
  const currentQuestion = useSelector(state=>state.currentQuestion)
  const [showFeedback,setShowFeedback] = useState(false)
  useEffect(()=>{
  },[])

  return <div className="d-flex flex-column card border border-muted rounded mt-5 bg-light w-50">
    <QuizHeader />
    {!showFeedback && <Question setShowFeedback={setShowFeedback}/>}
    {showFeedback && <QuestionFeedback setShowFeedback={setShowFeedback} setShowResult={setShowResult}/> }
  </div>
}

export default Quiz