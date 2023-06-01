import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import doctorroutes from "./routes/doctorroutes.js";
const server = express();
import mother from './routes/motherRoutes.js'

server.use(cors());
server.use(express.json());

dotenv.config();

server.use("/api/v1/", doctorroutes);

const port=3000;
const connectToMongodb =() =>{
    mongoose.connect('mongodb+srv://Infant-Health-Care:einsten02@cluster0.kf7e0vs.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>{
        console.log("mongodb connect")
    })
    .catch(() => {
      console.log("mongodb not connected");
    });
}



server.use("/api/v1/mother", mother)


server.listen(port, () => {
  console.log("server running" + 6000);
  connectToMongodb();
});
