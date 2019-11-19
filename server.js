const express = require("express");


const server = express();

server.use(express.json());

const RegisterRouter = require('./routes/auth/register');
const UserRouter = require('./routes/users');

server.user("/register", RegisterRouter);
server.use("/users", UserRouter);

server.get('/', (req, res) => {
  res.status(200).json("Server is up!");
});

module.exports = server;