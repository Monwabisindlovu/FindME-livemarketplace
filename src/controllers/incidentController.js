import Incident from '../models/Incident.js';

export const getAllIncidents = async (req, res) => {
  try {
    const incidents = await Incident.find();
    res.json(incidents);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

export const createIncident = async (req, res) => {
  const { description } = req.body;
  try {
    const newIncident = new Incident({
      userId: req.user.id,
      description
    });
    const incident = await newIncident.save();
    res.json(incident);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

export const updateIncident = async (req, res) => {
  const { description } = req.body;
  try {
    let incident = await Incident.findById(req.params.incidentId);
    if (!incident) return res.status(404).json({ msg: 'Incident not found' });
    if (incident.userId.toString() !== req.user.id) return res.status(401).json({ msg: 'User not authorized' });

    incident = await Incident.findByIdAndUpdate(req.params.incidentId, { $set: { description } }, { new: true });
    res.json(incident);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

export const deleteIncident = async (req, res) => {
  try {
    let incident = await Incident.findById(req.params.incidentId);
    if (!incident) return res.status(404).json({ msg: 'Incident not found' });
    if (incident.userId.toString() !== req.user.id) return res.status(401).json({ msg: 'User not authorized' });

    await Incident.findByIdAndRemove(req.params.incidentId);
    res.json({ msg: 'Incident removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};