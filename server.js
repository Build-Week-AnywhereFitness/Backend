const express = require("express");


const server = express();

server.use(express.json());

const RegisterRouter = require('./routes/auth/register');
const LoginRouter = require('./routes/auth/login');
const UserRouter = require('./routes/users');

server.use("/register", RegisterRouter);
server.use("/login", LoginRouter);
server.use("/users", UserRouter);

server.get('/', (req, res) => {
  res.status(200).json("Server is up!");
});

module.exports = server;