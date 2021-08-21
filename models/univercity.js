const mongoose = require('mongoose')
const { Schema } = mongoose

const univercitySchema = new Schema({
    name:String,
    subjectData:String
})

module.exports = mongoose.model('Univercity', univercitySchema)