// appoinmentCalendarBackend/models/appointmentModel.js

import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  day: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  patientName: {
    type: String,
    required: true,
  },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
