const express = require("express");
const app = express(); // creating Server
// Only handle GET call to /user

//http://localhost:3000/abc?userId=101&password=Testing
// app.get("/abc", (req, res) => {
// http://localhost:3000/abc/
// http://localhost:3000/abc/101/Mohan/testing
app.get("/abc/:userId/:name/:pass", (req, res) => {
//   console.log(req.query);
  console.log(req.params);
  res.send({ firstname: "Mohan", lastname: "Raj" });
});

app.listen(3000, () => console.log("Server started @port:3000"));
