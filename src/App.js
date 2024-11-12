const express = require("express");
const app = express(); // creating Server
app.use("/test",(req, res) => {
  res.send("Hello");
});
app.use("/root", (req, res)=>res.send("You are in root"))
app.listen(3000, () => console.log("Server started @port:3000"));
