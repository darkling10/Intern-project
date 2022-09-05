const express = require("express");
const app = express();
const port = 3000;
const path = require("path")

require("dotenv").config({
  path:path.join(__dirname,".env")
})



//Database Connection
require("./config/db")


//Middlewares
app.use("/users", require("./routes/usersRoute"));


// Listening to the server
app.listen(process.env.PORT, (req, res) => {
  console.log("Listening on port " + port);
});
