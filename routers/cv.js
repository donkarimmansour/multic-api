const CvsControlles = require("../controlles/cv")
const { ApiEndpoints , HandleValidatorError , handleError , passport , idValidator} = require("../common/routersImports")
const router = require("express").Router()
const {CvValidator, EditCvValidator} = require("../middlewares/validators")

// getall
router.get(ApiEndpoints.CvEndpoints.list , passport.authenticate("admin", {session: false})  
,   CvsControlles.getAllCvs , handleError)

// count
router.get(ApiEndpoints.CvEndpoints.count , passport.authenticate("admin", {session: false}) 
,  CvsControlles.getConCount , handleError)

// create
router.post(ApiEndpoints.CvEndpoints.create  , CvValidator ,  HandleValidatorError , CvsControlles.createCv )

// edit
router.put(ApiEndpoints.CvEndpoints.edit , passport.authenticate("userOradmin", {session: false}), EditCvValidator , HandleValidatorError , CvsControlles.editCv , handleError)

// delete
router.delete(ApiEndpoints.CvEndpoints.delete , passport.authenticate("admin", {session: false}), idValidator , CvsControlles.deleteCv , handleError)


module.exports = router