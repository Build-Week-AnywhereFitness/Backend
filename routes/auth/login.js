const express = require("express");
const uuid = require("uuid/v4");

const router = express.Router();



//Creat new user Endpoint
router.post("/", (req, res) => {
  const { first_name, last_name, username, password, email, authCode} = req.body;

  

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