import express from "express";
import bodyParser from "body-parser";
import {createAppointment, updateAppointment, readAppointment, deleteAppointment} from "../controllers/appointment.js"

const router= express.Router();
router.use(bodyParser.json());

router.post("/create", createAppointment);
router.get("/read", readAppointment);
router.put("/update/:id", updateAppointment);
router.delete("/delete/:id", deleteAppointment)

export default router;

