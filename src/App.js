const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  // console.log(req.body);
  // creating a new instance of a user Model
  const user = new User(req.body);
  try {
    await user.save(); // return a promise
    res.send("User Added successfully");
  } catch (err) {
    res.status(400).send("Error on saving user data : " + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Connected to DB");
    app.listen(3000, () => console.log("Server started @port:3000"));
  })
  .catch((err) => {
    console.error("DB Connection Failed", err);
  });
