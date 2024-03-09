import React, { useContext, useState } from 'react'
import GameCard from './GameCard'
import LowBalance from '../Wallet/LowBalance';
import { walletContextObj } from '../../context/wallet/walletContext'
import TrendingGames from './TrendingGames'
import HowToPlay from './HowToPlay';

export default function Games() {
    const [showAllCards, setShowAllCards] = useState(false)
    const { lowBalance } = useContext(walletContextObj);

    function toggleShowAllCards() {
        setShowAllCards(true);
    }

    const cardList = showAllCards ?
        [<>
            <GameCard key='1' image={require("../../image/card01.jpg")} title={"SNAP"} price={"Rs. 899"} />
            <GameCard key='2' image={require("../../image/card02.jpg")} title={"Clash Royale"} price={"Rs. 799"} />
            <GameCard key='3' image={require("../../image/card03.jpg")} title={"Card Game"} price={"Rs. 299"} />
            <GameCard key='4' image={require("../../image/card04.jpg")} title={"Heart Stone"} price={"Rs. 999"} />
            <GameCard key='5' image={require("../../image/card05.jpg")} title={"Solitaire"} price={"Rs. 199"} />
            <GameCard key='6' image={require("../../image/card06.jpg")} title={"ARCHADNIUM"} price={"Rs. 899"} />
            <GameCard key='7' image={require("../../image/card07.jpg")} title={"Street FIghter Duel"} price={"Rs. 599"} />
            <GameCard key='8' image={require("../../image/card08.jpg")} title={"Plant vs Zombies"} price={"Rs. 999"} />
            <GameCard key='9' image={require("../../image/card08.jpg")} title={"Plant vs Zombies"} price={"Rs. 199"} />
        </>] : [<>
            <GameCard key='1' image={require("../../image/card01.jpg")} title={"SNAP"} price={"Rs. 899"} />
            <GameCard key='2' image={require("../../image/card02.jpg")} title={"Clash Royale"} price={"Rs. 799"} />
            <GameCard key='3' image={require("../../image/card03.jpg")} title={"Card Game"} price={"Rs. 299"} />
            <GameCard key='4' image={require("../../image/card04.jpg")} title={"Heart Stone"} price={"Rs. 999"} />
            <GameCard key='5' image={require("../../image/card05.jpg")} title={"Solitaire"} price={"Rs. 199"} />
            <GameCard key='6' image={require("../../image/card06.jpg")} title={"ARCHADNIUM"} price={"Rs. 899"} />
        </>
        ]

    return (
        <div>
            <h1 className='banner-box' id=''>Games</h1>
            <div className="gameContainer1">
                <div className="headingContainer">
                    <h1 className='px-5'>ALL GAMES</h1>
                    <a href="#" className="text-bold text-danger mr-4" onClick={toggleShowAllCards}>
                        <h6><b>SEE ALL</b></h6>
                    </a>
                </div>
                <div className="cardContainer1 border-bottom row ">
                    {cardList}
                </div>
            </div>
            <TrendingGames />
            <HowToPlay />
            {lowBalance && <LowBalance />}
        </div >
    )
}