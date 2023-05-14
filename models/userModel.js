
const mongoose = require("./connection.js");

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Username is required!"],
    },
    password: {
      type: String,
      required: [true, "password is required!"],
    },
    phoneNumber: {
      type: String,
      required: [true, "phone number is required!"],
    },
    email: {
        type: String,
        required: [true, "email is required!"],
      },
    address: {
        type: String,
        required: [true, "address is required!"],
    },
    type: {
      type: String,
      default: "user",
  },
  },
);


const Users = mongoose.model("users", UserSchema);
module.exports = Users;