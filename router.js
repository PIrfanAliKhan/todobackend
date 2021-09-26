const express=require('express')

const router=express.Router()

const TList=require('./models')

router.get('/getTodo',(req,res) => {
    TList.find({})
    .then((data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(data);
    })
    .catch((err) => {res.send({'Error':err})})
})


router.post('/addTodo',(req,res) => {
    TList.create(req.body)
    .then((data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(data);
    })
    .catch((err) => {res.send({'Error':err})})
})


router.put('/updateTodo/:id',(req,res) => {
    TList.findByIdAndUpdate(req.params.id,{$set: req.body},{new: true})
    .then((data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(data);
    })
    .catch((err) => {res.send({'Error':err})})
})

router.delete('/deleteTodo/:id',(req,res) => {
    TList.findByIdAndDelete(req.params.id)
    .then((data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(data);
    })
    .catch((err) => {res.send({'Error':err})})
})

module.exports=router;