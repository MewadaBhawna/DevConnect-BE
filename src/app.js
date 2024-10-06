const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({ Firstname: "Bhawna", Lastname: "Rajput" });
});
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
