import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import {INCREMENT_QUESTION,ADD_ANSWER} from "../store/quizSlice";

const Question = ({setShowFeedback}) => {

    const dispatch = useDispatch()
    const currentQuestion = useSelector((state)=>state.currentQuestion) //Get Number for current question
    const words = useSelector((state)=>state.words)     //Get Words array
    if(words.length === 0){return ''}   // If none yet, return nothing
    const {word,pos} = words[currentQuestion]               //Get the word and POS for the current question number

    const checkAnswer = (answer) => {               //Check if answer is correct, and add it to answers list
        const isAnswerCorrect = pos===answer
        dispatch(ADD_ANSWER({word,answer,isAnswerCorrect}))
        setShowFeedback(true)
        dispatch(INCREMENT_QUESTION())              //Increment the questions counter
    }

    const AllPos = ["adjective","adverb","noun","verb"]     //Array for all possible POSs

    return <div className="d-flex flex-column p-4">
        <div>{currentQuestion+1}. The word <strong>"{word}"</strong> is a ...</div>
        <div className="d-flex justify-content-between p-2 mt-5 flex-wrap">
            {AllPos.map((answer,i)=>{           //Map each POS into an answer button
                return <button key={i} className="btn btn-warning m-3" onClick={()=>checkAnswer(answer)}>{answer}</button>
            })}
        </div>
    </div>
}

export default Question