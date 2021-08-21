const express = require("express")
const jwt = require("jsonwebtoken")
const key = require("../key")
const router = express.Router()

//models
const User = require("../models/user")

router.post('/', (req, res) =>{
    console.log(req.body)
    User.findOne({ userId : req.body.id}, (err, data)=>{
        if(err){
            console.log(err)
        } else {
            if(data == null){
                // 존재하지 않는 아이디
                res.json({result : false, reason : "아이디가 존재하지 않습니다"})
            } else {
                if(req.body.password != data.password){
                    // 비밀번호 틀림
                    res.json({result : false, reason : "비밀번호가 틀렸습니다"})
                } else {
                    // 성공
                    const token = jwt.sign({userId: req.body.id}, key, {expiresIn: "1h"})
                    res.json({result : true, reason : "", token : token})
                }
            }
        }
    })
})

module.exports = router;