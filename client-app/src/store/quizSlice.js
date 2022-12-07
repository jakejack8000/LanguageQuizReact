import { createSlice } from '@reduxjs/toolkit'
import data from "../data.json";
const {wordList} = data

const initialState = {
  words:wordList.slice(0,10)
  ,answers:[],
score:0,
  currentQuestion:0
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    INIT_QUIZ:(state,action)=>{
      //state.words=action.payload
      state.score=0
      state.currentQuestion = 0
    },
    ADD_ANSWER: (state,action) => {
      state.answers.push(action.payload)
    },
    INCREMENT_QUESTION: (state) => {
      state.currentQuestion++
    },

  }
})

export const { INIT_QUIZ,ADD_ANSWER,INCREMENT_QUESTION } = quizSlice.actions

export default quizSlice.reducer