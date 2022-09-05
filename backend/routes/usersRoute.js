const express = require("express");
const userController = require("../controller/usersController");
const route = express.Router();
const bodyParser = require("body-parser");

route.use(bodyParser.urlencoded({ extended: false }));
var jwt = require("jsonwebtoken");
var token = "hjhgjhgjg ";

const jwtAuth = (req, res, next) => {
  token = req.headers.authorization;
  token = token.split(" ")[1];
  jwt.verify(token, process.env.JWTSECRETKEY, function (err, decoded) {
    if (err) {
      res.send({ message: "invalid token" });
    } else {
      next();
    }
  });
};

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.JWTSECRETKEY, (err, user) => {
      console.log(err)
      if (err) return res.sendStatus(403)
      req.user = user
      next()
    })
  }


//Route:/users/
route.get("/", (req, res) => {
  res.send("Hiiiiiii");
});

route.post("/add", userController.userAdd);

//Route:/users/list
route.get("/list",authenticateToken, userController.userList);

route.post("/login", userController.userLogin);

route.delete("/logout",userController.userLogout)

module.exports = route;
