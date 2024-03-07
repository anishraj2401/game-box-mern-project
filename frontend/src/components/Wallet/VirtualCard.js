import React, { useContext, useEffect } from 'react'
import { walletContextObj } from '../../context/wallet/walletContext';
import './BuyVirtualCard.css';
export default function VirtualCard() {

    const { walletData, updateWalletData } = useContext(walletContextObj);

    return (
        <div className="wallet-card">
            <div className="cardheader">
                <h6 className="card-subtitle">GAME BOX</h6>
                <h6 className="card-subtitle">Virtual Card</h6>
            </div>
            <div className="card-title">
                <h1>Balance:{walletData.currency}{walletData.amount}</h1>
            </div>
            <div className="cardbody">
                <p className="card-number">Card Number: {walletData.cardNumber}</p>
                <div className="card-details">
                    <p className="card-text">EXP: {walletData.expirationDate}</p>
                    <p className="card-text">CVV: {walletData.cvv}</p>
                </div>
            </div>

        </div>
    );
};
