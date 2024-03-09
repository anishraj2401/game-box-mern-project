//import mongoose
const mongoose = require("mongoose");
require("dotenv").config();

// const DB_URL = process.env.ATLAS_DB_URL;
const LOCAL_DB_URL = process.env.LOCAL_DB_URL;
//coonect to DB
mongoose
  .connect(LOCAL_DB_URL)
  .then(() => {
    console.log("Connected to Local MongoDB..");
  })
  .catch((err) => console.log("Error in DB connect..", err));

//created user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "UserName is required"],
    minlength: [3, "UserName must be at least 3 characters long"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters long"]
  }
});

////created wallet schema
const walletSchema = new mongoose.Schema({
  username: {
    type: String,
    ref: 'User',
    required: [true, "username is required"],
    minlength: [3, "Name must be at least 3 characters long"],
  },
  email: {
    type: String,
  },
  amount: {
    type: Number,
    required: [true, "amount is required"],
    minlength: [1, "amount should contain 1 or more digits"],
  },
  currency: {
    type: String,
  },
  cardNumber: {
    type: Number,
    required: [true, "card number is required"],
    minlength: [16, "card Number must be at least 16 characters long"],
  },
  expirationDate: {
    type: String,
    required: [true, "expiration date is required"],
    minlength: [2, "expiration date must be at least 2 characters long"],
  },
  cvv: {
    type: Number,
    required: [true, "cvv number is required"],
    minlength: [3, "cvv number must be at least 3 characters long"],
  }
});

//create Model(class) for the userSchema
const User = mongoose.model("User", userSchema);
const Wallet = mongoose.model("Wallet", walletSchema);

//export User, Payment model
module.exports = { User, Wallet }
