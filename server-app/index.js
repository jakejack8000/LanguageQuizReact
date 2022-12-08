const express = require('express')
const app = express()
const {wordList,scoresList} = require('./data.json')

app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['http://localhost:3000']);
    res.append('Access-Control-Allow-Methods', 'GET,POST');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/words',(req,res)=>{
    const getRandomWords = () =>{
        const randomWords = wordList.sort(()=>0.5-Math.random()).slice(0,10)     //RANDOMIZING ALL WORDS AND SLICING FIRST 10
        let arrayOfPos = randomWords.map((word)=>word.pos)              //Get Complete array of POSs only
        arrayOfPos = arrayOfPos.filter((pos,i) => arrayOfPos.indexOf(pos) === i); //Remove Duplicates
        if (arrayOfPos.length !== 4){
            return getRandomWords()
        }
        return randomWords
    }
    const randomWords = getRandomWords()
    res.status(200).json({status:'success',words:randomWords})
})

app.post('/rank',(req,res)=>{
    const score = Number(req.body.score)
    console.log(req)
    console.log(score)
    // if(!score || score > 100 || score < 0){
    //     res.status(200).json({status:"ERROR, INVALID/MISSING SCORE"})
    // }
    const AllPeople = scoresList.length
    const PeopleWhoScoredLess = scoresList.filter((s)=>s<score).length
    const rank = (PeopleWhoScoredLess/AllPeople * 100).toFixed(2)
    res.status(200).json({status:'success',rank})
})



app.all('*',(req,res)=>{
    res.status(404).json({status:'ERROR, NOT FOUND'})
})
app.listen(4000)