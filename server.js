const express = require("express");


const server = express();

server.use(express.json());

const UserRouter = require('./routes/users');

server.use("/users", UserRouter);

server.get('/', (req, res) => {
  res.status(200).json("Server is up!");
});

module.exports = server;