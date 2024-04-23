import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
    description: {
        required: true,
        type: String,
    },
    name: {
        required: true,
        type: String,
    },
    productImage: {
        type: String,
    },
    price: {
        type: Number,
        default: 0,
    },
    stock: {
        default: 0,
        type: Number,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true })

export const Product = mongoose.model("Product", ProductSchema)