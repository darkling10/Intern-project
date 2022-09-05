const express = require("express");
const Users = require("../models/users");

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

  res.status(200).json({ message: "ok",token:myToken });
};

// Exporting all the functions
module.exports = {
  userList,
  userAdd,
};
