import mongoose, { Schema } from "mongoose";

const CreateDoctorModel = new mongoose.Schema({
  name: {
    type: String,
    required: "name is required",
  },
  email: {
    type: String,
    required: "email is required",
  },
  password: {
    type: String,
    required: "Password is required",
  },
  role: {
    type: String,
    required: "role is required",
  },
  healthCenter: {
    type: String,
    required: "hospital is required",
  },
});

export default mongoose.model("user", CreateDoctorModel);
