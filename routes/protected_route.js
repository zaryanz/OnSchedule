const { Router } = require("express");
const router = Router();
const authMW = require("../middleware/auth");

router.get("/", authMW, (req, res) => res.send("Protected"));

module.exports = router;
