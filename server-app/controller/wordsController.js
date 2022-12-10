const {wordList} = require('../data.json')

const getRandomWords = (req,res)=>{
    const getRandomWords = () =>{
        const randomWords = wordList.sort(()=>0.5-Math.random()).slice(0,10)  //RANDOMIZING ALL WORDS AND SLICING FIRST 10
        let arrayOfPos = randomWords.map((word)=>word.pos)              //Get Complete array of POSs only
        arrayOfPos = arrayOfPos.filter((pos,i) => arrayOfPos.indexOf(pos) === i); //Remove Duplicates
        if (arrayOfPos.length !== 4){                           //The result would be an array of 10 words containing
            return getRandomWords()                             // ... at least one verb,noun,adverb,adjective
        }                                                          // ... If not, call function again until condition satisfied
        return randomWords
    }
    const randomWords = getRandomWords()
    res.status(200).json({status:'success',words:randomWords})
}

module.exports = getRandomWords