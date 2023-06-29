import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  doctorname: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  appointmentdate: {
    type: String,
    required: true,
  },
  patientId:{
    type:Number,
    required: true,
  }
});
export default mongoose.model("appointment", appointmentSchema);
