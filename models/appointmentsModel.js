const { boolean } = require("webidl-conversions");
const mongoose = require("./connection.js");

const AppointmentsSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "id is required!"],
    },
    phoneNumber: {
        type: String,
        required: [true, "phonenumber is required!"],
    },
    date: {
      type: String,
      required: [true, "date is required!"],
    },
    checked: {
        type: Boolean,
        default: false,
      },
  },
);

const Appointments = mongoose.model("appointments", AppointmentsSchema);
module.exports = Appointments;