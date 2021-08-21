const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    userId:String,
    password:String,
    name:String,
    birth:Date,
    sex:String,
    univercity:String,
    email: String,
    studentid: Number,
    phoneNumber:String
})

module.exports = mongoose.model('User', userSchema)
console.log(module)