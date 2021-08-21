const mongoose = require('mongoose')
const MONGODB_URL = 'mongodb://localhost:27017/test'

//models
const Board = require("./models/board")
const User = require("./models/user")

mongoose.connect(MONGODB_URL, {useNewUrlParser : true, useUnifiedTopology: true}, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Connected to database successfully')
    }
})

// var step1, step2
// for (step1 = 0; step1 < 4; step1++) {
//     for(step2 = 0; step2 < 10; step2++){
//         let obj = {
//             "boardtypeid": step1+1,
//             "userId" : "Kim",
//             "title" : "확인" + String(step1+1) + "_" + String(step2+1),
//             "content" : "내용입니다" + String(step2+1),
//             "numGood" : 0,
//             "numComent" : 0,
//             "numScrap" : 0
//         }
//         const board = new Board(obj)
//         board.save()
//     }
// }

