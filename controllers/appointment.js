import modelappointment from "../models/modelappointment.js";
import { sendsms } from "./broadcast.js";

const createAppointment = async(req, res) => { 
  
    try {
        const data=req.body;
        const appointmentInstance= new modelappointment({
          doctorname: data.doctorname,
          description: data.description,
          appointmentdate:data.appointmentdate,
          motherTel: data.motherTel
      });
      let response = await appointmentInstance.save()
      let sms = {
        from:"+13614055837",
        to:data.motherTel,
        body:`Mwiriwe neza mubyeyi, taliki ${data.appointmentdate} mufitanye gahunda na Muganga ${data.doctorname}. Murakoze!`
    }
      await sendsms(sms);
      res.status(200).json({
        message:"The appointment is registered",
        data:response
      })
    } catch (err) {
      console.log("Error occured", err);
      res.status(500).json({
        message: "Error ocured"
      })
    }
  };
  const readAppointment= async(req, res)=>{

    try {
        const datafound=await modelappointment.find({});
        if(datafound.length==0){
          res.status(404).json({
            message:"No data found",
            data:null,
        });
        }
        else{
          res.status(200).json({
            message:"Appointment is made",
            data:datafound,
          })
        }       
      
    } catch (err) {
      console.log("The error occured", err);
      res.status(500).json({
        message: "Failed to get appointment because of error"
      })
    }
};
const updateAppointment= async(req, res)=>{

    try {        
        const appointmentId = req.params.id;
        const updateinfo=req.body;
        let response= await modelappointment.find({_id:appointmentId})
        if(response.length==0){
                res.status(404).json({
                    message:"Appointment not possible ",
                    error: "Info not found",
                    data: null,
                
                })
        }
        else{
        let response= await modelappointment.findOneAndUpdate(
          {_id:appointmentId},
          {$set:updateinfo} 
       
        );      
      res.status(200).json({
        message:"The appointment is updated",
        data:response
      })
    }
    } catch (err) {
      console.log("Error occured to update", err);
      res.status(500).json({
        message: "Failed to update because of error"
      })
    }
};
const deleteAppointment= async(req, res)=>{

    try {
        let appointmentId = req.params.id
        const appointment= await modelappointment.findById(appointmentId)
        if(!appointment){
                res.status(404).json({
                    message:"Appointment is not found",
                    error: null,
                    data: null
                })
        }
       else{
        let response= await modelappointment.deleteOne({_id:appointmentId})             
      res.status(200).json({
        message:"The appointment is deleted",
        data:response
      });
    }
    } catch (err) {
      console.log("Error occured to delete", err);
      res.status(500).json({
        message: "Failed to delete the appointment"
      })
    }
};
  export {createAppointment, updateAppointment, readAppointment, deleteAppointment};
  
   