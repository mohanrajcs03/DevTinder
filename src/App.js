const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();

app.post("/signup", async (req, res) => {
  // creating a new instance of a user Model
  const user = new User({
    firstName: "Virat",
    lastName: "Kholi",
    emailId: "Virat@Kolhi.com",
    password: "Virat@123",
  });
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
