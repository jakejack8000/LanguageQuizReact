import React from 'react'

const HomePage = ({setScreen}) => {
   return (
   <div className="mt-5 w-75 d-flex flex-column align-items-center justify-content-center">
   <h2 className="text-center">Vocabulary Quiz</h2>
   <h1  className="text-center">Welcome to English Quiz</h1>
   <p className="text-center">Improve your skills and test your grammar by clicking the button below</p>
   <button onClick={()=>{setScreen('Quiz')}} className="btn btn-warning text-light">Start Quiz</button>
   </div>
   )
} 

export default HomePage