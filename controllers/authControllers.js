const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const AppError = require("../utils/appError");

exports.signUp = async function (req, res, next) {
  try {
    // const newUser = await User.create(req.body);
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.status(200).json({
      status: "success",
      token,
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({ status: "failed", message: err });
  }
};

exports.login = function (req, res, next) {
  const { email, password } = req.body;
  //1) check if email and password exit
  if (!email || !password) {
    return next();

    // return next(new AppError("Please provide email and password!", 400));
  } else {
    res.status(400).json("email or password incorrect!");
  }

  //2) check if user exists && password is correct

  //3) if everything is okay  send token to client
  const token = "";
  res.status(200).json({
    status: "success",
    token,
  });
};
