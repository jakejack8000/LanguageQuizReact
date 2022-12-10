import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import {CLEAR_ANSWERS} from "../store/quizSlice";

const ReviewAnswers = ({setScreen}) => {
const dispatch = useDispatch()
const answers = useSelector(state=>state.answers)
    return <div className='p-4 m-4'>
    <table className="table bg-light">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Word</th>
            <th scope="col">Your Answer</th>
            <th scope="col">Correct</th>
        </tr>
        </thead>
        <tbody>
        {answers.map((ans,i)=><tr>
            <th scope="col">{i+1}</th>
            <th scope="col">{ans.word}</th>
            <th scope="col">{ans.answer}</th>
            <th scope="col">{ans.isAnswerCorrect ?  '✔':'✖'}</th>
        </tr>)}
        </tbody>
    </table><div className='d-flex justify-content-center'>
    <button className='btn btn-warning m-1' onClick={() => {
        dispatch(CLEAR_ANSWERS())
        setScreen('Quiz')
    }}>Start New Quiz</button>
    </div>
    </div>
}

export default ReviewAnswers