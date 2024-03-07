const { Wallet } = require("../db");

const getWalletData = async (req, res) => {
    const walletData = await Wallet.find();
    res.status(200).json({ message: 'Wallet data retrieved successfully', data: walletData });
    // res.status(200).send({ message: "Wallet List", payload: walletData });
};

const getWalletDataByName = async (req, res) => {
    const walletData = await Wallet.findOne({ email: req.params.email });
    if (walletData) {
        res.json({ data: walletData });
    } else {
        res.status(404).json({ message: 'Wallet data not found for the given name' });
    }
};

const postWalletData = async (req, res) => {
    const { username, email, amount, currency, cardNumber, expirationDate, cvv } = req.body;
    // console.log("wallaet", req.body);
    try {
        let wallet = await Wallet.findOne({ email });
        // console.log('wallet from db', wallet)

        if (wallet === null) {
            // If the wallet doesn't exist, create a new one 
            wallet = new Wallet(req.body);
            // console.log("wal doc", wallet);
            await wallet.save();
        } else {
            // If the wallet exists, update the amount 
            const updatedAmount = parseInt(wallet.amount) + parseInt(amount); // Parse amount as a number
            // console.log("updated amnt", updatedAmount);
            wallet.amount = updatedAmount;
            console.log('wal', wallet)
            await wallet.save();
        }
        res.status(201).json({ message: "Wallet balance updated", data: wallet }
        );
    } catch (error) {
        console.error('Error updating wallet in API:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const updateWalletData = async (req, res) => {
    const { username, email, amount, currency, cardNumber, expirationDate, cvv } = req.body;
    try {
        let wallet = await Wallet.findOne({ email });
        console.log("wallet fro db", wallet);
        if (wallet === null) {
            return res.status(404).json({ message: 'Wallet not found' });
        }
        const updatedAmount = parseInt(wallet.amount) - parseInt(amount);
        if (updatedAmount < 0) {
            return res.status(400).json({ message: 'Insufficient funds' });
        }
        wallet.amount = updatedAmount;
        await wallet.save();
        res.status(201).json({ message: 'Wallet balance updated', data: wallet });
    } catch (error) {
        console.error('Error updating wallet in API:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports = {
    getWalletData, getWalletDataByName,
    postWalletData,
    updateWalletData
};