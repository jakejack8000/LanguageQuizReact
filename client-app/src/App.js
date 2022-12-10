import React,{useState} from "react";
import "./style.css";

import HomePage from './components/HomePage.js'
import Quiz from './components/Quiz.js'
import Result from "./components/Result";
import ReviewAnswers from "./components/ReviewAnswers";
export default function App() {             //THE APP USES "SCREEN" STATE TO DECIDE WHICH SCREEN TO SHOW
    const [screen,setScreen] = useState('HomePage')
  return (
    <div>
      <header className="bg-warning p-2 text-light text-bold">English Exercise</header>
      <div className="d-flex flex-column justify-content-center align-items-center">
      {screen==='HomePage' && <HomePage setScreen={setScreen}/>}
      {screen==='Quiz'  && <Quiz setScreen={setScreen}/>}
      {screen==='Result' &&<Result setScreen={setScreen}/>}
      {screen==='ReviewAnswers' && <ReviewAnswers setScreen={setScreen}/>}
      </div>
    </div>
  );
}
