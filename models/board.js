const mongoose = require('mongoose')
const { Schema } = mongoose

const boardSchema = new Schema({
    boardtypeid: Number, // FK
    userId: String, // FK
    title: String,
    content: String,
    numGood: Number,
    numComent: Number,
    numScrap: Number
},
{
    timestamps: true
})

module.exports = mongoose.model('Board', boardSchema)