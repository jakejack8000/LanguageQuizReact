import React,{useState} from 'react'
import {useSelector,useDispatch} from "react-redux";
import {INCREMENT_QUESTION,ADD_ANSWER} from "../store/quizSlice";
const Question = ({setShowFeedback}) => {

    const dispatch = useDispatch()
    const currentQuestion = useSelector((state)=>state.currentQuestion)
    const words = useSelector((state)=>state.words)
    const AllPos = ["adjective","adverb","noun","verb"]
    const {word,pos} = words[currentQuestion]
    const checkAnswer = (answer) => {
        const isAnswerCorrect = (pos===answer)
        dispatch(ADD_ANSWER({word,answer,isAnswerCorrect}))
        setShowFeedback(true)
        dispatch(INCREMENT_QUESTION())
    }

    return <div className="d-flex flex-column p-4">
        <div>{currentQuestion+1}. The word <strong>"{word}"</strong> is a ...</div>
        <div className="d-flex justify-content-between p-2 mt-5">
            {AllPos.map((answer,i)=>{
                return <button key={i} className="btn btn-warning " onClick={()=>checkAnswer(answer)}>{answer}</button>
            })}
        </div>
    </div>
}

export default Question