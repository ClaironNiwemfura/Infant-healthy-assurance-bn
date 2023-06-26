// var sid ="AC89cc8c3f0bf185f72032a7bf01e7df93";
// var auth_token="42697f0f3059c64a5cc545e6ed22df2b";
import twilio from "twilio"


const client =new twilio("AC89cc8c3f0bf185f72032a7bf01e7df93","42697f0f3059c64a5cc545e6ed22df2b")
client .messages.create({
    from:"+13614055837",
    to:"+250785396963",
    body:"this message is for testing"
})
.then((res)=>(console.log("message has already been sent")))
.catch((Error)=>(console.log("Error:", error)))


