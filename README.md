# Features to Implement
1.Day Selection for Appointments
2.Available Slots Display
3.Appointment Booking
4.Appointment Deletion (Future Appointments Only)
5.Appointment History (With Additional Fields Like Description)
6.Scalability for Firms and Lawyers
# Backend Logic
# Models:
-Firm: Contains firm details and associated lawyers.
-Lawyer: Contains lawyer details and slot information.
-Appointment: Tracks user appointments.
# Endpoints:
GET /firms: Fetch all firms and their lawyers.
GET /lawyers/:lawyerId/slots?date=YYYY-MM-DD: Fetch slots for a lawyer on a specific day.
POST /appointments: Book a new appointment.
DELETE /appointments/:appointmentId: Delete a specific appointment.
GET /appointments: Fetch appointment history for a user.
