const express = require("express");
const router = express.Router();

// Controller 
const authController = require('../controllers/authControllers.js')
//signup route 
router.post('/createUser' , authController.createUser )

module.exports = router