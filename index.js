import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import appointment from "./routes/appointment.js"

const server=express();
server.use(express.json());
server.use(cors());
dotenv.config();


const port=3000;
const connectToMongodb =() =>{
    mongoose.connect('mongodb+srv://Infant-Health-Care:einsten02@cluster0.kf7e0vs.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>{
        console.log("mongodb connect")
    })
    .catch(()=>{
        console.log("mongodb not connected")
    });
}

server.use("/api/v1/appointment", appointment);

server.listen(port,()=>{
console.log("server running" + 3000)
connectToMongodb();
})


