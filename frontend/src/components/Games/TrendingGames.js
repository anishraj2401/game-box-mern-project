import React, { useContext, useState } from 'react'
import LowBalance from '../Wallet/LowBalance';
import GameCard from './GameCard'

import { walletContextObj } from '../../context/wallet/walletContext'

export default function TrendingGames() {
    const { lowBalance } = useContext(walletContextObj);

    return (
        <>
            <div className="gameContainer2">
                <div className="trendingContainer">
                    <h2 className='text-primary text-center'>TRENDING GAMES</h2>
                </div>
                <div className="cardContainer2 row">
                    <GameCard image={require("../../image/card02.jpg")} title={"Clash Royale"} price={"Rs. 799"} />
                    <GameCard image={require("../../image/card03.jpg")} title={"Card Game"} price={"Rs. 299"} />
                    <GameCard image={require("../../image/card04.jpg")} title={"Heart Stone"} price={"Rs. 999"} />
                </div>
            </div>
            {lowBalance && <LowBalance />}
        </>
    )
}
