const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const protect = require('../middleware/authMiddleware');
const { getAllUsers,getLoggedInUser,logout,refreshToken } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);


router.get('/users', protect, getAllUsers);
router.post('/refresh-token', refreshToken); // 👈 Add this line

router.post('/logout', logout);


module.exports = router;
