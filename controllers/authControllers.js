//try and catch notes
// Here, we'll keep the try-catch blocks to handle application-level errors and send appropriate HTTP responses.
// controllers/authController.js
// bad request validation is nessecary even if its going to happen in the front end

const authServices = require("../services/authServices");
const HTTP_STATUS_CODES = require('../config/statusCodes');


const createUser = async (req, res) => {
  try {
    const result = await authServices.createUser(req.body);
    if (result.created) {
      return res.status(HTTP_STATUS_CODES.CREATED).json({ success: true, message: "User created successfully", data: { id: result.userCreated.id, username: result.userCreated.username } });
    } else {
      return res.status(HTTP_STATUS_CODES.BAD_REQUEST).json({ success: false, message: `Failed to create user: ${result.errorMessage}` });
    }
  } catch (error) {
    return res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json({ success: false, message: "Internal Server Error" });
  }
};

const logInUser = async (req, res) => {
  try {
    const result = await authServices.authenticateUser(req.body.userName, req.body.password);
    if (result.isAuthenticated) {
      console.log(req.session);
      req.session.userName = req.body.userName;
      console.log(req.session);
      return res.status(HTTP_STATUS_CODES.OK).json({ success: true, message: "User authenticated" });
    } else {
      return res.status(HTTP_STATUS_CODES.UNAUTHORIZED).json({
        success: false,
        message: `Authentication failed: ${result.errorMessage}`,
      });
    }
  } catch (error) {
    return res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json({ success: false, message: "Internal Server Error" });
  }
};

const validateUserSession = (req, res) => {
  if (req.session.userName) {
    return res.status(HTTP_STATUS_CODES.OK).json({ isLoggedIn: true });
  } else {
    return res.status(HTTP_STATUS_CODES.OK).json({ isLoggedIn: false });
  }
};

module.exports = { createUser, logInUser , validateUserSession  };
