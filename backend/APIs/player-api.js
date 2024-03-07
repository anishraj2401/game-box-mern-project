//create a Route(mini exp app)
const exp = require("express");
const playerApp = exp.Router();

//get express-async-handler to handle async errors
const expressAsyncHandler = require("express-async-handler");

//import req handlers from Controller
const { getPlayertData, getPlayerDataByName, postPlayerData, updatePlayerData } = require("../Controllers/payment-controller");

playerApp.get("/player-data", expressAsyncHandler(getPlayertData))

playerApp.get("/player-data/:userId", expressAsyncHandler(getPlayerDataByName))

playerApp.get("/player-data/:email", expressAsyncHandler(postPlayerData))



//export paymentApp
module.exports = playerApp;