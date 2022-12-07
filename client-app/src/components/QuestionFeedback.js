import React from 'react'
import right from '../images/right.png'
import wrong from '../images/wrong.png'
import {useSelector} from "react-redux";

const QuestionFeedback = ({setShowFeedback,setShowResult}) => {
    const answers = useSelector(state=>state.answers)
    console.log(answers)
    const {word,answer,isAnswerCorrect} = answers[answers.length-1]
    console.log(word,answer,isAnswerCorrect)
    return <div className="d-flex flex-column align-items-center justify-content-center p-3">
        <img className="w-25 mb-2" src={isAnswerCorrect ? right:wrong}/>
        <p>The POS for word {word} is {isAnswerCorrect ? '' : 'NOT'} {answer}</p>
        <button className="btn btn-primary" onClick={()=>{
            setShowFeedback(false)
            if(answers.length===10){
                setShowResult(true)
            }
        }}>Continue</button>
    </div>
}

export default QuestionFeedback