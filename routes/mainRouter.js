const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const key = require("../key")

//models
const Board = require("../models/board")
const BoardInfo = require("../models/boardInfo")
const Comment = require("../models/comment")

router.get('/:boardtype', async(req, res)=>{
    try{
       

        var out = []
        await Board.find({boardtypeid : Number(req.params.boardtype)}).sort({ _id: -1 }).limit(Number(req.query.length)).then((data) => {
            var step
            for (step = 0; step < Number(req.query.length); step++) {
                if(data[step]){
                    if(req.query.type === "list" ){
                        out.push({
                            title : data[step].title,
                            updateAt : data[step].updatedAt
                        })
    
                    } else {
                        out.push({
                            title : data[step].title,
                            numGood: data[step].numGood,
                            numComent: data[step].numComent,
                            updateAt : data[step].updatedAt
                        })
    
                    }

                }
            }
        })
        //console.log(out)
        res.send(out)

    } catch (err){
        console.log(err)
    }
})

router.post('/:id/new', (req, res)=>{
    try{
        console.log("222222")
        console.log(req.params.id)
        console.log(req.headers)
        let obj = {
            boardtypeid: req.params.id,
            title : req.body.title,
            content: req.body.content,
            numGood: 0,
            numComent: 0,
            numScrap: 0
        }

        const board = new Board(obj)
        board.save((err, data)=>{
            if(err){
                console.log(err)
                res.end()
            } else {
                res.send(data._id)
            }

        })

    } catch (err){
        console.log(err)
    }
})

module.exports = router;