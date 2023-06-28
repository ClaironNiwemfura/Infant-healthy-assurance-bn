import modelappointment from "../models/modelappointment.js";
import motherModel from "../models/motherModel.js";
import twilio from "twilio";

const sendsms = async(data) =>{
    try{
        const client =new twilio("AC89cc8c3f0bf185f72032a7bf01e7df93","fce5b8740f5e87e8444f99ca0364ae62");
        const response = await client.messages.create(data);
        return response;

    }catch(err){
        console.log("error", err)
    }
}

const sendBroadcast = async(req, res) => { 
  
    try {

        const data=req.body;
        let category = data.category;
        let ageRange = data.ageRange;
        let message = data.message;
        let query = {pregnancyDuration:category};
        if(category){
            const findCategory = await motherModel.find(query);
            if(findCategory.length){
                for(let i=0; i<1; i++){
                    let data = {
                        from:"+13614055837",
                        to:findCategory[i].motherTel,
                        body:message
                    }
                    await sendsms(data);
                }
                res.status(200).json({
                    message:"The message has been sent successfully"
                })
            }else{
                console.log("data....", findCategory, data,query);
                res.status(404).json({
                    message:"No user in that category was found"
                });
            }
        }else{
            res.status(400).json({
                message: "Bad request, check your inputs"
            })

        }
       
    } catch (err) {
      console.log("Error occured", err);
      res.status(500).json({
        message: "Error ocured"
      })
    }
  };

  export {sendBroadcast};
  
   