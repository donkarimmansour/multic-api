const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const UserSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique : true
    },
    image: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        trim: true,
        default : "620d37c4230c0b66f9b191c3" ,
        ref : "file"
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    rule: { 
        type: String,
        required: false,
        enum : ["admin" , "user"] ,
        default : "user"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    } ,
    isAccountSuspended: {
        type: Boolean,
        default: false
    }
})

// hash Password
UserSchema.methods.hashPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

// compare Password
UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}

const UsersRquest = mongoose.model("user", UserSchema)



module.exports =  UsersRquest