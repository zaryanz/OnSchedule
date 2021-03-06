const express = require("express");
const cors = require("cors");
const users = require("./routes/users");
const mongoose = require("mongoose");
const app = express();
const protected = require("./routes/protected_route");

require("dotenv").config();

// db connect
mongoose.set("useCreateIndex", true);

mongoose
  .connect(process.env.mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("db connected succesfully"));

app.use(cors());
app.use(express.json());
app.use("/users", users);
app.use("/protected", protected);

app.listen(5000, () => console.log("server running"));
