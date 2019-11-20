const express = require("express");
const db = require("../../db");

const router = express.Router();


//Get 
router.get("/:id", (req, res) => {
  try {
    res.status(200).json("hello there!")
  } catch(error){
    res.status(500).json({
      message: "error getting user",
      error: error
    })
  }
})


//Creat new user Endpoint
router.post("/", (req, res) => {
  const { first_name, last_name, username, password, email, authCode} = req.body;

  const role = 'client';

  const newUser = { id: uuid(), first_name, last_name, username, password, email, role}


  try {
    res.status(200).json("hello there!")
  } catch(error){
    res.status(500).json({
      message: "error getting user",
      error: error
    })
  }
})


module.exports = router;