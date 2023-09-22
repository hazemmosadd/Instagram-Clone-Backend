const express = require('express') 
const router = express.Router() ; 
const postsControllers = require('../controllers/postsController')


router.get('/:username' , postsControllers.getProfilePosts) 


module.exports = router