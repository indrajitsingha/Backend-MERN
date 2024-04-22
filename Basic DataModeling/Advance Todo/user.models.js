import mongoose from "mongoose"

const user = new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    userName:{
        type:String,
        require:true,
        unique:true,
    }

}, { timestamps: true })

export const User = mongoose.model("User", user)