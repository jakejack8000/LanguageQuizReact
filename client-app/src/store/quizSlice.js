import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    words: []
    , answers: [],
    bestScore: 0,
    bestRanking: 0,
    currentQuestion: 0
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
        },
        ADD_ANSWER: (state, action) => {
            state.answers.push(action.payload)
        },
        INCREMENT_QUESTION: (state) => {
            state.currentQuestion++
        },
        SET_BEST_SCORE:(state,action)=>{
          const score = action.payload.score
          const ranking = action.payload.ranking
            if(state.bestScore>score){
              state.bestScore = score
              state.bestRanking = ranking
            }
        }

    }
})

export const {INIT_QUIZ,CLEAR_ANSWERS, ADD_ANSWER, INCREMENT_QUESTION} = quizSlice.actions

export default quizSlice.reducer