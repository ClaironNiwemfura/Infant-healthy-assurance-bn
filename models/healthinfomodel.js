import mongoose from "mongoose";

const healthinfoschema = new mongoose.Schema({
    category:{
        type:String,
        required:"category is required"
    },
    title:{
        type:String,
        required:"category is required"
    },
    content:{
        type:String,
        required:"category is required"
    },
    image:{
        type:String
    },
    author:{
        type:String
    }
});

export default mongoose.model("healthinfo",healthinfoschema)