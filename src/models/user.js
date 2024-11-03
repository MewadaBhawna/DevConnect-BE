const mongoose = require("mongoose");
const validator = require("validator");

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
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("enter a  valid email address");
        }
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
      maxLength: 255,
      validate(value) {
        if (!validator.isStrongPassword(value)) {
          throw new Error("Password is week");
        }
      },
    },
    gender: {
      type: String,
      validate(value) {
        if (!["M", "F", "O"].includes(value)) {
          throw new Error("enter gender is invalid");
        }
      },
    },
    Skills: {
      type: [String],
      maxLength: 10,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", userSchema);
