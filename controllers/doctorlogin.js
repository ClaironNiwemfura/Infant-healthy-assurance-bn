import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import CreateDoctorModel from "../models/doctormodel.js";


dotenv.config();



const loginDoctor = async (req,res)=>{
    try{
        const data = req.body;
        console.log("req.body",req.body)
        let { email, password } = data;
        email ? email = data.email : email = data.name;
        const doctor = await CreateDoctorModel.findOne({ email:email});
        console.log("hellooooooo", doctor,data);
        if (doctor){
            let doctorId = doctor._id;
            let compare = await bcrypt.compare(password,doctor.password);
            if (compare==true){
                let token =jwt.sign({id:doctorId},process.env.ACCESS_TOKEN_SECRET)
                return res.json({
                    message:"your password is true",
                    token: token
                }); 
            }else{
                return res.status(400).json({
                    message:"your password is not true"
                });  
            }
        }else{
            return res.status(400).json({
                message:"user not found "
            });
        }
    }catch(error){
        res.status(500).json({
            message: "Error occurred",
          });
    }

}
export default loginDoctor;