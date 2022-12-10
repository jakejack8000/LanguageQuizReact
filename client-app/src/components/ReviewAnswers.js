import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import {Link} from 'react-router-dom'
import {CLEAR_ANSWERS} from '../store/quizSlice';
import NoQuizData from './NoQuizData'

const ReviewAnswers = () => {
const dispatch = useDispatch()
const answers = useSelector(state=>state.answers)
const finishedQuiz = useSelector(state=>state.finishedQuiz)
if (!finishedQuiz) {
    return <NoQuizData/>
}
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
        {answers.map((ans,i)=><tr key={i}>
            <th scope="col">{i+1}</th>
            <th scope="col">{ans.word}</th>
            <th scope="col">{ans.answer}</th>
            <th scope="col">{ans.isAnswerCorrect ?  '✔':'✖'}</th>
        </tr>)}
        </tbody>
    </table><div className='d-flex justify-content-center'>
    <Link to='/' className='btn btn-warning m-1' onClick={() => {
        }}>Homepage</Link>
    <Link to='/quiz' className='btn btn-warning m-1' onClick={() => {
        dispatch(CLEAR_ANSWERS())
    }}>Start New Quiz</Link>
    </div>
    </div>
}

export default ReviewAnswers