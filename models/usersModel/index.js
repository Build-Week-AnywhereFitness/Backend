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
};

const updateUserById = (id, changes) => {

}

const deleteUserById = id => {


}


module.exports = {
  addUser,
  getUserById,
  getUserByUsername,
  updateUserById,
  deleteUserById
};