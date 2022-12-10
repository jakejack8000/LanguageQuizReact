import React from 'react'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const HomePage = () => {
   const finishedQuiz = useSelector(state=>state.finishedQuiz) //Check if there is a previously finished quiz
   return (                                                             // to show "LAST RESULT" button
   <div className="mt-5 w-75 d-flex flex-column align-items-center justify-content-center">
   <h2 className="text-center">English Practice Quiz</h2>
   <h1  className="text-center">Welcome to English Practice Quiz</h1>
   <p className="text-center">Improve your skills and test your grammar by clicking the button below</p>
   <Link to='/quiz' className="btn btn-warning">Start New Quiz</Link>
   {finishedQuiz && <Link to='/result'>Show Last Result</Link>}
   </div>
   )
} 

export default HomePage