const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  emailId: String,
  password: String,
  gender: String,
});

module.exports = mongoose.model("Users", userSchema);
