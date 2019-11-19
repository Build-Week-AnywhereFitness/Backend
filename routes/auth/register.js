const express = require("express");
const uuid = require("uuid/v4");

const router = express.Router();



//Creat new user Endpoint
router.post("/", (req, res) => {
  const { first_name, last_name, username, password, email, authCode} = req.body;

  const role = '';

  //Will refactor as middleware
  if(authCode === 'AFcoach'){
    role = 'coach'
  }else{
    role = 'client'
  }


  try {
    const newUser = { id: uuid(), first_name, last_name, username, password, email, role}
    
  } catch(error){
    res.status(500).json({
      message: "error getting user",
      error: error
    })
  }
})


module.exports = router;