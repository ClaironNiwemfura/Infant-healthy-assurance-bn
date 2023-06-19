import express from 'express'
import bodyParser from 'body-parser'
import {updateGuidance,createGuidance,getGuidance,deleteGuidance} from '../controllers/childGuidance.js';


const router= express.Router();

router.use(bodyParser.json())

router.post("/create",createGuidance)
router.put("/update/:guideId",updateGuidance)
router.get("/read/:guideId",getGuidance)
router.delete("/delete/:guideId",deleteGuidance)

export default router