import React from 'react'
import {Link} from "react-router-dom";

//This component only renders if a user tries to access '/result' or '/review' without actually completing a quiz

const NoQuizData = () => <div className='d-flex flex-column m-5 p-5'>
    No Quiz Data yet, Start a new Quiz !!!
    <Link to='/quiz' className='btn btn-warning m-1' onClick={() => {
    }}>Start New Quiz</Link>
</div>

export default NoQuizData