import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { getUserProfile, updateUserProfile } from '../controllers/ProfileController.js';

const router = express.Router();

router.get('/', authMiddleware, getUserProfile);
router.put('/', authMiddleware, updateUserProfile);

export default router;
