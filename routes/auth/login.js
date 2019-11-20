const express = require("express");
const { generateToken } = require("../../middleware/auth/generateToken");
const router = express.Router();
const db = require("../../models/usersModel");



//Creat new user Endpoint
router.post("/", async (req, res) => {
  const{ username, password } = req.body;


  try {
    const userData = await db.getUserByUsername(username);

    if(password === userData.password){
      
      const foundUser = {...userData, password: ''}

      //need to fix token generation, getting error
      const token = generateToken(userData);

      res.status(200).json({
        message: "You have logged in!",
        token: token, 
        data: foundUser
      })
    }
  }catch(error){
    res.status(500).json({
      message: "error getting user",
      error: error
    })
  }
});




module.exports = router;