const express = require('express')
const {checkSignIn} = require('../middlewares/checkSignIn')
const router = express.Router() 
const profileControllers = require('../controllers/profileControllers')


router.get('/' , checkSignIn , profileControllers.getMyProfileData) 
router.get('/avatar' ,checkSignIn ,  profileControllers.getMyProfileAvatar)
module.exports = router 