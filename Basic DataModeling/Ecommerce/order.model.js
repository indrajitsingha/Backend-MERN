import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        types: number,
        required: true,
    }
})
const OrderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        require: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    orderItems: {
        type: [orderItemSchema]
    },
    address: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "fulfilled", " rejected"],
        default: "pending"
    }

}, { timestamps: true })

export const Order = mongoose.model("Order", OrderSchema)