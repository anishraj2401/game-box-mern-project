//create a Route(mini exp app)
const exp = require("express");
const userApp = exp.Router();

//get express-async-handler to handle async errors
const expressAsyncHandler = require("express-async-handler");

//import req handlers from Controller
const {
    getUsers,
    getUserByUsername,
    createUser,
    updateUser,
    removeUser,
    loginUser,
    getProtectedRoute
} = require("../Controllers/user-controller");

const verifyToken = require("../middlewares/verifyToken");

//to get the list of all users
userApp.get("/user", expressAsyncHandler(getUsers));

//to get data of user by username
userApp.get("/user/:username", expressAsyncHandler(getUserByUsername));

//create user based on post request
userApp.post("/user", expressAsyncHandler(createUser));

//user login
userApp.post("/login", expressAsyncHandler(loginUser));

//update user
userApp.put("/user", expressAsyncHandler(updateUser));

//delete user by username
userApp.delete("/user/:username", expressAsyncHandler(removeUser));

//PROTECTED ROUTE 
userApp.get("/protected", verifyToken, expressAsyncHandler(getProtectedRoute));

//export userApp
module.exports = userApp;
