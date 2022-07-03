const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected");
  } catch (error) {
    console.log("DB not  connected");
  }
};
module.exports = connectDB;
