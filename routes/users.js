const express = require('express')
const router = express.Router()


router.get('/',(req,res) => {
    res.send("User List")
})

router.get('/new',(req,res) => {
    res.render('form',{text:"wow"})
})

router.post('/new',(req,res) =>{
    
})

module.exports = router