// appoinmentCalendarBackend/routes/appointmentRoutes.js

import express from 'express';
import * as appointmentController from '../controllers/appointmentController.js';

const router = express.Router();

// Add a new appointment
router.post('/add-appointment', appointmentController.addAppointment);


export default router;
