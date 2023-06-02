import express from "express"
import bodyParser from "body-parser"
import {createNappointment, updateNappointment, readNappointment, deleteAppointment} from "../controllers/newappointment.js"


const router= express.Router();
router.use(bodyParser.json());

router.post("/create", createNappointment);
router.get("/read", readNappointment);
router.put("/update/:id", updateNappointment);
router.delete("/delete/:id", deleteAppointment)

export default router;
