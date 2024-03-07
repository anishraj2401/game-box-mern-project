import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { userLoginContextObj } from '../../context/user/userLoginContext';
import { walletContextObj } from '../../context/wallet/walletContext';

export default function Header() {
    const navigate = useNavigate();
    const [isNavOpen, setNavOpen] = useState(true);
    let [, setCurrentUser, loginStatus, setLoginStatus, ,] = useContext(userLoginContextObj);
    const { walletData } = useContext(walletContextObj);

    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    };

    function userLogout() {
        setCurrentUser({})
        setLoginStatus(false)
        navigate('/')
    }
    return (
        <nav className="navbarHeader navbar navbar-expand-md navbar-light bg-light sticky-top">
            <div className="container px-3 ">
                <NavLink className="navbar-brand " to="/">Game Box</NavLink>
                <button className={`navbar-toggler ${isNavOpen ? 'd-none' : ''}`} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={isNavOpen} aria-label="Toggle navigation" onClick={toggleNav}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <button className={`navbar-toggler bg-dark close-icon ${!isNavOpen ? 'd-none' : ''}`}
                    type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={isNavOpen} aria-label="Toggle navigation" onClick={toggleNav} >
                    <span className="close-icon" aria-hidden="true">&times;</span>
                </button>
                <div className={`collapse navbar-collapse ${isNavOpen ? '' : 'show'}`} id="navbarNav">
                    <ul className="navbar-nav ml-auto d-flex justify-content-around align-items-center">
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/games">Games</NavLink>
                        </li>
                        {loginStatus === false ? (
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/register" activeClassName="active">
                                    <button className='btn btn-primary' type="submit">Sign Up</button>
                                </NavLink>
                            </li>
                        ) : (<>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/players">Player</NavLink>
                            </li>

                            <li class="nav-item">
                                <NavLink className="nav-link" to="/top-up" activeClassName="active">
                                    <button className='btn btn-primary' type="submit">Balance: {walletData.currency}{walletData.amount}</button>
                                </NavLink>
                            </li>
                            <li className="nav-item" onClick={userLogout} activeClassName="active">
                                <button className='btn btn-primary' type="submit">Logout</button>
                            </li></>)
                        }
                    </ul>
                </div>
            </div>
        </nav>

    )
}
