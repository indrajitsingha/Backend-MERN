import mongoose from "mongoose";

const Todos = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    CreatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" //its a reference to the model  (inner join)
    },
    // array of object 
    subTodos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "subTodo" //its a reference to the model  (inner join)
    }]
    // array of object 
}, { timestamps: true })

export const Todo = mongoose.model("Todo", Todos)