const UserModel = require("../models/userModel");
const { hashPassword, passwordsMatch } = require("../utils/hashing");
const { userValidationChema } = require("../utils/validationSchemas");

const authenticateUser = async (userName, password) => {
  const user = await UserModel.getUser(userName);
  if (!user.length) return { isAuthenticated: false, errorMessage: "User not found" };
  const isMatch = await passwordsMatch(password, user[0].password);
  if (isMatch) return { isAuthenticated: true };
  else return { isAuthenticated: false, errorMessage: "Invalid Password" };
};

const createUser = async (userData) => {
  const { error } = userValidationChema.validate(userData);
  if (error) return { created: false, errorMessage: "Bad request" };

  const hashedPassword = await hashPassword(userData.password);
  userData.password = hashedPassword;
  const userCreated = await UserModel.createUser(userData);
  return { created: true, userCreated };
};

module.exports = { authenticateUser, createUser };
