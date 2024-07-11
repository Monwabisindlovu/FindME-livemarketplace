const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { getAllReviews, createReview, updateReview, deleteReview } = require('../controllers/ReviewController');

router.get('/', getAllReviews);
router.post('/', authMiddleware, createReview);
router.put('/:reviewId', authMiddleware, updateReview);
router.delete('/:reviewId', authMiddleware, deleteReview);

module.exports = router;
