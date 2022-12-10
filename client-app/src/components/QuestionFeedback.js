import React from 'react'
import right from '../images/right.png'
import wrong from '../images/wrong.png'
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";


const QuestionFeedback = ({setShowFeedback}) => {
    const navigate = useNavigate()
    const answers = useSelector(state=>state.answers)   //Fetch answers list
    const words = useSelector((state)=>state.words)     //Get list of words
    const {word,answer,isAnswerCorrect} = answers[answers.length-1]  // Fetch the word, answer, isCorrect of last answer only

    return <div className="d-flex flex-column align-items-center justify-content-center feedback">
        <img style={{width:'9%'}} className="mb-2" src={isAnswerCorrect ? right:wrong}/>
        <p>The POS for word <strong>{word}</strong> is {isAnswerCorrect ? '' : 'NOT'} <strong>{answer}</strong></p>
        <button className="btn btn-primary" onClick={()=>{
            setShowFeedback(false)
            if(answers.length===words.length){        //If answers count same as words, show result page
                navigate('/result')
            }
        }}>Continue</button>
    </div>
}

export default QuestionFeedback