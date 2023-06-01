import motherRegister from '../controllers/motherRegistration.js';
import express from 'express'
import bodyParser from 'body-parser'


const router= express.Router();
router.use(bodyParser.json())

router.post('/register', motherRegister)

export default router