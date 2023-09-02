//try and catch notes
// Here, we'll keep the try-catch blocks to handle application-level errors and send appropriate HTTP responses.
// controllers/authController.js
// bad request validation is nessecary even if its going to happen in the front end

const authServices = require("../services/authServices");

const createUser = async (req, res) => {
  try {
    const result = await authServices.createUser(req.body);
    if (result.created) {
      return res.status(201).json({ success: true, message: "User created successfully", data: { id: result.userCreated.id, username: result.userCreated.username } });
    } else {
      return res.status(400).json({ success: false, message: `Failed to create user: ${result.errorMessage}` });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const logInUser = async (req, res) => {
  try {
    const result = await authServices.authenticateUser(req.body.userName, req.body.password);
    if (result.isAuthenticated) {
      console.log(req.session);
      req.session.userName = req.body.userName;
      console.log(req.session);
      return res.status(200).json({ success: true, message: "User authenticated" });
    } else {
      return res.status(401).json({
        success: false,
        message: `Authentication failed: ${result.errorMessage}`,
      });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const validateUserSession = (req, res) => {
  if (req.session.userName) {
    return res.status(200).json({ isLoggedIn: true });
  } else {
    return res.status(200).json({ isLoggedIn: false });
  }
};

module.exports = { createUser, logInUser , validateUserSession  };
