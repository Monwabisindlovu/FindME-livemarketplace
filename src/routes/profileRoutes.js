import express from 'express';
import authMiddleware from '../middleware/auth.js';
import { getUserProfile, updateUserProfile } from '../controllers/ProfileController.js'; // Correct file extension

const router = express.Router();

router.get('/', authMiddleware, getUserProfile);
router.put('/', authMiddleware, updateUserProfile);

export default router;
