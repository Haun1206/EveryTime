const BoardInfo = require("./models/boardInfo")
const mongoose = require('mongoose')
const MONGODB_URL = 'mongodb://localhost:27017/test'

mongoose.connect(MONGODB_URL, {useNewUrlParser : true, useUnifiedTopology: true}, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Connected to database successfully')
    }
})

//자유 : 1, 장터 : 2, 홍보 : 3, 비밀 : 4
let obj = {
    "_id" : 99,
    "title" : "메롱",
    "total" : 0
}

const boardinfo = new BoardInfo(obj)
boardinfo.save((err, data)=>{
    console.log(data._id)
})

