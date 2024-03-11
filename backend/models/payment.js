//import mongoose
const mongoose = require("mongoose");

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

const Payment = new mongoose.model("Wallet", walletSchema);

module.exports = Payment;