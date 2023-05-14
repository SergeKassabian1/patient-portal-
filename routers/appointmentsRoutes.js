//getting user controller
const appointmentsController = require("../controllers/appointmentControllers");

//getting express
const express = require("express");

//getting express router
const router = express.Router();

//defining routes
router.post("/create", appointmentsController.createAppointment);
router.put("/check/:id", appointmentsController.checkAppointment);
router.get("/get", appointmentsController.getAppointments);

//exporting routes
module.exports = router;