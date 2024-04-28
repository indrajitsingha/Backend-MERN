import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        riquired: true,
        unique: true,
        lowwerCase: true,
        trim: true,
        index: true,
    },
    email: {
        type: String,
        riquired: true,
        unique: true,
        lowwerCase: true,
        trim: true,
    },
    fullname: {
        type: String,
        riquired: true,
        trim: true,
        index: true,
    },
    avater: {
        type: String, //cloudnary url
        required: true,
    },
    coverimage: {
        type: String, //cloudnary url
    },
    watchhistory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "video"
    },
    password: {
        type: String,
        required: [true, "password is required"],

    },
    refreshToken: {
        type: String,
    }
}, { timestamps: true })

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = bcrypt.hash(this.password, 10)
        next()
    }
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.hash(password, this.password)
}

userSchema.methods.generateAccessToken = function () {
    return jwt.sign({
        _id: this._id,
        email: this.email,
        fullname: this.fullname,
        username: this.username,
    },
        process.env.Access_Token_Secret,
        {
            expiresIn: process.env.Access_Token_Expiry,
        }
    )
}
userSchema.methods.generateRefreshToken = async function () {

    return jwt.sign({
        _id: this._id,
    },
        process.env.Refresh_Token_Secret,
        {
            expiresIn: process.env.Refresh_Token_Expiry,
        }
    )
}
export const user = mongoose.model("user", userSchema)