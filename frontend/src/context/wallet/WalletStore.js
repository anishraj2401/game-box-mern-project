import { useContext, useEffect, useState } from "react";
import { walletContextObj } from "./walletContext";
import { userLoginContextObj } from '../../context/user/userLoginContext'
import axios from 'axios';

export default function WalletStore({ children }) {
    const [wallet, setWallet] = useState(0);
    const [lowBalance, setLowBalance] = useState(false);
    const [currentWalletData, setCurrentWalletData] = useState(0);
    const [walletData, setWalletData] = useState({});
    const [currentUser, setCurrentUser, loginStatus, , , ,] = useContext(userLoginContextObj);

    async function updateWalletData() {
        try {
            const getResponse = await axios.get(`http://localhost:4000/payment-api/wallet-data/${currentUser.email}`);
            // console.log("get response from mongoosoe", getResponse.data.data);
            if (getResponse.data.message === 'Wallet data not found for the given name') {
                setWalletData({ name: '', email: '', amount: 0, currency: '', cardNumber: '**** **** **** 6070', expirationDate: '09/09', cvv: '999' })
                // console.log('wallet data balance', walletData.amount);
            } else {
                setCurrentUser(getResponse.data.data);
                setWalletData(getResponse.data.data)
            }

        } catch (error) {
            console.error('Error fetching wallet data:', error);
        };
    }

    useEffect(() => {
        updateWalletData()
    }, [loginStatus])

    return (
        <walletContextObj.Provider value={{ wallet, setWallet, lowBalance, setLowBalance, currentWalletData, setCurrentWalletData, walletData, setWalletData, updateWalletData }
        }>
            {children}
        </walletContextObj.Provider>
    );
}