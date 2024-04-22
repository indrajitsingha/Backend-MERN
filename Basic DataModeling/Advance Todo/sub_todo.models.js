import mongoose from "mongoose";

const subTodos = new mongoose.Schema({
    Content: {
        type: String,
        require: true,
    },
    isComplete: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, { timestamps: true })

export const subTodo = mongoose.model("subTodo", subTodos)