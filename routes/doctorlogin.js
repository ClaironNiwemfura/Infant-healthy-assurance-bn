import express from "express"
import bodyParser from "body-parser"
import loginDoctor from "../controllers/doctorlogin.js";

const router=express.Router();
router.use(bodyParser.json());

router.post("/loginDoctor",loginDoctor)


export default router;