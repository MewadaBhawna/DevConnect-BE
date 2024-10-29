const express = require("express");
const { adminAuth } = require("./middleware/adminAuth");
const connectDatabase = require("./config/database");
const User = require("./models/user");

const app = express();

// to convert json into js object and add to req body for the api
app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User created successfully!");
  } catch (err) {
    res.status(400).send("User creation failed!");
  }
});

app.get("/feed", async (req, res) => {
  try {
    const user = await User.find({});
    res.send(user);
  } catch (err) {
    res.status(400).send("something went wrong!");
  }
});
app.get("/feedOne", async (req, res) => {
  const mail = new User(req.body);
  console.log(mail);
  try {
    const user = await User.find({ emailId: mail.emailId });
    res.send(user);
  } catch (err) {
    res.status(400).send("something went wrong!");
  }
});
app.get("/feedID", async (req, res) => {
  try {
    const user = await User.findById("671cb2a3914ca3b129c2a36d");
    res.send(user);
  } catch (err) {
    res.status(400).send("something went wrong!");
  }
});
app.delete("/user", async (req, res) => {
  const userId = req.body.userID;
  try {
    await User.findByIdAndDelete(userId);
    res.send("User Deleted Successfully");
  } catch (err) {
    res.status(400).send("something went wrong!");
  }
});

app.patch("/user", async (req, res) => {
  try {
    const emailId = req.body.emailId;
    const data = req.body;
    console.log(data);
    await User.findOneAndUpdate({ emailId: emailId }, data);
    res.send("User updated Successfully");
  } catch (err) {
    res.status(400).send("something went wrong!");
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
