import React from 'react';
import VirtualCard from './VirtualCard';
import TopUpForm from './TopUpForm';
import './BuyVirtualCard.css';

export default function BuyVirtualCard() {
    return (
        <div className="app-container d-flex flex-row justify-content-center align-item-center  row">
            <div className="col-md-5 m-5 p-5">
                <TopUpForm />
            </div>
            <div className="col-md-5 m-5 p-5">
                <VirtualCard />
            </div>
        </div>
    );
}
