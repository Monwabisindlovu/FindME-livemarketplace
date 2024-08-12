import express from 'express';
import { notFound, errorHandler } from '../controllers/ErrorController';

const router = express.Router();

/**
 * @module routes/errors
 * @description Defines routes for handling errors.
 */

// Handle 404 errors
router.use(notFound);

// Handle all other errors
router.use(errorHandler);

export default router;
