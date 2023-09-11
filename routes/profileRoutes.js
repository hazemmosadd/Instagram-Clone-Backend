const express = require('express')
const router = express.Router() 
const profileControllers = require('../controllers/profileControllers')


router.get('/' , profileControllers.getMyProfileData) 
router.get('/avatar' , profileControllers.getMyProfileAvatar)
module.exports = router 