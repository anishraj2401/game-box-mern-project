import React from 'react'
import { useNavigate } from 'react-router-dom';
import VirtualCard from '../Wallet/VirtualCard'

export default function VirtualCardBanner() {
    let navigate = useNavigate();
    return (
        <div className="bannerHome d-flex justify-content-around align-items-center row">
            <div className="leftBanner card-body d-flex flex-column justify-content-center align-items-center col-md-6">
                <h3 >Buy Virtual Card</h3>
                <p> Lorem ipsum dolor sit amet, Integer nec ipsum dolor sit amet, Integer nec odio.Lorem ipsum dolor sit amet, Integer nec odio. </p>
                <button className=' ' onClick={() => (navigate('/top-up'))}>Buy Now</button>
            </div>
            {/* Virtual Card Details */}
            {/* <div className="rightBanner"> */}
            <VirtualCard />
            {/* </div> */}
        </div>
    )
}
