import express from 'express'
import bodyParser from 'body-parser'
import {updateGuidance,createGuidance,getGuidance,deleteGuidance} from '../controllers/childGuidance.js';


const router= express.Router();

router.use(bodyParser.json())

router.post("/create",createGuidance)
router.put("/update/:guideId",updateGuidance)
router.put("/read/:guideId",getGuidance)
router.put("/delete/:childId",deleteGuidance)

export default router