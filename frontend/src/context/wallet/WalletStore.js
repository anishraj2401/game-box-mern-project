import { useContext, useEffect, useState } from "react";
import { walletContextObj } from "./walletContext";
import { userLoginContextObj } from '../../context/user/userLoginContext'
import axios from 'axios';

export default function WalletStore({ children }) {
    const [wallet, setWallet] = useState(0);
    const [lowBalance, setLowBalance] = useState(false);
    const [currentWalletData, setCurrentWalletData] = useState(0);
    const [walletData, setWalletData] = useState({ name: '', email: '', amount: 0, currency: '', cardNumber: '', expirationDate: '', cvv: '' });
    const [currentUser, setCurrentUser, loginStatus, , , ,] = useContext(userLoginContextObj);

    async function updateWalletData() {
        const getResponse = await axios.get(`http://localhost:4000/payment-api/wallet-data/${currentUser.email}`);
        console.log("get response from mongoosoe", getResponse.data.data);
        setCurrentUser(getResponse.data.data);
        setWalletData(getResponse.data.data)
    };

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
