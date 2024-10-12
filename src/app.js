const express = require("express");
const { adminAuth } = require("./middleware/adminAuth");

const app = express();
app.use("/admin", adminAuth);
app.get("/admin/getalldata", (req, res) => {
  throw new Error(" Manual error");
  res.send("all data received");
});
app.get("/admin/deleteUser", (req, res) => {
  try {
    throw new Error(" Manual error");
    res.send("User deleted");
  } catch (err) {
    res.status(500).send(" Delete User failed");
  }
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
app.use("/", (err, req, res, next) => {
  if (err) {
    res.send("Something Went Wrong");
  }
});
app.use("/getServer", (req, res) => {
  res.send("my new nodejs sever");
});

app.listen(1234, () => {
  console.log("successfully connect to server");
});
