import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";

import HomePage from './components/HomePage.js'
import Quiz from './components/Quiz.js'
import Result from "./components/Result";
import ReviewAnswers from "./components/ReviewAnswers";
import NotFound from "./components/404";
export default function App() {
  return (
    <div>
        <header className="bg-warning p-2 text-light text-bold">English Exercise</header>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/quiz" element={<Quiz/>}/>
                <Route path="/result" element={<Result/>}/>
                <Route path="/review" element={<ReviewAnswers/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
