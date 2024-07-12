import Service from '../models/Service.js';

export const getAllServices = async (req, res, next) => {
  try {
    const services = await Service.find({});
    res.json(services);
  } catch (error) {
    next(error);
  }
};

export const createService = async (req, res, next) => {
  try {
    const { name, description, price } = req.body;
    const newService = new Service({ name, description, price });
    const savedService = await newService.save();
    res.status(201).json(savedService);
  } catch (error) {
    next(error);
  }
};

export const updateService = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;
    const updatedService = await Service.findByIdAndUpdate(id, { name, description, price }, { new: true });
    res.json(updatedService);
  } catch (error) {
    next(error);
  }
};

export const deleteService = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Service.findByIdAndDelete(id);
    res.json({ message: 'Service deleted successfully' });
  } catch (error) {
    next(error);
  }
};
