import express from 'express';
import authMiddleware from '../middleware/auth.js'; // Ensure this path is correct
import {
  getAllReviews,
  createReview,
  updateReview,
  deleteReview
} from '../controllers/ReviewController.js';

const router = express.Router();

router.get('/', getAllReviews);
router.post('/', authMiddleware, createReview); // Use authMiddleware for authentication
router.put('/:id', authMiddleware, updateReview);
router.delete('/:id', authMiddleware, deleteReview);

export default router;
