import mongoose from "mongoose";
import { DB_NAME } from "../constains.js";
const connectDB = async () => {
    try {
        const ConnectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`Connected to ${ConnectionInstance.connection.host}`)
    } catch (error) {
        console.log("mongoose error:", error);
        process.exit(1);
    }
}

export default connectDB