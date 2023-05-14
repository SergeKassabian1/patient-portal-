//getting user controller
const userController = require("../controllers/userControllers");

//getting express
const express = require("express");

//getting express router
const router = express.Router();

//defining routes
router.post("/login", userController.login);
router.post("/signup", userController.signup);

//exporting routes
module.exports = router;
