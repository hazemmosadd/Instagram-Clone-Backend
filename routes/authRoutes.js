const express = require("express");
const router = express.Router();

// Controller 
const authController = require('../controllers/authControllers.js')
//signup route 
router.post('/createUser' , authController.createUser )
router.post('/logIn' , authController.logInUser)
router.get('/isLoggedIn' , authController.validateUserSession)
module.exports = router