const mongoose = require('mongoose')
const { Schema } = mongoose

const boardInfoSchema = new Schema({
    _id: Number, // PK
    title : String,
    total : Number,
    best : {
        boardId : Number, //FK
        numGood : Number,
        numComent : Number
    }
})



module.exports = mongoose.model('BoardInfo', boardInfoSchema)