const router = require('express').Router()
const getRanking = require('../controller/rankingController')

router.post('/',getRanking)

module.exports = router