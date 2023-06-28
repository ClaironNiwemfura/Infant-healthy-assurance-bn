import CreateDoctorModel from "../models/doctormodel.js";
import bcrypt from "bcrypt";

const createdoctoraccount = async (req, res) => {
  try {
    const data = req.body;
    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(data.password, salt);
    console.log("reached here ...")
    data.password = hashedPassword;
    const savedUseremail = await CreateDoctorModel.findOne({
      email: data.email,
    });
    if (savedUseremail) {
      return res.send("Sorry email already exist");
    }
    const userInstance = new CreateDoctorModel({
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
      healthCenter: data.healthCenter,
    });
    const response = await userInstance.save();
    res.status(200).json({
      message: "Doctor Account Created Successfully",
      error: null,
      data: response,
    });
  } catch (error) {
    console.log("this is error:", error);
    res.status(500).json({
      message: "Failed",
      error: "Internal error server",
      data: "null",
    });
  }
};

export default createdoctoraccount;
