import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CLEAR_ANSWERS, SET_BEST_SCORE} from "../store/quizSlice";
import LoadingSpinner from "./LoadingSpinner";
import {Link} from "react-router-dom";
import NoQuizData from "./NoQuizData";
import {endpoint_url} from "../configurations";

const Result = () => {
    const dispatch = useDispatch()
    const [rank,setRank] = useState('0')
    const [isLoading,setIsLoading] = useState(false)
    const answers = useSelector(state=>state.answers)
    const score = answers.filter((ans)=>(ans.isAnswerCorrect)).length/answers.length*100  //Count correct answers
                                                                                            //divide by all words number
    const time = useSelector(state=>state.quizTime)                                 //and multiply bt 100
    const finishedQuiz = useSelector(state=>state.finishedQuiz)
    if (!finishedQuiz) {
        return <NoQuizData/>
    }


    useEffect(()=>{
        const getRanking = async () => {
            const response = await fetch(endpoint_url+'/rank',{
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
            dispatch(SET_BEST_SCORE({score,ranking:rank}))
            setIsLoading(false)

        })
    },[])

    const {bestScore,bestRanking} = useSelector(state=>state)

    if(isLoading){return <LoadingSpinner/>}
    return <div className="d-flex p-5 flex-column align-items-center text-center card border border-muted rounded mt-5 bg-light quiz-box">
        <div>
            <h3>You Finished the previous quiz with score</h3>
            <h2>{score}</h2>
            <h3>You Finished the previous quiz with rank</h3>
            <h2>{rank}%</h2>
            <h3>Time Taken was {time.minutes}:{time.seconds}</h3>
            <h4>Personal Best Score: {bestScore} with Ranking: {bestRanking}%</h4>
        </div>
        <div className='d-flex justify-content-center'>
        <Link to='/review' className='btn btn-warning m-1'>Review Answers</Link>
        <Link to='/quiz' className='btn btn-warning m-1' onClick={() => {
            dispatch(CLEAR_ANSWERS())
        }}>Start New Quiz</Link>
        </div>
    </div>
}
export default Result