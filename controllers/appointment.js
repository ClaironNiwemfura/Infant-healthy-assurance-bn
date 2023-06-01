import modelappointment from "../models/modelappointment.js";

const createAppointment = async(req, res) => { 
  
    try {
        const data=req.body;
        const appointmentInstance= new modelappointment({
          doctorname: data.doctorname,
          description: data.description,
          appointmentdate:data.appointmentdate,
       
      });
      let response = await appointmentInstance.save()
      res.status(200).json({
        message:"you have registered",
        data:response
      })
    } catch (err) {
      console.log("Error occured", err);
      res.status(500).json({
        message: "Error ocured"
      })
    }
  };
  export default createAppointment;
  
   