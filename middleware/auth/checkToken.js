let jwt = require('jsonwebtoken');
const config = require('../../config/secrets');

let checkToken = (req, res, next) => {
  let token = req.headers['authorization'];

  if (token) {
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Token is not valid'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.json({
      success: false,
      message: 'token was not supplied'
    });
  }
};

module.exports = {
  checkToken: checkToken
}
