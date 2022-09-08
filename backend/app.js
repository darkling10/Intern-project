const express = require("express");
const app = express();
const port = 8080;
const path = require("path")
let cors = require("cors");
const bodyParser = require('body-parser')

require("dotenv").config({
  path:path.join(__dirname,".env")
})



//Database Connection
require("./config/db")


//Middlewares
app.use("/users", require("./routes/usersRoute"));
app.use(express.urlencoded({
  extended: true
}));
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post("/demo",(req,res)=>{
  console.log(req.body)
  res.send()
})

app.get("/demo",(req,res)=>{
  res.status(200).json({info:"Hiiii plz work"})
})

// Listening to the server
app.listen(process.env.PORT, (req, res) => {
  console.log("Listening on port " + port);
});
