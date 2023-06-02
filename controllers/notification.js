import CreatenotificationModel from "../models/notificationmodel.js";

const createNotification = async (req, res) => {
  try {
    let data = req.body;
    const notificationInstance = await CreatenotificationModel({
      sendername: data.sendername,
      message: data.message,
    });
    const response = notificationInstance.save();
    res.status(200).json({
      message: "Notification Created Successfully",
      error: null,
      data: notificationInstance,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failer to create notification",
      error: "Internal server error",
      data: "null",
    });
  }
};
const getNotification = async (req, res) => {
  try {
    const notificationInstance = await CreatenotificationModel.find().exec();
    res.status(200).json({
      message: "Notification Found Successfully",
      error: null,
      data: notificationInstance,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failer to get notification",
      error: "Internal server error",
      data: null,
    });
  }
};
const updateNotification = async (req, res) => {
  try {
    const data = req.body;
    const notificationInstance = await CreatenotificationModel.updateOne({
      _id: data._id,
    });
    res.status(200).json({
      message: "Notification Successfully updated",
      error: "null",
      data: data,
    });
  } catch {
    res.status(500).json({
      message: "Failer to update notification",
      error: "Internal server error",
      data: "null",
    });
  }
};
const deleteNotification = async (req, res) => {
  try {
    const data = req.body;
    const notificationInstance = await CreatenotificationModel.deleteOne({
      _id: data._id,
    });
    res.status(200).json({
      message: "Notification successfully deleted",
      error: "null",
      data: data,
    });
  } catch {
    res.status(500).json({
      message: "Failed to delete notification",
      error: "Internal server error",
      data: "null",
    });
  }
};

export {
  createNotification,
  getNotification,
  updateNotification,
  deleteNotification,
};
