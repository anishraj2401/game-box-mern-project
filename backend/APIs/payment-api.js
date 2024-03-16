//create a Route(mini exp app)
const exp = require("express");
const paymentApp = exp.Router();

//get express-async-handler to handle async errors
const expressAsyncHandler = require("express-async-handler");
const verfiytoken=require("../middlewares/verifyToken")

//import req handlers from Controller
const { getWalletData, getWalletDataByName, postWalletData, updateWalletData } = require("../Controllers/payment-controller");
const verifyToken = require("../middlewares/verifyToken");

//to get the list of wallet data 
paymentApp.get("/wallet-data", expressAsyncHandler(getWalletData))

//to get wallet data based on email
paymentApp.get("/wallet-data/:email", expressAsyncHandler(getWalletDataByName))

//to post wallet data on mongoDB
paymentApp.post("/wallet-form",verifyToken, expressAsyncHandler(postWalletData))

//to update wallet data on mongoDB
paymentApp.put("/wallet-form", expressAsyncHandler(updateWalletData))

//export paymentApp
module.exports = paymentApp;
