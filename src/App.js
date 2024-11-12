const express = require("express");
const app = express(); // creating Server
// Only handle GET call to /user
app.get("/user", (req, res)=>{
    res.send({firstname: "Mohan", lastname: "Raj"})
})
app.post("/user", (req, res)=>{
    res.send("Data saved")
})
app.delete("/user", (req, res)=>{
    res.send("Data Deleted")
})
app.listen(3000, () => console.log("Server started @port:3000"));
