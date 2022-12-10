const logger = (req,res,next)=>{
    console.log(`${req.method} request received at endpoint ${req.url}`)
    next()
}

module.exports = logger