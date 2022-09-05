const express = require("express");
const Users = require("../models/users");
var bcrypt = require("bcryptjs");

//Showing the list of Users
const userList = async (req, res) => {
  let data = await Users.find();
  res.json(data);
};

const userAdd = async (req, res) => {
  let { name, email, phone, password } = req.body;
  let data = new Users({ name, email, phone, password });
  let response = await data.save();

  let myToken = await data.getAuthToken();

  res.status(200).json({ message: "ok", token: myToken });
};

//USer Login
const userLogin = async (req, res) => {
  //If request has empty fields pass error
  if (!req.body.email || !req.body.password) {
    res
      .status(301)
      .json({ message: "Error", message: "Please enter email/password" });
  }

  let user = await Users.findOne({ email: req.body.email });
  var responseType = {
    message: "Ok",
  };

  if (user) {
    var match = await bcrypt.compare(req.body.password, user.password);
    console.log(match);
    if (match) {
      let myToken = await user.getAuthToken();
      responseType.message = "Login Successful";
      responseType.token = myToken
    } else {
      responseType.token = "ok";
    }
  } else {
    responseType.message = "Invalid Email ID";
  }

  res.status(200).json({ message: "ok", data: responseType });
};
// Exporting all the functions
module.exports = {
  userList,
  userAdd,
  userLogin,
};
