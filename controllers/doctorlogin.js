import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"


dotenv.config();



const loginDoctor = async (req,res)=>{
    try{
        const data = req.body;
        const { email, password } = data;
        const doctor = await doctorModel.findOne({ email:email});
       
        if (user){
            let doctorId = doctor._id;
            let compare = await bcrypt.compare(password,doctor.password);
            if (compare==true){
                let token =jwt.sign({id:doctorId},process.env.ACCESS_TOKEN_SECRET)
                return res.json({
                    message:"your password is true",
                    token: token
                }); 
            }else{
                return res.json({
                    message:"your password is not true"
                });  
            }
            return res.json({
                message:"you have logged in successfully"
            });
        }else{
            return res.json({
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