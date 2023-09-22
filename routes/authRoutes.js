const express = require("express");
const router = express.Router();

// Controller 
const authController = require('../controllers/authControllers.js')
//Middleware 
//signup route 
router.post('/createUser' , authController.postUserCreation  )
router.post('/logIn' , authController.postUserLogin )
router.get('/isLoggedIn' , authController.getUserSessionStatus )
module.exports = router