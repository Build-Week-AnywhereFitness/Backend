const express = require("express");
const db = require("../../models/usersModel");
const { generateToken } = require("../../middleware/auth/generateToken");
const router = express.Router();



//Creat new user Endpoint
router.post("/", async (req, res) => {
  const{ username, password } = req.body;


  try {
    userData = await db.getUserByUsername(username);

    if(password === userData.password){

      const token = generateToken(userData);

      res.status.json({
        message: "You have logged in!",
        token,
        data: userData
      })
    }
    res.status(200).json("hello there!")
  } catch(error){
    res.status(500).json({
      message: "error getting user",
      error: error
    })
  }
});




module.exports = router;