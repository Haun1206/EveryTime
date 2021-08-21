const mongoose = require('mongoose')
const { Schema } = mongoose

const commentSchema = new Schema({
    boardId: Number, // FK
    author: String, // FK
    content: String,
    goodNum: Number,
    comments: {
        author: String,
        content: String,
        goodNum : Number,
        enrolled:[{
            type:Date,
            default:Date.now
        }]
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Comment', commentSchema)