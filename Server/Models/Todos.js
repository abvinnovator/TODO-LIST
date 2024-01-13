const mongoose = require('mongoose')
const Todoschema = new mongoose.Schema({
    task : String,
    done :{
        type:Boolean,
        default:false
    }
})
const TodoModel = mongoose.model("todos",Todoschema)
module.exports = TodoModel