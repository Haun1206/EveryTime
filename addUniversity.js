const mongoose = require("mongoose")
const MONGODB_URL = 'mongodb://localhost:27017/test'

//model
const Univercity = require("./models/univercity")

mongoose.connect(MONGODB_URL, {useNewUrlParser : true, useUnifiedTopology: true}, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Connected to database successfully')
    }
})

const name = ["한국과학기술원", "서울대학교", "포항공과대학교"]
var index
for(index = 0; index < name.length; index++){
    var obj = {
        name : name[index],
        subjectData : "아몰라"
    }
    const univer = Univercity(obj)
    univer.save()
}