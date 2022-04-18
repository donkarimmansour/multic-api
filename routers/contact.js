const ContactsControlles = require("../controlles/contact")
const { ApiEndpoints , HandleValidatorError , handleError , passport , idValidator} = require("../common/routersImports")
const router = require("express").Router()
const {ContactValidator} = require("../middlewares/validators")

// getall
router.get(ApiEndpoints.ContactEndpoints.list , passport.authenticate("admin", {session: false})  
,  ContactsControlles.getAllContacts , handleError)

// count
router.get(ApiEndpoints.ContactEndpoints.count , passport.authenticate("admin", {session: false}) 
,  ContactsControlles.getConCount , handleError)

// create
router.post(ApiEndpoints.ContactEndpoints.create  , ContactValidator ,  HandleValidatorError , ContactsControlles.createContact )

// delete
router.delete(ApiEndpoints.ContactEndpoints.delete , passport.authenticate("admin", {session: false}), idValidator , ContactsControlles.deleteContact , handleError)


module.exports = router