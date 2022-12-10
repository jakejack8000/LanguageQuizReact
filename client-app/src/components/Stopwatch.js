import React, {useState,useEffect} from 'react'
import {useDispatch} from "react-redux";
import {SET_TIME} from '../store/quizSlice'
const Stopwatch = () => {
    const dispatch = useDispatch()
    const [seconds,setSeconds] = useState(0)
    const [minutes,setMinutes] = useState(0)
    const formattedSeconds = seconds<10 ? "0"+seconds : seconds
    const formattedMinutes = minutes<10 ? "0"+minutes : minutes
    useEffect(()=>{
        setTimeout(()=>{
            if(seconds===59){
                setMinutes(minutes+1)
                setSeconds(0)
            }
            else {
                setSeconds(seconds + 1)
            }
            dispatch(SET_TIME({minutes:formattedMinutes,seconds:formattedSeconds}))},1000)
    })
    return <div className="align-self-end text-light">
    Time: {formattedMinutes}:{formattedSeconds}
    </div>
}


 
export default Stopwatch;