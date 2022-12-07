import React from "react";
import {useDispatch,useSelector} from "react-redux";
import {INIT_QUIZ} from "../store/quizSlice";

const Result = ({setQuizOpen,setShowResult}) => {
    const dispatch = useDispatch()
    return <div className="text-secondary" role="status">
        <button onClick={() => {
        dispatch(INIT_QUIZ())
            setQuizOpen(true)
            setShowResult(false)
        }}>A button</button>
    </div>
}
export default Result