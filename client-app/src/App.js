import React,{useState} from "react";
import "./style.css";

import HomePage from './components/HomePage.js'
import Quiz from './components/Quiz.js'
import Result from "./components/Result";

export default function App() {
    const [screen,setScreen] = useState('HomePage')
  return (
    <div className="h-100">
      <header className="bg-warning p-2 text-light text-bold">English Exercise</header>
      <div className="d-flex flex-column justify-content-center align-items-center h-100  ">
      {screen==='HomePage' && <HomePage setScreen={setScreen}/>}
      {screen==='Quiz'  && <Quiz setScreen={setScreen}/>}
      {screen==='Result' &&<Result setScreen={setScreen}/>}
      </div>
    </div>
  );
}
