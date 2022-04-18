const UserControlles = require("../controlles/users")
const {  handleError , idValidator , passport , ApiEndpoints , HandleValidatorError} = require("../common/routersImports")
const router = require("express").Router()
const {SginupValidator , LoginValidator , emailValidator  , ImageValidator  , EditValidator , AccountSuspendedValidator, resetPasswordValidator} = require("../middlewares/validators")

// getall
router.get(ApiEndpoints.UserEndpoints.list , passport.authenticate("userOradmin", {session: false}) 
,  UserControlles.getAllUsers ,  handleError)

// count
router.get(ApiEndpoints.UserEndpoints.count , passport.authenticate("admin", {session: false}) 
,  UserControlles.getUsersCount ,  handleError)

// get me
router.get(ApiEndpoints.UserEndpoints.me , passport.authenticate("userOradmin", {session: false}) ,  UserControlles.getMe ,  handleError)


// delete
router.delete(ApiEndpoints.UserEndpoints.delete , passport.authenticate("admin", {session: false}), idValidator , UserControlles.deleteUser , handleError)

 
// login
router.post(ApiEndpoints.UserEndpoints.login, LoginValidator ,  HandleValidatorError , UserControlles.login)

// signup
router.post(ApiEndpoints.UserEndpoints.signup, SginupValidator, HandleValidatorError , UserControlles.signup)

// edit user
router.put(ApiEndpoints.UserEndpoints.edit , passport.authenticate("userOradmin", {session: false}) , EditValidator , idValidator, HandleValidatorError , UserControlles.editUser , handleError)

// edit image
router.put(ApiEndpoints.UserEndpoints.image , passport.authenticate("userOradmin", {session: false}) , ImageValidator , idValidator, HandleValidatorError , UserControlles.editImage , handleError)

// forgot password
router.put(ApiEndpoints.UserEndpoints.forgotPassword , emailValidator,  HandleValidatorError , UserControlles.forgotPasswordUser)

// confirm email
router.put(ApiEndpoints.UserEndpoints.confirmEmail , idValidator , UserControlles.confirmEmailUser)

// reset password
router.put(ApiEndpoints.UserEndpoints.resetPassword, passport.authenticate("userOradmin", {session: false}) , resetPasswordValidator, idValidator , HandleValidatorError , UserControlles.resetPasswordUser, handleError)

// Account Suspension
router.put(ApiEndpoints.UserEndpoints.suspension , passport.authenticate("admin", {session: false}) , AccountSuspendedValidator, idValidator , HandleValidatorError , UserControlles.Suspension , handleError)

module.exports = router