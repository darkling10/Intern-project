const express = require("express");
const app = express();
const port = 3000;
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

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000/registration"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Listening to the server
app.listen(process.env.PORT, (req, res) => {
  console.log("Listening on port " + port);
});
