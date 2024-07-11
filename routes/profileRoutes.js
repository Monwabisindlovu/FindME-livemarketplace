const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware'); // Corrected path

const { getUserProfile, updateUserProfile } = require('../controllers/ProfileController');

router.get('/', authMiddleware, getUserProfile);
router.put('/', authMiddleware, updateUserProfile);

module.exports = router;
