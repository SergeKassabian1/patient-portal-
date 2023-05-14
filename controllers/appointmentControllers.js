const Appointments = require("../models/appointmentsModel");
const User = require("../models/userModel");

const createAppointment = async (req, res) => {
    try {
        const {userName, phoneNumber, date } = req.body;
        const user = await User.find({userName:userName });
        if(user){
            let newAppointment = new Appointments({
                userName: userName,
                phoneNumber: phoneNumber,
                date: date,
              });
              await newAppointment.save();
              res.send({ message: "Appointment saved !" });
        }
      } catch (err) {
        res.status(500).json({
          status: "Failed",
          message: err,
        });
      }
}


const checkAppointment = async (req, res) => {
    const { id } = req.params;
    const { checked } = req.body;

  try {
    const appointment = await Appointments.findById(id);

    if (!appointment) {
      return res.status(404).json({ message: `Document with ID ${id} not found` });
    }

    appointment.checked = checked;

    await appointment.save();

    res.json({message:"saved"});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getAppointments = async (req, res) => {
    try {
      const appointments = await Appointments.find();
      res.json(appointments);
    } catch (err) {
      res.status(500).json({
        status: "Failed",
        message: err,
      });
    }
  };


module.exports = {createAppointment, checkAppointment, getAppointments};
