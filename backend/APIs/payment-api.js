//create a Route(mini exp app)
const exp = require("express");
const paymentApp = exp.Router();

//get express-async-handler to handle async errors
const expressAsyncHandler = require("express-async-handler");
const verfiytoken=require("../middlewares/verifyToken")

//import req handlers from Controller
const { getWalletData, getWalletDataByName, postWalletData, updateWalletData } = require("../Controllers/payment-controller");
const verifyToken = require("../middlewares/verifyToken");

paymentApp.get("/wallet-data", expressAsyncHandler(getWalletData))

paymentApp.get("/wallet-data/:email", expressAsyncHandler(getWalletDataByName))

paymentApp.post("/wallet-form",verifyToken, expressAsyncHandler(postWalletData))

paymentApp.put("/wallet-form", expressAsyncHandler(updateWalletData))

//export paymentApp
module.exports = paymentApp;
