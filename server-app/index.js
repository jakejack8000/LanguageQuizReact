const express = require('express')
const {wordList,scoresList} = require('./data.json')
const cors = require('cors');
const app = express()

app.use(express.json())

app.use(cors())

app.get('/words',(req,res)=>{
    const getRandomWords = () =>{
        const randomWords = wordList.sort(()=>0.5-Math.random()).slice(0,10)  //RANDOMIZING ALL WORDS AND SLICING FIRST 10
        let arrayOfPos = randomWords.map((word)=>word.pos)              //Get Complete array of POSs only
        arrayOfPos = arrayOfPos.filter((pos,i) => arrayOfPos.indexOf(pos) === i); //Remove Duplicates
        if (arrayOfPos.length !== 4){                           //The result would be an array of 10 words containing
            return getRandomWords()                             // ... at least one verb,noun,adverb,adjective
        }
        return randomWords
    }
    const randomWords = getRandomWords()
    res.status(200).json({status:'success',words:randomWords})
})

app.post('/rank',(req,res)=>{
    let score = req.body.score
    if(typeof(score)==='undefined'){
        res.status(400).json({status:"ERROR, INVALID/MISSING SCORE"})
        return
    }
    score = Number(score)
    if(score > 100 || score < 0){
        res.status(400).json({status:"ERROR, SCORE OUT OF POSSIBLE RANGE"})
        return
    }

    else {
        const AllPeople = scoresList.length                 //GET COUNT OF ALL SCORES
        const PeopleWhoScoredLess = scoresList.filter((s) => s < score).length       //GET COUNT OF ALL SCORES LESS THAN POSTED
        const rank = (PeopleWhoScoredLess / AllPeople * 100).toFixed(2)     //CALCULATE AND ROUND TO NEAREST HUNDREDTH
        res.status(200).json({status: 'success', rank})
    }
})



app.all('*',(req,res)=>{
    res.status(404).json({status:'ERROR, NOT FOUND'})
})

app.listen(4000)
