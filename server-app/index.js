const express = require('express')
const wordsRouter = require('./routes/wordsRouter')
const rankingRouter = require('./routes/rankingRouter')
const {APP_PORT} = require('./configurations')
const logger = require('./ConsoleLogger')
const cors = require('cors');
const app = express()

app.use(logger)
app.use(express.json())
app.use(cors())

app.use('/words',wordsRouter)
app.use('/rank',rankingRouter)


app.all('*',(req,res)=>{
    res.status(404).json({status:'ERROR, NOT FOUND'})
})

app.listen(APP_PORT)
console.log(`Server-app listening on Port ${APP_PORT}`)
