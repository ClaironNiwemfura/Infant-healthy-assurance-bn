import mongoose from 'mongoose'


const motherSchema= new mongoose.Schema({
    mother:{
        type: String,
        required: true
    },
    father:{
        type: String,
        required: true
    },
    motherAge:{
        type: Number,
        required: true
    },
    patientId:{
     type: String,
     required: true
    },
    healthCondition:{
        type: String,
        required: true
     },
    cell:{
        type: String,
        required: true
    },
    sector:{
        type: String,
        required: true
    },
    district:{
        type: String,
        required: true
    },
    motherTel:{
        type: String,
        required: true
    },
    fatherTel:{

    },
    emergencyTel:{
        type: String,
        required: true
    },
    dateArrival:{
        type: String,
        required: true
    }

})

export default mongoose.model("Mother registration", motherSchema)