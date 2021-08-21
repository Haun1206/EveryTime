const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const MONGODB_URL = 'mongodb://localhost:27017/test'

const corsOptions = {
    origin: "http://172.30.1.47:3000",
    credentials: true
}

app.use(cors(corsOptions))
app.use(express.json())

app.use("/", require("./routes/mainRouter"))
app.use("/login", require("./routes/loginRouter"))
app.use("/register", require("./routes/registerRouter"))


//server open
app.listen(8080, (err)=>{
    if(err){
        console.log(err)
    } else{
        console.log('Connected to server successfully')
        //DB open
        mongoose.connect(MONGODB_URL, {useNewUrlParser : true, useUnifiedTopology: true}, (err)=>{
            if(err){
                console.log(err);
            }else{
                console.log('Connected to database successfully')
            }
        })
    }
})

console.log(module)
