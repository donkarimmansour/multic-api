const mongoose = require("mongoose")

const CvSchema = mongoose.Schema({
    type: {
        type: String,
        required: true,
        trim: true,
    },
    presentation: {
        type: String,
        required: true,
        trim: true,
    },
    certificate: {
        type: String,
        required: true,
        enum: [true , false],
    },
    certificateName: {
        type: String,
        required: false,
         default : "..."
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref : "user"
    },
    cvId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref : "file"
    },
    gender: { 
        type: String,
        required: true,
        enum : ["male" , "female"] ,
    },
    birthday: {
        type: Date,
        required: true,
        default: Date.now()
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
})


const CvsSchema = mongoose.model("cv", CvSchema)



module.exports =  CvsSchema