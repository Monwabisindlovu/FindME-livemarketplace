import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { getAllReviews, createReview, updateReview, deleteReview } from '../controllers/ReviewController.js';

const router = express.Router();

router.get('/', getAllReviews);
router.post('/', authMiddleware, createReview);
router.put('/:reviewId', authMiddleware, updateReview);
router.delete('/:reviewId', authMiddleware, deleteReview);

export default router;
