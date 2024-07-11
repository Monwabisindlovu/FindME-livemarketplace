// errorRoutes.js

const express = require('express');
const router = express.Router();
const { notFound, errorHandler } = require('../controllers/ErrorController');

// Handle 404 errors
router.use(notFound);

// Handle all other errors
router.use(errorHandler);

module.exports = router;
