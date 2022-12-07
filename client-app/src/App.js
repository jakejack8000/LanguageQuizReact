import React,{useState} from "react";
import "./style.css";

import HomePage from './components/HomePage.js'
import Quiz from './components/Quiz.js'
import Result from "./components/Result";

export default function App() {
  let [quizOpen,setQuizOpen] = useState(false)
    const [showResult,setShowResult] = useState(false)
    if(showResult){quizOpen =false}
    console.log(showResult+ " SHOOOWWW RESULT")
  return (
    <div>
      <header className="bg-warning p-2 text-light text-bold">English Exercise</header>
      <div className="d-flex flex-column justify-content-center align-items-center ">
      {!quizOpen && !showResult && <HomePage setQuizOpen={setQuizOpen}/>}
      {quizOpen  && <Quiz setShowResult={setShowResult}/>}
      {showResult &&<Result setShowResult={setShowResult} setQuizOpen={setQuizOpen}/>}
      </div>
    </div>
  );
}
