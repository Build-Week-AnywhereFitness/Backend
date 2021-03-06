const express = require("express");
const uuid = require("uuid/v4");
const router = express.Router();
const db = require("../../models/usersModel");
const bcrypt = require("bcryptjs");



//Creat new user Endpoint
router.post("/", async (req, res) => {
  const { first_name, last_name, username, password, email, authCode} = req.body;


  const passwordHash = bcrypt.hashSync(password, 10)

  let role = '';

  //Will refactor as middleware
  if(authCode === 'AFcoach'){
    role = 'coach'
  }else{
    role = 'client'
  }



  try {
    //Need to implement bcryptjs
    const newUser = { id: uuid(), first_name, last_name, username, password: passwordHash, email, role}

    const userData = await db.addUser(newUser);

    userData.password = '';

    res.status(201).json({data: userData, message: "Congratulations! Your account has been created!"})

  } catch(error){
    res.status(500).json({
      message: "error, could not create account.",
      error: error
    })
  }
})


module.exports = router;