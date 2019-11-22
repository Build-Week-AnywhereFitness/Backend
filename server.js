const express = require("express");
const cors = require("cors");


const server = express();
const {checkToken} = require("./middleware/auth/checkToken");

server.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
  })
);

server.use(express.json());

const RegisterRouter = require('./routes/auth/register');
const LoginRouter = require('./routes/auth/login');
const UserRouter = require('./routes/users');
const ClassRouter = require('./routes/classes');
const clientWorkoutsRouter = require('./routes/clientWorkouts');


server.use("/register", RegisterRouter);
server.use("/login", LoginRouter);
server.use("/users", checkToken, UserRouter);
server.use("/", checkToken, ClassRouter);
server.use("/", checkToken, clientWorkoutsRouter);

server.get('/', (req, res) => {
  res.status(200).json("Server is up!");
});

module.exports = server;