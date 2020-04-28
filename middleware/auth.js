const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("auth-token");

  if (!token) {
    res.status(401).send({ error: "No token found" });
  }

  try {
    jwt.verify(token, process.env.jwt, (result) => {
      console.log(result);
      next();
    });
  } catch (err) {
    res.status(401).send({ message: "invalid token" });
  }
};

module.exports = auth;
