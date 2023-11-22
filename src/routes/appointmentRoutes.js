// appoinmentCalendarBackend/routes/appointmentRoutes.js

import express from 'express';
import * as appointmentController from '../controllers/appointmentController.js';

const router = express.Router();

// Get all appointments
router.get('/get-appointments', appointmentController.getAppointments);

// Add a new appointment
router.post('/add-appointment', appointmentController.addAppointment);

// Update an appointment
router.put('/update-appointment/:id', appointmentController.updateAppointment);

// get upcoming-appointments
router.get('/upcoming-appointment', appointmentController.getUpcomingAppointments);

// 
router.get('/appointment-details/:id', appointmentController.getAppointmentDetails);

// Delete an appointment
router.delete('/delete-appointment/:id', appointmentController.deleteAppointment);

export default router;
