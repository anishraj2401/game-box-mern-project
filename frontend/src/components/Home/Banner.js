import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Banner() {
    let navigate = useNavigate();
    return (
        <div className="bannerHome d-flex justify-content-between align-items-center row ">
            <div className="leftBanner text-center d-flex flex-column justify-content-center align-items-center my-5 col-md-6">
                <h1 className=''>Welcome to Our Game Portal</h1>
                <p >
                    Dive into a World of Thrilling Adventures
                </p>
                <button className=' ' onClick={() => { navigate('/games') }}>Play Now</button>
            </div>
            <div className="rightBanner col-md-6">
                <img
                    src={require("../../image/20945364.jpg")}
                    alt="game banner"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
            </div>
        </div>
    )
}
