const fileControlles = require("../controlles/file")
const { singleFile } = require("../common/uploader")
const {  handleError , idValidator , passport , ApiEndpoints  , HandleValidatorError} = require("../common/routersImports")
const { FileValidator } = require("../middlewares/validators")
const router = require("express").Router()


// get Single Image View
router.get(ApiEndpoints.FileEndpoints.getSingleImageView  , passport.authenticate("userOradmin", {session: false}) ,
idValidator , fileControlles.getSingleImageView , handleError)
 
// get Single Image Download
router.get(ApiEndpoints.FileEndpoints.getSingleImageDownload  , passport.authenticate("userOradmin", {session: false}) ,
    idValidator , fileControlles.getSingleImageDownload , handleError)
      
// create Single Image
router.post(ApiEndpoints.FileEndpoints.createSingleImage,  passport.authenticate("userOradmin", {session: false}) ,
   singleFile("./public/images" , "image" )  , fileControlles.createSingleImage , handleError)
  
     

module.exports = router
