const express = require("express")
const app = express()
const morgan = require("morgan")
const passport = require("passport")
const DB = require("./database/db")
const cors = require("cors");
const { Host } = require("./common/apiEndpoints")

//env file
require("dotenv").config()

//database initialize
DB();

//development
if (app.get("env") == "development") {
    app.use(morgan("dev"))
}

const corsOptions = {
   origin : `${Host.FRONTEND}`
}  
 



//decoded data
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use( cors() );


//passport initialize
require("./config/passport")
app.use(passport.initialize());

module.exports = {app }
