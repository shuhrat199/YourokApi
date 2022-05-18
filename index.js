import express from "express";
import router from "./router.js";
import mongoose from "mongoose";

const app = express()

const PORT = 5000;
const DB_URL = `mongodb://user:5429593@127.0.0.1:27017/Test`
app.use("/api", router)
async function startApp()
{

    
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, ()=> console.log("Start server on port" + PORT))
    } catch (error) {
        console.log(error)
    }
}

startApp()