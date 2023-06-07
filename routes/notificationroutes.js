import express from "express";
import bodyParser from "body-parser";
import {
  createNotification,
  getNotification,
  updateNotification,
  deleteNotification,
} from "../controllers/notification.js";

const router = express.Router();
router.use(bodyParser.json());

router.post("/create", createNotification);
router.get("/get", getNotification);
router.put("/update/:id", updateNotification);
router.delete("/delete/:id", deleteNotification);

export default router;
