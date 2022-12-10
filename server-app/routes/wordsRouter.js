const router = require('express').Router()
const getRandomWords = require('../controller/wordsController')

router.get('/',getRandomWords)

module.exports = router