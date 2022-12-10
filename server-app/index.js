const express = require('express')
const wordsRouter = require('./routes/wordsRouter')
const rankingRouter = require('./routes/rankingRouter')
const cors = require('cors');
const app = express()

app.use(express.json())

app.use(cors())

app.use('/words',wordsRouter)
app.use('/rank',rankingRouter)


app.all('*',(req,res)=>{
    res.status(404).json({status:'ERROR, NOT FOUND'})
})

app.listen(4000)
