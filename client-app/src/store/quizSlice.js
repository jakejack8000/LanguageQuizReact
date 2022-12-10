import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    words: []
    , answers: [],
    quizTime:{minutes:0,seconds:0},
    bestScore: 0,
    bestRanking: 0,
    currentQuestion: 0,
    finishedQuiz:false
}

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        INIT_QUIZ: (state, action) => {
            state.words=action.payload.words
        },
        CLEAR_ANSWERS: (state) => {
            state.currentQuestion = 0
            state.answers = []
            state.quizTime={minutes:0,seconds:0}
        },
        ADD_ANSWER: (state, action) => {
            state.answers.push(action.payload)
        },
        INCREMENT_QUESTION: (state) => {
            state.currentQuestion++
            if(state.currentQuestion===state.words.length){
                state.finishedQuiz = true
            }
        },
        SET_BEST_SCORE:(state,action)=>{
          const score = action.payload.score
          const ranking = action.payload.ranking
            if(state.bestScore<score){
              state.bestScore = score
              state.bestRanking = ranking
            }
        },
        SET_TIME:(state,action)=>{
            state.quizTime = action.payload
        }

    }
})

export const {INIT_QUIZ,CLEAR_ANSWERS, ADD_ANSWER, INCREMENT_QUESTION, SET_TIME, SET_BEST_SCORE} = quizSlice.actions

export default quizSlice.reducer