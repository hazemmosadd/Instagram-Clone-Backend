const express = require('express')
const {checkSignIn} = require('../middlewares/checkSignIn')
const router = express.Router() 
const profileControllers = require('../controllers/profileControllers')


router.get('/:username' , checkSignIn , profileControllers.getProfileData) 
router.get('/avatar/:username' ,checkSignIn ,  profileControllers.getProfileAvatar)
module.exports = router 