const Review = require('../models/Review');

exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find().populate('serviceId', ['name']);
        res.json(reviews);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.createReview = async (req, res) => {
    const { serviceId, rating, comment } = req.body;
    try {
        const newReview = new Review({
            serviceId,
            userId: req.user.id,
            rating,
            comment
        });
        const review = await newReview.save();
        res.json(review);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.updateReview = async (req, res) => {
    const { rating, comment } = req.body;
    try {
        let review = await Review.findById(req.params.reviewId);
        if (!review) return res.status(404).json({ msg: 'Review not found' });
        if (review.userId.toString() !== req.user.id) return res.status(401).json({ msg: 'User not authorized' });

        review = await Review.findByIdAndUpdate(req.params.reviewId, { $set: { rating, comment } }, { new: true });
        res.json(review);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.deleteReview = async (req, res) => {
    try {
        let review = await Review.findById(req.params.reviewId);
        if (!review) return res.status(404).json({ msg: 'Review not found' });
        if (review.userId.toString() !== req.user.id) return res.status(401).json({ msg: 'User not authorized' });

        await Review.findByIdAndRemove(req.params.reviewId);
        res.json({ msg: 'Review removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
