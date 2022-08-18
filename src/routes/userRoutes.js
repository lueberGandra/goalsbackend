const express = require('express')
const router = express.Router()
const {loginUser,getMe,registerUser} = require('../controllers/userControllers')

router.post('/',registerUser)
router.post('/login',loginUser)
router.get('/me',getMe)

module.exports = router