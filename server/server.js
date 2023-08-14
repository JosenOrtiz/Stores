//import dependencies
const express =  require("express")
//const Routes = require('.')
const app = express()
const cors = require("cors")
const mongoose = require('mongoose')
//config
require("./configs/mongoose.config")

app.use(cors()), app.use(express.json(), express.urlencoded({extended:true}))
//routes
const Routes = require("./routes/stores.route")
Routes(app)


//listen
app.listen(8000, ()=>console.log("Listening to port 8000"))