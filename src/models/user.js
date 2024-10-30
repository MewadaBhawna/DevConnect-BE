const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      maxLength: 255,
      minLength: 3,
      required: true,
    },
    lastName: {
      type: String,
      maxLength: 255,
      minLength: 3,
      trim: true,
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
      maxLength: 255,
    },
    gender: {
      type: String,
      validate(value) {
        if (!["M", "F", "O"].includes(value)) {
          throw new Error("enter gender is invalid");
        }
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", userSchema);
