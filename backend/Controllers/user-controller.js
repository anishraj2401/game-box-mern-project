//import User model
const { User } = require("../db");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config()

const getUsers = async (req, res) => {
  const usersList = await User.find();
  res.status(200).send({ message: "users", payload: usersList });
};

const getUserByUsername = async (req, res) => {
  const user = await User.find(req.params);
  res.status(200).send({ message: "users details", payload: user });

};

//Create new User
const createUser = async (req, res, next) => {
  try {
    //check for existing user with same username
    let existingUsername = await User.findOne({ username: req.body.username });
    if (existingUsername !== null) {
      return res.status(200).send({ message: "*username already existed" });
    }
    let existingEmail = await User.findOne({ email: req.body.email });
    if (existingEmail !== null) {
      return res.status(200).send({ message: "*email already existed" });
    }

    //if user not existed, then hash password
    const hashedPassword = await bcryptjs.hash(req.body.password, 6);
    //replace plain password with hashed pw
    req.body.password = hashedPassword;
    const newUser = await User.create(req.body);
    res.status(201).send({ message: "User created", payload: newUser });
  } catch (error) {
    next(error);
  }
};

//User login
const loginUser = async (req, res, next) => {
  try {
    //get user crdentials object from req
    const userCredentials = req.body;
    console.log(userCredentials);
    //check username
    let user = await User.findOne({ email: userCredentials.email });
    //if invalid username
    if (user === null) {
      return res.status(200).send({ message: "Invalid email" });
    }
    //if username is found, compare passwords
    const result = await bcryptjs.compare(
      userCredentials.password,
      user.password
    );
    //if pasword not matched
    if (result === false) {
      return res.status(200).send({ message: "Invalid password" });
    }

    //Create jwt token and sign it
    const signedToken = jwt.sign(
      { email: user.email },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );
    res.status(200).send({ message: "login success", token: signedToken, user: user });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res) => {
  let user = await User.findOneAndUpdate(
    { username: req.body.username },
    { ...req.body }
  );
  res.status(200).send({ message: "User modified", payload: user });
};

const removeUser = async (req, res) => {
  const deletedUser = await User.deleteMany(req.params);
  res.status(200).send({ message: "users", payload: deletedUser });
};

const getProtectedRoute = (req, res) => {
  res.send({ message: "Here is a Sensitive data" })
}

module.exports = {
  getUsers,
  getUserByUsername,
  createUser,
  updateUser,
  removeUser,
  loginUser,
  getProtectedRoute
};
