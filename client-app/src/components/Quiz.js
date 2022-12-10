import React, {useEffect, useState} from 'react'
import Question from './Question'
import QuizHeader from './QuizHeader'
import QuestionFeedback from "./QuestionFeedback";
import LoadingSpinner from "./LoadingSpinner";
import {useDispatch} from "react-redux";
import {INIT_QUIZ} from "../store/quizSlice";

const Quiz = ({setScreen}) => {
  const [isLoading,setIsLoading] = useState(true)   //Shows the Loading spinner while loading
  const dispatch = useDispatch()
  const [showFeedback,setShowFeedback] = useState(false)  //This state toggles after each question to show
                                                                    //... Feedback for each answer

  // Fetches the words from the API and initializes new quiz with it
  useEffect(()=>{
    const getWords = async () => {
      const response = await fetch('http://localhost:4000/words')
      const json = await response.json()
      setIsLoading(false)
      return json.words
    }
    getWords().then((words)=>{dispatch(INIT_QUIZ({words}))})
  },[])

  return <div className="d-flex flex-column justify-content-between card rounded mt-5 bg-light quiz-box">
    <QuizHeader />
    {isLoading && <LoadingSpinner/>}
    {!showFeedback && <Question setShowFeedback={setShowFeedback}/>}
    {showFeedback && <QuestionFeedback setShowFeedback={setShowFeedback} setScreen={setScreen}/> }
  </div>
}

export default Quiz