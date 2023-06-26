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
     province:{
        type:string,
     },
    cell:{
        type: String,
        required: true
    },
    sector:{
        type: String
    },
    district:{
        type: String,
        required: true
    },
    motherTel:{
        type: Number,
        required: true
    },
    fatherTel:{
       type: Number,
        required: true
    },
    emergencyTel:{
        type: String,
        required: true
    },
    dateArrival:{
        type: String,
        required: true
    },
    pregnancyDuration:{
        type: Number,
    },
    babyname:{
        type: String,
    },
    babyage:{
        type: number,
    },
    babygender:{
        type: String,
    },

})

export default mongoose.model("Mother registration", motherSchema)