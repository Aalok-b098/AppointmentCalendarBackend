// appoinmentCalendarBackend/models/appointmentModel.js

import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  start: {
    type: Date,
    required: true,
  },
  patientName: {
    type: String,
    required: true,
  },
});

appointmentSchema.index({ start: 1 });

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
