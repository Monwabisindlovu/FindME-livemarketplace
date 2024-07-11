const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { getAllIncidents, createIncident, updateIncident, deleteIncident } = require('../controllers/IncidentController'); // Ensure the casing matches the file name

router.get('/', getAllIncidents);
router.post('/', authMiddleware, createIncident);
router.put('/:incidentId', authMiddleware, updateIncident);
router.delete('/:incidentId', authMiddleware, deleteIncident);

module.exports = router;
