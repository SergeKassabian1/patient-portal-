const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { userName, password, phoneNumber, email, address, type } = req.body;
  try {
    bcrypt.hash(password, 10, async (err, hash) => {
      if (hash) {
        let newUser = new User({
          userName: userName,
          password: hash,
          phoneNumber:phoneNumber,
          email:email,
          address:address,
          type:type
        });
        await newUser.save();
        res.send({ message: "user saved !" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { userName, password } = req.body;
  try {
    const user = await User.findOne({ userName: userName });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          let token = jwt.sign({ id: user._id }, "testing", {
            expiresIn: "1h",
          });
          res.send({
            userName:user.userName,
            phoneNumber:user.phoneNumber,
            email:user.email,
            address:user.address,
            type:user.type,
          });
        } else {
          res.send({ message: "wrong Password" });
        }
      });
    } else {
      res.send({ message: "user does not exist" });
    }
  } catch (error) {
    res.send({ message: error.message });
  }
};

module.exports = { login, signup };
