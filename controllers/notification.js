import CreatenotificationModel from "../models/notificationmodel.js";

const createNotification = async (req, res) => {
  try {
    let data = req.body;
    const notificationInstance = new CreatenotificationModel({
      sendername: data.sendername,
      message: data.message,
    });
    const response = await notificationInstance.save();
    res.status(200).json({
      message: "Notification Created Successfully",
      error: null,
      data: response,
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
    const id = req.params.id;
    const data = req.body;
    const notificationInstance = await CreatenotificationModel.find({
      _id: id,
    });
    if (notificationInstance.length == 0) {
      res.status(400).json({
        message: "Failer to update notification",
        error: "information not found",
        data: null,
      });
    } else {
      const response = await CreatenotificationModel.findOneAndUpdate(
        { _id: id },
        { $set: data }
      );
      res.status(200).json({
        message: "Notification Updated Successfully",
        error: null,
        data: response,
      });
    }
  } catch {
    res.status(500).json({
      message: "Failer to update notification",
      error: "Internal server error",
      data: null,
    });
  }
};
const deleteNotification = async (req, res) => {
  try {
    const id = req.params.id;
    const notificationInstance = await CreatenotificationModel.find({
      _id: id,
    });
    if (notificationInstance.length == 0) {
      res.status(400).json({
        message: "Notification failed deleting",
        error: "information not deleted",
        data: null,
      });
    } else {
      const response = await CreatenotificationModel.findOneAndDelete({
        _id: id,
      });
      res.status(200).json({
        message: "Notification deleted Successfully",
        error: null,
        data: response,
      });
    }
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
