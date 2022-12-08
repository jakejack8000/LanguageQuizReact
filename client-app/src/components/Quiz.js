import React, {useEffect, useState} from 'react'
import Question from './Question'
import Stopwatch from "./Stopwatch";
import QuizHeader from './QuizHeader'
import QuestionFeedback from "./QuestionFeedback";
import LoadingSpinner from "./LoadingSpinner";
import {useSelector,useDispatch} from "react-redux";
import {INIT_QUIZ} from "../store/quizSlice";

const Quiz = ({setScreen}) => {
  const [isLoading,setIsLoading] = useState(true)
  const dispatch = useDispatch()
  const [showFeedback,setShowFeedback] = useState(false)

  useEffect(()=>{
    const getWords = async () => {
      const response = await fetch('http://localhost:4000/words')
      const json = await response.json()
      setIsLoading(false)
      return json.words
    }
    getWords().then((words)=>{dispatch(INIT_QUIZ({words}))})
  },[])

  return <div className="d-flex flex-column card border border-muted rounded mt-5 bg-light w-50">
    <QuizHeader />
    {isLoading && <LoadingSpinner/>}
    {!showFeedback && <Question setShowFeedback={setShowFeedback}/>}
    {showFeedback && <QuestionFeedback setShowFeedback={setShowFeedback} setScreen={setScreen}/> }
  </div>
}

export default Quiz