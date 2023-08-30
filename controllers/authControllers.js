//try and catch notes
// Here, we'll keep the try-catch blocks to handle application-level errors and send appropriate HTTP responses.
// controllers/authController.js
// bad request validation is nessecary even if its going to happen in the front end

const authServices = require("../services/authServices");

const createUser = async (req, res) => {


  try {
    const result = await authServices.createUser(req.body)
    // RESPONSES
    if(result.created)
    return res.status(201).json({status : "User Created successfully" , user :{ id: result.userCreated.id, username: result.userCreated.username } , });
    else 
    return res.status(400).json({status : `Failed to create user : ${result.errorMessage}`  }  )
  } catch (error) {
    return res.status(500).json({ status: "Failed to create user" });
  }
};

const logInUser = async (req, res) => {
  try 
  {
    const { userName, password } = req.body;
    const result = await authServices.authenticateUser(userName, password);
    // RESPONSES
    if (result.isAuthenticated)
      return res.status(200).json({ status: "User authenticated" });
    else
      return res.status(401).json({ status: `Authentication failed: ${result.errorMessage}` });
  }
  catch (error) 
  {
    return res.status(500).json({ status: "Authentication failed" });
  }
};

module.exports = { createUser, logInUser };
