// appoinmentCalendarBackend/models/appointmentModel.js

import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required. Please provide a title.'],
  },
  start: {
    type: String,
    required: [true, 'Day time is required. Please provide a start time.'],
  },
  patientName: {
    type: String,
    required: [true, 'Patient name is required. Please provide a patient name.'],
  },
});

appointmentSchema.index({ start: 1 });

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
