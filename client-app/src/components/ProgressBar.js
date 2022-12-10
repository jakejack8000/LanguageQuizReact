import React from 'react'
import {useSelector} from "react-redux";
                                        //This Progress bar just gets the current question number from
const ProgressBar = () => {             // the state, and sets width of bar div based on it
    const currentQuestion = useSelector((state)=>state.currentQuestion)
    const words = useSelector(state=>state.words)
    const Progress = `${((currentQuestion/words.length)*100).toString()}%`

    return <div className="d-flex w-75 h-50 justify-content-center text-light">Progress:
        <div className="ms-2 w-100 bg-light border border-muted rounded">
        <div className="bg-danger " style={{width:Progress,height:"100%"}}/>
        </div>
        <div className="text-light ms-2 ">
            {Progress}
        </div>

    </div>
}
export default ProgressBar