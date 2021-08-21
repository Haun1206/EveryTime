const express = require("express")
const router = express.Router()

//models
const User = require("../models/user")

// 학교 정보 보내기

//아이디 중복 체크
router.post('/id', (req, res) => {
    console.log(req.body.id)
    User.findOne({userId : req.body.id}, (err, data)=>{
        if(err){
            console.log(err)
        } else {
            if(data == null){
                res.send(true)
            } else {
                res.send(false)
            }
        }
    })
})

//회원 정보 등록
router.post('/', (req, res) => {
    var obj = {
        userId : req.body.id,
        password : req.body.password
    }
    const user = User(obj)
    user.save()
    res.end()
})

module.exports = router;