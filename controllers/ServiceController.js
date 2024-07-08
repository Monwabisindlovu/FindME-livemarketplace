import Service from '../models/Service';

/**
 * Handles service creation.
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
export const createService = async (req, res) => {
  try {
    const { name, description, price } = req.body;

    // Create a new service
    const newService = new Service({
      name,
      description,
      price
    });

    // Save the service to the database
    await newService.save();

    res.status(201).json({ message: 'Service created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating service', error });
  }
};

/**
 * Retrieves a list of all services.
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
export const getAllServices = async (req, res) => {
  try {
    // Fetch all services from the database
    const services = await Service.find();

    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving services', error });
  }
};

/**
 * Retrieves details of a specific service.
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
export const getServiceById = async (req, res) => {
  try {
    const { id } = req.params;

    // Find service by ID
    const service = await Service.findById(id);

    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving service details', error });
  }
};

/**
 * Updates details of a specific service.
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
export const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;

    // Find service by ID and update
    const updatedService = await Service.findByIdAndUpdate(id, { name, description, price }, { new: true });

    if (!updatedService) {
      return res.status(404).json({ message: 'Service not found' });
    }

    res.status(200).json({ message: 'Service updated successfully', updatedService });
  } catch (error) {
    res.status(500).json({ message: 'Error updating service', error });
  }
};

/**
 * Deletes a specific service.
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
export const deleteService = async (req, res) => {
  try {
    const { id } = req.params;

    // Find service by ID and delete
    const deletedService = await Service.findByIdAndDelete(id);

    if (!deletedService) {
      return res.status(404).json({ message: 'Service not found' });
    }

    res.status(200).json({ message: 'Service deleted successfully', deletedService });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting service', error });
  }
};
