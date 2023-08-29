//try and catch notes
// Here, we'll keep the try-catch blocks to handle application-level errors and send appropriate HTTP responses.
// controllers/authController.js
const UserModel = require("../models/userModel");
const { userValidationChema } = require("../utils/validationSchemas");

const createUser = async (req, res) => {
  // bad request validation is nessecary even if its going to happen in the front end
  const { error } = userValidationChema.validate(req.body);
  if (error)
  {
    return res.status(400).json({ error: "Bad Request", details: error.details });
  }

  try {
    newUser = req.body;
    const userCreated = await UserModel.createUser(newUser);
    return res.status(201).json({ id: userCreated.id, username: userCreated.username });
  } catch (error) {
    // this error i will see in the console to dubug
    console.error("Failed to create user:", error.message);
    return res.status(500).json({ error: "Failed to create user" });
  }
};

const logInUser = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const validUser = await UserModel.getUser(userName, password);
    if (validUser.length) {
      return res.status(200).json({ status: "User authenticated" });
    }
    return res.status(401).json({ status: "Authentication failed" });
  } catch (error) {
    console.error("Authentication failed:", error.message);
    return res.status(500).json({ status: "Authentication failed" });
  }
};

module.exports = { createUser, logInUser };
