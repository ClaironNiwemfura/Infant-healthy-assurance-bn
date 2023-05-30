import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import express from "express";

const server=express();
server.use(cors());
dotenv.config();


const port=3000;
const connectToMongodb =() =>{
    mongoose.connect('mongodb+srv://Infant-Health-Care:infanthealth@cluster0.kf7e0vs.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>{
        console.log("mongodb connect")
    })
    .catch(()=>{
        console.log("mongodb not connected")
    });
}

server.listen(port,()=>{
console.log("server running" + 3000)
connectToMongodb();
})


