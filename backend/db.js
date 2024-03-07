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

//create User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "UserName is required"],
    minlength: [3, "UserName must be at least 3 characters long"],
    maxlength: [50, "UserName must be less than 50 characters long"]
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


const walletSchema = new mongoose.Schema({
  username: {
    type: String,
    ref: 'User',
    required: [true, "username is required"],
    // minlength: [3, "Name must be at least 3 characters long"],
    // maxlength: [20, "Name must be less than 20 characters long"]
  },
  email: {
    type: String,
    // ref: 'User',
    // required: [true, "Email is required"],
  },
  amount: {
    type: Number,
    // required: [true, "amount is required"],
    // minlength: [1, "amount must be at least 1 characters long"],
  },
  currency: {
    type: String,
  },
  cardNumber: {
    type: Number,
    // required: [true, "card number is required"],
    // minlength: [16, "card Number must be at least 16 characters long"],
  },
  expirationDate: {
    type: String,
    // required: [true, "expiration date is required"],
    // minlength: [2, "expiration date must be at least 2 characters long"],
  },
  cvv: {
    type: Number,
    // required: [true, "cvv number is required"],
    // minlength: [3, "cvv number must be at least 3 characters long"],
  }
});

const playerSchema = new mongoose.Schema({
  username: {
    type: String,
    ref: 'User',
    required: [true, "username is required"],

  },
  email: {
    type: String,
    ref: 'User',
  },
  characterName: {
    type: String,
    required: [true, "characterName is required"],

  },
  age: {
    type: Number,
  },
  nationality: {
    type: String,
  },
  bio: {
    type: String,
  },
});

//create Model(class) for the userSchema
const User = mongoose.model("User", userSchema);
const Wallet = mongoose.model("Wallet", walletSchema);
const Player = mongoose.model("Player", playerSchema);

//export User, Payment model
module.exports = { User, Wallet, Player }
