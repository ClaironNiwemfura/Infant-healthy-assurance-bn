import express from "express";
import bodyParser from "body-parser";
import appointment from "../controllers/appointment.js"

const router= express.Router();
router.use(bodyParser.json());

router.post("/appointments", appointment);

export default router;

