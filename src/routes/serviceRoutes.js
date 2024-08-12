import express from 'express';
import {
  getAllServices,
  createService,
  updateService,
  deleteService
} from '../controllers/ServiceController.js'; // Ensure correct file extension
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

// Route to get all services
router.get('/', getAllServices);

// Route to create a new service (requires authentication)
router.post('/', authMiddleware, createService);

// Route to update a specific service by ID (requires authentication)
router.put('/:id', authMiddleware, updateService);

// Route to delete a specific service by ID (requires authentication)
router.delete('/:id', authMiddleware, deleteService);

export default router;
