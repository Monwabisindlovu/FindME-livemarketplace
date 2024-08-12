import express from 'express';
import {
  getAllIncidents,
  createIncident,
  updateIncident,
  deleteIncident
} from '../controllers/IncidentController.js';
import authMiddleware from '../middleware/auth.js'; // Ensure path is correct

const router = express.Router();

router.get('/', getAllIncidents);
router.post('/', authMiddleware, createIncident);
router.put('/:id', authMiddleware, updateIncident);
router.delete('/:id', authMiddleware, deleteIncident);

export default router;
