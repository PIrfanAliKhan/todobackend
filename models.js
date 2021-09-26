const mongoose=require('mongoose')

const schema=mongoose.Schema({
    task :{
        type: String,
        require: true
    },
    time : {
        type: String,
        require: true
    }
})

module.exports=mongoose.model('TodoList',schema)