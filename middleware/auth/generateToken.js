const secrets = require("../../config/secrets")
const jwt = require("jsonwebtoken");

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: '1d',
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = {
  generateToken
}