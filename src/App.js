const express = require("express");
const { adminAuth, userAuth } = require("./middlewares/auth");
const app = express();

app.use("/admin", adminAuth);

app.get("/admin/getUserData", (req, res) => {
  res.send("Geting User Data");
});
app.delete("/admin/deleteUserData", (req, res) => {
  res.send("Deleted User Data");
});
app.use("/user", userAuth, (req, res) => {
  res.send("User Data !");
});

app.listen(3000, () => console.log("Server started @port:3000"));
