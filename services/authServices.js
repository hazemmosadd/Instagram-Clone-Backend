  const UserModel = require("../models/userModel");
  const { hashPassword, passwordsMatch } = require("../utils/hashing");
  const { userValidationChema } = require("../utils/validationSchemas");

  const createUser = async (userData) => {
    const { error } = userValidationChema.validate(userData);
    if (error) return { isSuccess: false, errorMessage: "Bad request" };

    const hashedPassword = await hashPassword(userData.password);
    userData.password = hashedPassword;
    const userCreated = await UserModel.createUser(userData);
    return { isSuccess: true, userCreated };
  };
  const authenticateUser = async (userName, password) => {
    const user = await UserModel.findByUserName(userName);
    if (!user.length) return { isSuccess: false, errorMessage: "User not found" };
    const isMatch = await passwordsMatch(password, user[0].password);
    if (isMatch) {

      return { isSuccess: true  };

    } else return { isSuccess: false, errorMessage: "Invalid Password" };
  };

  module.exports = { authenticateUser, createUser };
