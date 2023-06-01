import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import doctorroutes from "./routes/doctorroutes.js";
import doctor from "./routes/doctorlogin.js";

const server = express();
server.use(cors());
dotenv.config();

server.use("/api/v1/", doctorroutes);
server.use("/api/v1/doctor",doctor);

const port=5990;
const connectToMongodb =() =>{
    mongoose.connect('mongodb+srv://Infant-Health-Care:einsten02@cluster0.kf7e0vs.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>{
        console.log("mongodb connect")
    })
    .catch(() => {
      console.log("mongodb not connected"); 
    });
}

server.listen(port, () => {
  console.log("server running" + port); 
  connectToMongodb();
});
