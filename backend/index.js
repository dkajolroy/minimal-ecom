const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const { mongoConnect } = require("./Config/DBConnect")

//config
const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()
mongoConnect()

//import router
const AuthRoute = require("./Routes/AuthRoutes")
const ProductRoute = require("./Routes/ProductRoute")

//config router
app.use("/", AuthRoute)
app.use("/", ProductRoute)


//Listen server
app.listen(process.env.PORT, () => {
    console.log("Server Start")
})