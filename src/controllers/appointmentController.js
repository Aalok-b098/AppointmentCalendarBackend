// appoinmentCalendarBackend/controllers/appointmentController.js

// backend/controllers/appointmentController.js
import Appointment from '../models/appointmentModel.js';

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
