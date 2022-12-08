import React, {useEffect, useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {CLEAR_ANSWERS} from "../store/quizSlice";
import LoadingSpinner from "./LoadingSpinner";
const Result = ({setScreen}) => {
    const [rank,setRank] = useState('0')
    const [isLoading,setIsLoading] = useState(true)
    const answers = useSelector(state=>state.answers)
    const score = answers.filter((ans)=>ans.isAnswerCorrect).length*10
    useEffect(()=>{
        const getRanking = async () => {
            console.log(' i run')
            const response = await fetch('http://localhost:4000/rank',{method:'POST',body:JSON.stringify({score:score})})
            const json = await response.json()
            console.log(json)
            return json.rank
        }
        getRanking().then((rank)=>{
            setRank(rank)
            setIsLoading(false)
        })
    },[])
    if(isLoading){return <LoadingSpinner/>}

    const dispatch = useDispatch()
    return <div className="d-flex p-5 flex-column align-items-center text-center card border border-muted rounded mt-5 bg-light w-50">
        <div>
            <h3>You Finished the Quiz with score</h3>
            <h2>{score}%</h2>
            <h3>You Finished the Quiz with rank</h3>
            <h2>{rank}%</h2>
        </div>
        <button onClick={() => {
        dispatch(CLEAR_ANSWERS())
        setScreen('Quiz')
        }}>A button</button>
    </div>
}
export default Result