// //import mongoose
// const mongoose = require("mongoose");

// //create User schema
// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: [true, "Name is required"],
//         minlength: [3, "Name must be at least 3 characters long"],
//         maxlength: [50, "Name must be less than 50 characters long"]
//     },
//     email: {
//         type: String,
//         required: [true, "Email is required"],
//         unique: true
//     },
//     password: {
//         type: String,
//         required: [true, "Password is required"],
//         minlength: [8, "Password must be at least 8 characters long"]
//     }
// });


// //create Model(class) for the userSchema
// const User = new mongoose.model("User", userSchema);

// //export User, Payment model
// module.exports = User;