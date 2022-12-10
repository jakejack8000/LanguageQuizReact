import React from 'react'
import ProgressBar from "./ProgressBar";
import Stopwatch from "./Stopwatch";
const QuizHeader = () => {
    return <div className="bg-primary rounded-top d-flex justify-content-between align-items-center p-2">
        <ProgressBar />
        <Stopwatch/>
    </div>
}
export default QuizHeader