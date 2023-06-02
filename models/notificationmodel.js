import mongoose from "mongoose";

const CreatenotificationModel = new mongoose.Schema({
  sendername: {
    type: String,
    required: "name is required",
  },
  message: {
    type: String,
    required: "email is required",
  },
});

export default mongoose.model("notification", CreatenotificationModel);
