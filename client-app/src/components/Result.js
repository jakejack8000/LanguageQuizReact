import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CLEAR_ANSWERS, SET_BEST_SCORE} from "../store/quizSlice";
import LoadingSpinner from "./LoadingSpinner";

const Result = ({setScreen}) => {
    const dispatch = useDispatch()
    const [rank,setRank] = useState('0')
    const [isLoading,setIsLoading] = useState(false)
    const answers = useSelector(state=>state.answers)
    const score = answers.filter((ans)=>(ans.isAnswerCorrect)).length/answers.length*100  //Count correct answers only,multiply by 10
    useEffect(()=>{
        const getRanking = async () => {
            const response = await fetch('http://localhost:4000/rank',{
                method:'POST',
                headers:{
                  'Content-Type':'application/json',
                },
                body:JSON.stringify({score})
                })
            return await response.json()
        }
        getRanking().then((json)=>{
            const rank = json.rank
            setRank(rank)
            setIsLoading(false)
            dispatch(SET_BEST_SCORE({score,ranking:rank}))
        })
    },[])

    const {bestScore,bestRanking} = useSelector(state=>state)

    if(isLoading){return <LoadingSpinner/>}
    const time = useSelector(state=>state.quizTime)
    return <div className="d-flex p-5 flex-column align-items-center text-center card border border-muted rounded mt-5 bg-light quiz-box">
        <div>
            <h3>You Finished the Quiz with score</h3>
            <h2>{score}</h2>
            <h3>You Finished the Quiz with rank</h3>
            <h2>{rank}%</h2>
            <h3>Time Taken was {time.minutes}:{time.seconds}</h3>
            <h4>Personal Best Score: {bestScore} with Ranking: {bestRanking}%</h4>
        </div>
        <div className='d-flex justify-content-center'>
        <button className='btn btn-warning m-1' onClick={() => {
            setScreen('ReviewAnswers')
        }}>Review Answers</button>
        <button className='btn btn-warning m-1' onClick={() => {
            dispatch(CLEAR_ANSWERS())
            setScreen('Quiz')
        }}>Start New Quiz</button>
        </div>
    </div>
}
export default Result