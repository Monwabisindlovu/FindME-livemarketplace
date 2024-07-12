import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { getAllIncidents, createIncident, updateIncident, deleteIncident } from '../controllers/IncidentController.js';

const router = express.Router();

router.get('/', getAllIncidents);
router.post('/', authMiddleware, createIncident);
router.put('/:incidentId', authMiddleware, updateIncident);
router.delete('/:incidentId', authMiddleware, deleteIncident);

export default router;
