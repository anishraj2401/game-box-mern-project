// //import mongoose
// const mongoose = require("mongoose");

// const walletSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: [true, "Name is required"],
//         minlength: [3, "Name must be at least 3 characters long"],
//         maxlength: [20, "Name must be less than 20 characters long"]
//     },
//     amount: {
//         type: Number,
//         required: [true, "amount is required"],
//         minlength: [1, "Name must be at least 1 characters long"],
//     },
//     currency: {
//         type: String,
//         required: [true, "currency is required"],
//     },
//     cardNumber: {
//         type: Number,
//         required: [true, "card number is required"],
//         minlength: [16, "card Number must be at least 16 characters long"],
//     },
//     expirationDate: {
//         type: String,
//         required: [true, "expiration date is required"],
//         minlength: [2, "Name must be at least 2 characters long"],
//     },
//     cvv: {
//         type: Number,
//         required: [true, "cvv number is required"],
//         minlength: [3, "Name must be at least 3 characters long"],
//     }
// });


// const Payment = new mongoose.model("Wallet", walletSchema);

// module.exports = Payment;