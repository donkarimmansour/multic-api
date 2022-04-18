const SubscribesControlles = require("../controlles/subscribe")
const { ApiEndpoints , HandleValidatorError , handleError , passport , idValidator} = require("../common/routersImports")
const router = require("express").Router()
const {emailValidator} = require("../middlewares/validators")

// getall
router.get(ApiEndpoints.SubscribeEndpoints.list , passport.authenticate("admin", {session: false})  
, SubscribesControlles.getAllSubscribes , handleError)

router.get(ApiEndpoints.SubscribeEndpoints.count , passport.authenticate("admin", {session: false}) 
,  SubscribesControlles.getSubCount , handleError)

// create
router.post(ApiEndpoints.SubscribeEndpoints.create  , emailValidator ,  HandleValidatorError , SubscribesControlles.createSubscribe )

// delete
router.delete(ApiEndpoints.SubscribeEndpoints.delete , passport.authenticate("admin", {session: false}), idValidator , SubscribesControlles.deleteSubscribe , handleError)

 
module.exports = router