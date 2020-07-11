const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    num:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
        required:true,
    },//open robo3t once
    description:{
        type:String,
        required:true,
    }
},{
    timestamps:true
});

const Task = mongoose.model('Task',taskSchema);

module.exports = Task;