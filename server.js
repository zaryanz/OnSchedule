const express = require("express");
const cors = require("cors");
const users = require("./routes/users");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", users);

app.listen(5000, () => console.log("server running"));
