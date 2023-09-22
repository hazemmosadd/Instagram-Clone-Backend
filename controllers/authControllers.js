//try and catch notes
// Here, we'll keep the try-catch blocks to handle application-level errors and send appropriate HTTP responses.
// controllers/authController.js
// bad request validation is nessecary even if its going to happen in the front end

const authServices = require("../services/authServices");
const HTTP_STATUS_CODES = require("../config/statusCodes");

//create Account
const postUserCreation = async (req, res) => {
  try {
    const result = await authServices.createUser(req.body);
    if (result.isSuccess) {
      return res.status(HTTP_STATUS_CODES.CREATED).json({ success: true, message: "User created successfully", data: { id: result.userCreated.id, username: result.userCreated.username } });
    } else {
      return res.status(HTTP_STATUS_CODES.BAD_REQUEST).json({ success: false, message: `Failed to create user: ${result.errorMessage}` });
    }
  } catch (error) {
    return res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json({ success: false, message: "Internal Server Error" });
  }
};

// logInUser
const postUserLogin = async (req, res) => {
  try {
    const result = await authServices.authenticateUser(req.body.userName, req.body.password);
    if (result.isSuccess) {
      req.session.userName = result.user.username;
      req.session.userId = result.user.id;

      return res.status(HTTP_STATUS_CODES.OK).json({ success: true, username: req.session.userName, message: "User authenticated" });
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

//validateUserSession
const getUserSessionStatus = (req, res) => {
  if (req.session.userName) {
    return res.status(HTTP_STATUS_CODES.OK).json({ success: true, isLoggedIn: true, username: req.session.userName });
  } else {
    return res.status(HTTP_STATUS_CODES.OK).json({ success: true, isLoggedIn: false });
  }
};

module.exports = { postUserCreation, postUserLogin, getUserSessionStatus };
