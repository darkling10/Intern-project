const express= require("express")
const userController = require("../controller/usersController")
const route = express.Router();
const bodyParser = require("body-parser")

route.use(bodyParser.urlencoded({extended:false}))

//Route:/users/
route.get("/",(req,res)=>{
    res.send("Hiiiiiii")
})

route.post('/add',userController.userAdd)


//Route:/users/list
route.get("/list",userController.userList)


module.exports = route;