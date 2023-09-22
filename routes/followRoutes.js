const express = require('express') 
const router = express.Router() 
const followControllers  = require('../controllers/followControllers')

router.get('/is-following/:username' ,followControllers.getFollowingStatus )

module.exports = router