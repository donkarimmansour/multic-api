const {check} = require("express-validator");

const emailValidator = [
   check("email").notEmpty().withMessage("email field is required") ,
   check("email").isEmail().withMessage("email must be email") , ]

const ContactValidator = [
   check("firstname").notEmpty().withMessage("firstname field is required") ,
   check("lastname").notEmpty().withMessage("lastname field is required") ,
   check("comment").notEmpty().withMessage("comment field is required") ,
   check("email").notEmpty().withMessage("email field is required") ,
   check("email").isEmail().withMessage("email must be email") ,
]



const SginupValidator= [
   check("firstname").notEmpty().withMessage("firstname field is required") ,
   check("lastname").notEmpty().withMessage("lastname field is required") ,
   check("email").notEmpty().withMessage("email field is required") ,
   check("email").isEmail().withMessage("email must be email") ,
   check("password").notEmpty().withMessage("password field is required") ,
   check("confirmpassword").notEmpty().withMessage("confirm password field is required") ,
   check("confirmpassword").custom((value , {req}) => {
       if(value != req.body.password) throw new Error("confirm password must be the same as password")
       else return  true
   }) ,
   check("gender").isIn(["male" , "femail"]).withMessage("gender is required"),
]

const EditValidator= [
    check("firstname").notEmpty().withMessage("firstname field is required") ,
    check("lastname").notEmpty().withMessage("lastname field is required") ,
    check("email").notEmpty().withMessage("email field is required") ,
    check("email").isEmail().withMessage("email must be email") ,
 ]

 const ImageValidator= [
   check("image").notEmpty().withMessage("image field is required") ,
]


const LoginValidator = [
    check("email").notEmpty().withMessage("email field is required") ,
    check("email").isEmail().withMessage("email must be email") ,
    check("password").notEmpty().withMessage("password field is required") ,
]

 const AccountSuspendedValidator = [
    check("isAccountSuspended").notEmpty().withMessage("type is required"),
 ]

 const resetPasswordValidator = [
   check("oldpassword").notEmpty().withMessage("old password is required"),
   check("password").notEmpty().withMessage("password is required"),
]


const CvValidator= [
   check("type").notEmpty().withMessage("type field is required") ,
   check("presentation").notEmpty().withMessage("presentation field is required") ,
   check("userId").notEmpty().withMessage("user id field is required") ,
   check("cvId").notEmpty().withMessage("cv id field is required") ,
   check("certificate").notEmpty().withMessage("certificate field is required") ,
   check("gender").notEmpty().withMessage("gender field is required") ,
   check("birthday").notEmpty().withMessage("birthday field is required") ,
]

const EditCvValidator= [
   check("type").notEmpty().withMessage("type field is required") ,
   check("presentation").notEmpty().withMessage("presentation field is required") ,
   check("cvId").notEmpty().withMessage("cv id field is required") ,
   check("certificate").notEmpty().withMessage("certificate field is required") ,
   check("gender").notEmpty().withMessage("gender field is required") ,
   check("birthday").notEmpty().withMessage("birthday field is required") ,
]


module.exports = {
    SginupValidator ,
    LoginValidator ,
    emailValidator ,
    AccountSuspendedValidator ,
    EditValidator ,
    ContactValidator , 
    ImageValidator ,
    resetPasswordValidator ,
    CvValidator ,
    EditCvValidator
}