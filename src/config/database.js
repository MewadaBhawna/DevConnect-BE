const mongoose = require("mongoose");

const connectDatabase = async () => {
  await mongoose.connect(
    "mongodb+srv://bhawnaislive:mMXKNRvc6pxfMbu2@namastecluster.in828.mongodb.net/devConnect"
  );
};

module.exports = connectDatabase;
