import React from 'react'
import right from '../images/right.png'
import wrong from '../images/wrong.png'
import {useSelector} from "react-redux";

const QuestionFeedback = ({setShowFeedback,setScreen}) => {
    const answers = useSelector(state=>state.answers)
    const {word,answer,isAnswerCorrect} = answers[answers.length-1]

    return <div className="d-flex flex-column align-items-center justify-content-center p-3">
        <img style={{width:'9%'}} className="mb-2" src={isAnswerCorrect ? right:wrong}/>
        <p>The POS for word <strong>{word}</strong> is {isAnswerCorrect ? '' : 'NOT'} <strong>{answer}</strong></p>
        <button className="btn btn-primary" onClick={()=>{
            setShowFeedback(false)
            if(answers.length===10){
                setScreen('Result')
            }
        }}>Continue</button>
    </div>
}

export default QuestionFeedback