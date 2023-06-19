import twilio from "twilio"
const createsms=async(req,res)=>{
    try{
        const client =new twilio("AC89cc8c3f0bf185f72032a7bf01e7df93","ff4ee49845cedebeec42dad684173bc0")
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