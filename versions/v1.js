const { ApiEndpoints } = require("../common/apiEndpoints")
const { app  } = require("../server")

const users = require("../routers/users")
const file = require("../routers/file")
const subscribe = require("../routers/subscribe")
const contact = require("../routers/contact")
const cv = require("../routers/cv")
 

app.use(ApiEndpoints.UserEndpoints.route, users)
app.use(ApiEndpoints.FileEndpoints.route, file)
app.use(ApiEndpoints.SubscribeEndpoints.route, subscribe)
app.use(ApiEndpoints.ContactEndpoints.route, contact)
app.use(ApiEndpoints.CvEndpoints.route, cv)

app.use((req, res, next) => {
    res.status(404).json("Api not found") 
})


app.listen(process.env.PORT || 3001 , () => {
    console.log("server start")
})