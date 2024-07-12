import express from 'express';
import { notFound, errorHandler } from '../controllers/ErrorController.js';

const router = express.Router();

// Handle 404 errors
router.use(notFound);

// Handle all other errors
router.use(errorHandler);

export default router;
