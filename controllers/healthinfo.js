import healthinfomodel from "../models/healthinfomodel.js";

const CreateHealthInfo = async (req, res) => {
  try {
    const HealthInfoInstance = new healthinfomodel({
      category: req.body.category,
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
    });
    let response = await HealthInfoInstance.save();
    res.status(200).json({
      message: "data saved successfully",
      error: null,
      data: response,
    });
  } catch (error) {
    console.log("there is an error from healthinfocontroller");
    res.send({ message: "failed to save the data" });
  }
};
const UpdateHealthInfo = async (req, res) => {
  const healthInfoId = req.params.id;
  const updates = req.body;
  let found = await healthinfomodel.find({ _id: healthInfoId });
  if (found.length == 0) {
    res.status(404).json({
      message: "information trying to update is not available",
      error: "information not found",
      data: null,
    });
  } else {
    let result = await healthinfomodel.findOneAndUpdate(
      { _id: healthInfoId },
      { $set: updates }
    );
    res.status(200).json({
      message: "data updated successfully",
      error: null,
      data: result,
    });
  }
};
const getHealthInfo = async (req, res) => {
  try {
    let found = await healthinfomodel.find({});
    if (found.length == 0) {
      res.status(404).json({
        message: "information are not available",
        error: "information not found",
        data: null,
      });
    } else {
      res.status(200).json({
        message: "data retrieved successfully",
        error: null,
        data: found,
      });
    }
  } catch (error) {
    console.log("there is an error from healthinfocontroller");
    res.send({ message: "failed to save the data" });
  }
};
const deleteHealthInfo = async (req, res) => {
  try {
    const healthInfoId = req.params.id;
    let found = await healthinfomodel.find({ _id: healthInfoId });
    if (found.length == 0) {
      res.status(404).json({
        message: "information trying to delete is not available",
        error: "information not found",
        data: null,
      });
    } else {
      let result = await healthinfomodel.findOneAndDelete({ _id: healthInfoId });
      res.status(200).json({
        message: "data delete successfully",
        error: null,
        data: result,
      });
    }
  } catch {
    console.log("there is an error from healthinfocontroller");
    res.send({ message: "failed to save the data" });
  }
};

export { CreateHealthInfo, UpdateHealthInfo, getHealthInfo, deleteHealthInfo };
