import express from "express"
import bodyParser from "body-parser"
import {CreateHealthInfo,UpdateHealthInfo,getHealthInfo,deleteHealthInfo}from "../controllers/healthinfo.js";
import createsms from "../controllers/healthinfosms.js";

const router=express.Router();
router.use(bodyParser.json());

router.post("/create",CreateHealthInfo);
router.put("/update/:id",UpdateHealthInfo);
router.get("/get",getHealthInfo);
router.delete("/delete/:id",deleteHealthInfo);

router.post("/createsms",createsms)

export default router;