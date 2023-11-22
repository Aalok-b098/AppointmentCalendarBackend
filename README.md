# AppointmentCalendarBackend

# Project Name: AppointmentCalendarBackend

## Description

The Appointment Scheduler is a Node.js application designed to streamline the process of managing appointments for healthcare professionals. This intuitive system allows doctors, dentists, and other medical practitioners to efficiently schedule, update, and view appointments.

## Key Features
Database Integration: MongoDB integration to securely store appointment data.

# API Endpoints
``````
POST /api/appointments: Create a new appointment.

Request Body: JSON with appointment details.
Response: JSON with the created appointment.
GET /api/appointments: Get a list of all appointments.

Response: JSON array with appointment details.
GET /api/appointments/:id: Get details of a specific appointment by ID.

Response: JSON with appointment details.
PUT /api/appointments/:id: Update an existing appointment by ID.

Request Body: JSON with updated appointment details.
Response: JSON with the updated appointment.
DELETE /api/appointments/:id: Delete an appointment by ID.

Response: JSON with a success message.
```

## Table of Contents

- [Installation](#npm i)
- [Usage](#npm start)
- [Database](#put database url in env file, create your own env)
- [Environment Variables](#set environment-variables in env file)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Aalok-b098/AppointmentCalendarBackend.git

Deploy URL: https://appointmentcalendarbackend.onrender.com