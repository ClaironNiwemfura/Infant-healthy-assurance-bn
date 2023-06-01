import bodyParser from "body-parser";
import express from "express";
import createdoctoraccount from "../controllers/createdoctor.js";

const router = express.Router();
router.use(bodyParser.json());

router.post("/doctor-account", createdoctoraccount);

export default router;
