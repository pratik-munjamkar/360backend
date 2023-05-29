import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import apiRoute from "./routes/api.js";
import cors from "cors";
import router from "./routes/api.js";
const app = express()
dotenv.config();


const connect = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB);
        console.log("connected to MONGODB");
    }catch (error) {
        throw error;
    }
};

//Middlepart

app.use(cors());

app.use(express.json());

app.use("/", router)

app.use("/api/Api", apiRoute);
app.use("/api/userSchema", apiRoute);


app.listen(8000, ()=>{
    connect()
    console.log("Server is running on port 8000")
})