import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import doctorroutes from "./routes/doctorroutes.js";
const server = express();
server.use(cors());
dotenv.config();

server.use("/api/v1/", doctorroutes);

const port = 6000;
const connectToMongodb = () => {
  mongoose
    .connect(process.env.MONGODBPASS)
    .then(() => {
      console.log("mongodb connect");
    })
    .catch(() => {
      console.log("mongodb not connected");
    });
};

server.listen(port, () => {
  console.log("server running" + 6000);
  connectToMongodb();
});
