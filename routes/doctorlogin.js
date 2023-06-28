import express from "express"
import bodyParser from "body-parser"
import loginDoctor from "../controllers/doctorlogin.js";
import authenticateDoctor from "../middlewares/doctorAuthentication.js";

const router=express.Router();
router.use(bodyParser.json());

router.post("/login",loginDoctor)


export default router;