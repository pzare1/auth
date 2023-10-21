import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
const app = express();
mongoose.connect(process.env.MONGO)
.then(() => {
    console.log("connected to db")
})
.catch((err) => {
    console.log(err)
})
const PORT = 8080
app.listen(PORT, () => {
    console.log(`the server is running on the port ${PORT}`)
})