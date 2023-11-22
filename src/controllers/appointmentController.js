// appoinmentCalendarBackend/controllers/appointmentController.js

// backend/controllers/appointmentController.js
import Appointment from '../models/appointmentModel.js';

// Get all appointments
export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    const result = {
      success: true,
      data: { total: appointments.length, appointments: appointments }
    }
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Add a new appointment
export const addAppointment = async (req, res) => {
  const { title, day, time, patientName } = req.body;

  try {
    // Use findOne for checking existing appointment
    const existingAppointment = await Appointment.findOne({ day, time });

    if (existingAppointment) {
      return res.status(400).json({ error: 'Appointment at this time already exists.' });
    }

    // Create a new appointment if none exists
    const newAppointment = new Appointment({ title, day, time, patientName });
    await newAppointment.save();

    res.json({
      success: true,
      message: 'Your appointment created successfully',
      data: newAppointment,
    });
  } catch (error) {
    // Handle errors
    if (error.name === 'MongoError' && error.code === 11000) {
      return res.status(400).json({ error: 'Duplicate key error. Appointment at this time already exists.' });
    }

    console.error('Error adding appointment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update an appointment
export const updateAppointment = async (req, res) => {
  const { id, title, day, time, patientName } = req.body;

  try {
    await Appointment.findByIdAndUpdate(id, { title, day, time, patientName });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete an appointment
export const deleteAppointment = async (req, res) => {
  const id = req.params.id;

  try {
    // Validation: Check if the appointment exists
    const existingAppointment = await Appointment.findById(id);

    if (!existingAppointment) {
      return res.status(404).json({ error: 'Appointment not found.' });
    }
    await Appointment.findByIdAndDelete(id);
    res.json({ success: true, message: 'Your apointment deleted successfully' });
  } catch (error) {
    console.error('Error deleting appointment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};