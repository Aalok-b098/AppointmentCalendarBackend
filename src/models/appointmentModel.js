// appoinmentCalendarBackend/models/appointmentModel.js

import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  title: String,
  day: String,
  time: String,
  patientName: String
});

// Adding a unique compound index for day and time

appointmentSchema.index({ day: 1, time: 1 }, { unique: true });


const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
