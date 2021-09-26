const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const bp=require('body-parser')


const app=express()

app.use(bp.json())
app.use(cors())

mongoose.connect('mongodb+srv://todo:todo@firstcluster.eovnw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser: true , useUnifiedTopology: true});

const connection = mongoose.connection;

connection.once('open', () => console.log("connected to the mongodb"));


const routerpath=require('./router')

app.use('/',routerpath)

app.listen(2000,() => {console.log("connected to prt number")})