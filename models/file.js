const mongoose = require("mongoose")

const fileSchema = mongoose.Schema({
    imageUrl: {
        type: String,
        required: false,
        trim: true,
    } ,
    createdAt: {
        type: Date,
        default: Date.now()
    }
})


const fileRquest = mongoose.model("file", fileSchema)



module.exports = fileRquest