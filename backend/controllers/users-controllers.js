const mongoose = require("mongoose");
const { validationResult } = require("express-validator");
const Users = require("../models/user-model.js");
const bcrypt = require("bcrypt");

const registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({ status: "error", error: "Invalid Inputs passed" });
  }
  let { email, mobile_no, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(password, salt);
  const addUser = new Users({
    email,
    mobile_no,
    password,
  });

  try {
    await addUser.save();
  } catch (err) {
    return res.json({ status: "error", error: "Some error occured" });
  }
  return res.json({ status: "ok", error: "User created" });
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  let user;
  try {
    user = await Users.findOne({ email: email });
  } catch (err) {
    return res.json({ status: "error", error: "Some error occured" });
  }

  if (user) {
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
      return res.json({
        status: "ok",
        error: "User logged in",
      });
    } else {
      return res.json({ status: "error", error: "Wrong Password" });
    }
  } else {
    return res.json({ status: "error", error: "User not Found" });
  }
};

const changePassword = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({ status: "error", error: "Invalid Inputs passed" });
  }
  const { email, oldPassword, password } = req.body;
  let user;
  try {
    user = await Users.findOne({ email: email });
  } catch (err) {
    return res.json({ status: "error", error: "Some error occured" });
  }

  if (user) {
    const validPassword = await bcrypt.compare(oldPassword, user.password);
    if (validPassword) {
      const salt = await bcrypt.genSalt(10);
      newPassword = await bcrypt.hash(password, salt);
      user.password = newPassword;
      await user.save();
      return res.json({
        status: "ok",
        error: "Password Updated",
      });
    } else {
      return res.json({ status: "error", error: "Wrong Password" });
    }
  } else {
    return res.json({
      status: "error",
      error: "User not Found. Check your email or old password.",
    });
  }
};

exports.changePassword = changePassword;
exports.registerUser = registerUser;
exports.loginUser = loginUser;
