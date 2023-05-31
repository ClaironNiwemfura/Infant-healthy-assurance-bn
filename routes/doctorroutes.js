import bodyParser from "body-parser";
import express from "express";
import doctoraccount from "../controllers/createdoctor.js";

const router = express.Router();
router.use(bodyParser.json());

router.post("/doctor-account", doctoraccount);

export default router;
