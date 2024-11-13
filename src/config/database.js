const mongoose = require("mongoose");
const connectDB = async () => {
  await mongoose.connect(
    // Connecting to a DB
    "mongodb+srv://DevUser:5P0Suw4tSFuxZ0xj@nodedev.ewy3r.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
