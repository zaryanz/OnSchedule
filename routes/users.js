const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const router = Router();

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
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).send({ errors: errors.array() });
      return;
    }
    res.json({ message: "success" });
  }
);

module.exports = router;
