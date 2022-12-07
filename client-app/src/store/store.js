import { configureStore } from '@reduxjs/toolkit'
import quizReducer from './quizSlice.js'

const store = configureStore({
  reducer: quizReducer
})

export default store