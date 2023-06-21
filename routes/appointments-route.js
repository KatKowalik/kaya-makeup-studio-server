const router = require("express").Router();
const appointmentController = require("../controllers/appointments-controller");

router
    .route('/:id')
    .get(appointmentController.getAppointments)
    .delete(appointmentController.deleteAppointment)

module.exports = router;