const express = require("express");
const { check } = require("express-validator");

const usersControllers = require("../controllers/users-controllers");
const router = express.Router();

router.post("/login", usersControllers.loginUser);
router.post(
  "/register",
  [
    check("email").normalizeEmail().isEmail(),
    check("mobile_no").isLength({ max: 10 }),
    check("password").isLength({ min: 6 }),
  ],
  usersControllers.registerUser
);
router.post(
  "/changepassword",
  [
    check("email").normalizeEmail().isEmail(),
    check("mobile_no").isLength({ max: 10 }),
    check("password").isLength({ min: 6 }),
  ],
  usersControllers.changePassword
);
module.exports = router;
