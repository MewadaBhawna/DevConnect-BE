const express = require("express");
const { adminAuth } = require("./middleware/adminAuth");
const connectDatabase = require("./config/database");

const app = express();
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
