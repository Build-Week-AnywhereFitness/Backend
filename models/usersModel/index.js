const db = require("../../db");

const addUser = user => {
  return db("users")
  .insert(user)
  .returning("*")
};



module.exports = {
  addUser
};