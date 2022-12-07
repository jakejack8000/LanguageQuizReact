import React from 'react'
import {useSelector} from "react-redux";

const ProgressBar = () => {
    const currentQuestion = useSelector((state)=>state.currentQuestion)
    const Progress = `${(currentQuestion*10).toString()}%`

    return <div className="d-flex w-50 h-50 justify-content-center">
        <div className="w-100 bg-light border border-muted rounded">
        <div className="bg-danger " style={{width:Progress,height:"100%"}}></div>
        </div>
        <div className="text-light ms-2 ">
            {Progress}
        </div>
    </div>
}
export default ProgressBar