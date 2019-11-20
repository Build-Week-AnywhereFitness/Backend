const db = require("../../db");

const addUser = user => {
  return db("users")
  .insert(user)
  .returning("*");
};

const getUserById = async id => {
  const searchedUser = await db("users")
  .where({id})
  .first();
  return (user = {...searchedUser, password: ''});
};

const getUserByUsername = username => {
  return db("users")
  .where({username})
  .first()
  .returning("*");
}



module.exports = {
  addUser,
  getUserById,
  getUserByUsername
};