const validator = require("validator");
const signupValidation = (inputData) => {
  const { firstName, lastName, emailId, password } = inputData;
  if (!firstName || !lastName) {
    throw new Error(" Enter a valid name");
  } else if (!validator.isEmail(emailId)) {
    throw new Error(" Enter a valid email id");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error(" Enter a valid password");
  }
};

module.exports = { signupValidation };
