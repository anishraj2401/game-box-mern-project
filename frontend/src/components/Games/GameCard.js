import React, { useContext } from 'react'
import LowBalance from '../Wallet/LowBalance';
import { useNavigate } from 'react-router-dom';
import { walletContextObj } from '../../context/wallet/walletContext';
import { userLoginContextObj } from '../../context/user/userLoginContext';
import axios from 'axios';

function getAmount(amount) {
    return parseInt(amount.split(" ").at(-1))
}

export default function GameCard(props) {
    let navigate = useNavigate();
    const { walletData, setWalletData, updateWalletData, lowBalance, setLowBalance } = useContext(walletContextObj);
    const [currentUser, setCurrentUser, loginStatus, setLoginStatus, error, onSubmit, token] = useContext(userLoginContextObj)

    let curPrice = getAmount(props.price);
    let walletBalance = walletData.amount;

    async function playGame() {
        if (walletBalance >= curPrice) {
            walletBalance = curPrice;
            let copyObj = { ...walletData, amount: walletBalance }
            const gamePostResponse = await axios.put("http://localhost:4000/payment-api/wallet-form", copyObj);
            setWalletData(gamePostResponse.data.data)
            navigate('/games/games01')
        } else {
            setLowBalance(true);
        }
    }


    return (
        <div className="cardBox mb-4">
            <div className="card-heading items-center mb-2 ">
                <img className='card-img-top p-3' src={props.image} alt="Trending Game" />
                <span className="badge badge-primary overlay-badge">{props.price}</span>
                <p className="card-title m-3">Base Game</p>
                <div className=" m-3 d-flex justify-content-between align-items-center">
                    <h5 className="card-title text-left">{props.title}</h5>
                    {loginStatus === false ?
                        <button className="btn btn-primary btn-sm" onClick={() => { navigate('/register') }}>Play</button> :
                        <button className="btn btn-primary btn-sm" onClick={playGame}>Play</button>}
                </div>
            </div>
            {lowBalance && <LowBalance />}
        </div>
    );
}
