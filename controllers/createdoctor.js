import CreateDoctorModel from "../models/doctormodel.js";
import bcrypt from "bcrypt";

const createdoctoraccount = async (req, res) => {
  try {
    const data = req.body;
    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(data.password, salt);
    req.body.password = hashedPassword;
    const savedUseremail = await CreateDoctorModel.findOne({
      email: data.email,
    });
    const savedUsername = await CreateDoctorModel.findOne({
      name: data.name,
    });
    if (savedUseremail) 
      res.status(409).json({
        message: "Sorry email already exist",
      });
    } else if (savedUsername) {
      res.status(409).json({
        message: "Sorry name already exist",
      });
    } else {
      res.status(200).json({
        message: "successfull created account",
        data: data,
      });
    }
    const userInstance = new CreateDoctorModel({
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
      healthCenter: data.healthCenter,
    });
    userInstance.save();
  } catch (err) {
    res.status(500).json({
      message: "Failed",
      error: "Internal error server",
      data: "null",
    });
    console.log("this is error:", err);
  }
};

export default createdoctoraccount;
