import app from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
    path: "./env"
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 5000, () => {
            console.log("port Running Successfully in " + process.env.PORT);
        })

    }).catch((error) => {
        console.log("connection Error: ", error);
    })