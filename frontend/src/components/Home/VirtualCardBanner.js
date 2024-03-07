import React from 'react'
import { useNavigate } from 'react-router-dom';
import VirtualCard from '../Wallet/VirtualCard'

export default function VirtualCardBanner() {
    let navigate = useNavigate();
    return (
        <div className="m-5 d-flex justify-content-between align-items-center row">
            <div className="card-body col-md-5 ">
                <h3 className=''>Buy Virtual Card</h3>
                <p> Lorem ipsum dolor sit amet, Integer nec odio.Lorem ipsum dolor sit amet, Integer nec odio.Lorem ipsum dolor sit amet, Integer nec odio. </p>
                <button className=' ' onClick={() => (navigate('/top-up'))}>Buy Now</button>
            </div>
            {/* Virtual Card Details */}
            <VirtualCard />
        </div>
    )
}
