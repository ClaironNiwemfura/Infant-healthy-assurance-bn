import newappointment from "../models/newappointment.js"

const createNappointment= async(req, res)=>{

    try {
        const data=req.body;
        const nappointmentInstance= new newappointment({
          doctorname: data.doctorname,
          description: data.description,
          appointmentdate:data.appointmentdate,
       
      });
      let response = await nappointmentInstance.save()
      res.status(200).json({
        message:"This is the new appointment",
        data:response
      })
    } catch (err) {
      console.log("Error occured", err);
      res.status(500).json({
        message: "Error ocured"
      })
    }
};
const readNappointment= async(req, res)=>{

    try {
        const data=req.body;
        const nappointmentInstance= new newappointment({
          doctorname: data.doctorname,
          description: data.description,
          appointmentdate:data.appointmentdate,
       
      });
      let response = await nappointmentInstance.save()
      res.status(200).json({
        message:"Appointment is made",
        data:response
      })
    } catch (err) {
      console.log("The error occured", err);
      res.status(500).json({
        message: "Failed to get appointment because of error"
      })
    }
};
const updateNappointment= async(req, res)=>{

    try {
        const data=req.body;
        let appointmentId = data.id
        let response= await newappointment.find(appointmentId)
        if(response==0){
                res.status(404).json({
                    message:"Appointment not possible ",
                
                })
        }
        else{
        let response= await newappointment.findOneAndUpdate(
          {_id:appointmentId},
          {$set:data},
          {new:true} 
       
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
        const data=req.body;
        let appointmentId = req.query.id
        const appointment= await appointment.findById(appointmentId)
        if(!appointment){
                res.status(404).json({
                    message:"appointment not found",
                    error: null,
                    data: null
                })
        }
       
        const deletedAppointment= await appointment.deleteAppointment(
          {_id:appointmentId},
          {$set:data},
          {new:true} 
       
      );      
      res.status(200).json({
        message:"The appointment is deleted",
        data:deleteappointment
      })
    } catch (err) {
      console.log("Error occured to delete", err);
      res.status(500).json({
        message: "Failed to delete the appointment"
      })
    }
};

export {createNappointment, updateNappointment, readNappointment, deleteAppointment};