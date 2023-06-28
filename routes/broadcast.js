import express from "express";
import bodyParser from "body-parser";
import {sendBroadcast} from "../controllers/broadcast.js"

const router= express.Router();
router.use(bodyParser.json());

router.post("/", sendBroadcast);

export default router;
