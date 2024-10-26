const express = require("express");
const { adminAuth } = require("./middleware/adminAuth");
const connectDatabase = require("./config/database");
const User = require("./models/user");

const app = express();

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Bhawna",
    lastName: "Mewada",
    emailId: "Bhawna@gmail.com",
    password: "Bhawna@123",
    gender: "Female",
  });
  try {
    await user.save();
    res.send("User created successfully!");
  } catch (err) {
    res.status(400).send("User creation failed!");
  }
});
connectDatabase()
  .then(() => {
    console.log("Database connection established");
    app.listen(1234, () => {
      console.log("successfully connect to server");
    });
  })
  .catch(() => {
    console.error("Database not connected");
  });
