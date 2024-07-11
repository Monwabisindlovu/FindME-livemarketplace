// routes/serviceRoutes.js
const express = require('express');
const router = express.Router();
const ServiceController = require('../controllers/ServiceController');

// GET all services
router.get('/', ServiceController.getAllServices);

// POST a new service
router.post('/', ServiceController.createService);

// PUT (update) a service
router.put('/:id', ServiceController.updateService);

// DELETE a service
router.delete('/:id', ServiceController.deleteService);

module.exports = router;
