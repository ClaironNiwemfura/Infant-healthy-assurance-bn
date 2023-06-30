import twilio from "twilio"
const createsms=async(req,res)=>{
    try{
        const client =new twilio(process.env.TWILIO_ACCOUNT,process.env.TWILIO_KEY)
        const response = await client.messages.create({
            from:"+13614055837",
            to:req.body.telephone,
            body:req.body.message
        });
        res.status(200).json({
            message:"you have sent the message",
            data:response,
        })
    }catch(error){
       console.log("error",error)
    }
}
export default createsms;