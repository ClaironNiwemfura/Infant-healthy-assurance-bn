import CreateDoctorModel from "../models/doctormodel.js";

const doctoraccount = async (req, res) => {
  try {
    let data = req.body;
    const doctorInstance = new CreateDoctorModel({
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
      healthCenter: data.healthCenter,
    });
    doctorInstance.save().then((data) => {
      res.send(data);
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed",
      error: "Internal error server",
      data: "null",
    });
  }
};

export default doctoraccount;
