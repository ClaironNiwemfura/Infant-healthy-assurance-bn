import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import doctorroutes from "./routes/doctorroutes.js";
import doctor from "./routes/doctorlogin.js";
import mother from './routes/motherRoutes.js'
import appointment from "./routes/appointment.js"
import child from './routes/childRoutes.js'





const server=express();
server.use(express.json());
server.use(cors());
server.use(express.json());

dotenv.config();

server.use("/api/v1/", doctorroutes);
server.use("/api/v1/doctor",doctor);
server.use("/api/v1/appointment", appointment);
server.use("/api/v1/mother", mother)
server.use("/api/v1/child", child)

const port = 3000;
const connectToMongodb = () => {
  mongoose
    .connect(process.env.MONGODBPASS)
    .then(() => {
      console.log("mongodb connect");
    })
    .catch(() => {
      console.log("mongodb not connected"); 
    });
}



server.listen(port, () => {
  console.log("server running" + port); 
  connectToMongodb();
});
