const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const router = Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// @@REGISTRATION ROUTE
router.post(
  "/",
  [
    check("username", "Username must be atleast 6 characters").isLength({
      min: 6,
    }),
    check("email", "Please enter a valid email address").isEmail(),
    check("password", "Password must be atleast 6 characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    // validation error handling
    if (!errors.isEmpty()) {
      res.status(422).send({ errors: errors.array() });
      return;
    }
    const { email, password, username } = req.body;

    // see if user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send({ message: "Email already in use" });
    }
    user = await User.findOne({ username });
    if (user) {
      return res.status(400).send({ message: "Username already in use" });
    }

    user = new User(req.body);

    // password hashing
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    console.log(user);
    // saving user to db
    await user.save((err) => {
      if (err) return err;
      console.log("data saved");
      console.log(user);
    });

    const payload = {
      user: {
        id: user.id,
      },
    };

    console.log(payload);
    jwt.sign(
      payload,
      process.env.jwt,
      (err, token) => {
        if (err) throw err;
        console.log(token);
        res.json({ token });
      },
      { expiresIn: 3600 }
    );
  }
);

module.exports = router;
