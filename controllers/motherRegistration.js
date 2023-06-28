import motherModel from "../models/motherModel.js";
import bcrypt from 'bcrypt'


const motherRegister= async(req,res)=>{
  try{
   const data= req.body;
    const check= await motherModel.findOne({patientId: data.patientId})
    if(check){
        res.status(409).json({
            message: "Account already exists"
        })
    }
    const motherInstance= new motherModel({
        mother: data.mother,
        father: data.father,
        motherAge: data.motherAge,
        patientId: data.patientId,
        healthCondition: data.healthCondition,
        province:data.province,
        cell: data.cell,
        sector: data.sector,
        district: data.district,
        motherTel: data.motherTel,
        fatherTel: data.fatherTel,
        emergencyTel: data.emergencyTel,
        dateArrival: data.dateArrival,
        pregnancyDuration: data.pregnancyDuration,
        babyname: data.babyname,
        babyage: data.babyage,
        babygender:data.babygender

    });
    console.log("mother registered", data);
    const result= await motherInstance.save();

    res.status(200).json({
      message: "Account created successfully",
      error: "Error creating the account",
      data: result
    })
  }  
  catch(error){
    res.status(500).json({
        message: "Error in the controler",
        error: "Error in the motherRegistration controller",
        data: null
    })
    console.log("This is the error",error);
  }

}

export default motherRegister
