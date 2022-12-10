const {scoresList} = require('../data.json')

const getRanking = (req,res)=>{
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
}

module.exports = getRanking