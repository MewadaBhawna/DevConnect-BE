const express = require("express");
const { adminAuth } = require("./middleware/adminAuth");

const app = express();
//middleware practise
app.use("/admin", adminAuth);
app.get("/admin/getalldata", (req, res) => {
  res.send("all data received");
});
app.get("/admin/deleteUser", (req, res) => {
  res.send("User deleted");
});
app.get(
  "/user",
  (req, res, next) => {
    //next();
    res.send({ Firstname: "Bhawna", Lastname: "Rajput" });
  },
  (req, res, next) => {
    next();
    res.send({ Firstname: "Bhawna2", Lastname: "Rajput2" });
  }
);
app.post("/user", (req, res) => {
  res.send("Data save successfully");
});
app.delete("/user", (req, res) => {
  res.send("User Data deleted successfully");
});
app.use("/getServer", (req, res) => {
  res.send("my new nodejs sever");
});

app.listen(1234, () => {
  console.log("successfully connect to server");
});
