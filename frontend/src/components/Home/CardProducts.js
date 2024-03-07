import React from 'react'

export default function CardProducts() {
    return (
        <div className="cardBanner border-bottom">
            <h1 className='text-center my-5 text-primary'>Our Products</h1>
            <div className="aboutContainer3 ">
                <div className="contents row ">
                    <div className="cardBox mb-5">
                        <div className="items-center">
                            <img className='card-img-top' src={require("../../image/card01.jpg")} alt="Trending Game" />
                            <div className="card-body flex items-center ">
                                <h5 className="card-title text-center">Discover Our Games</h5>
                            </div>
                        </div>
                    </div>
                    <div className="cardBox mb-5">
                        <div className=" items-center ">
                            <img className='card-img-top' src={require("../../image/card02.jpg")} alt="Trending Game" />
                            <div className="card-body flex items-center ">
                                <h5 className="card-title text-center">Explore our Virtual Pass</h5>
                            </div>
                        </div>
                    </div>
                    <div className="cardBox mb-5">
                        <div className="items-center ">
                            <img className='card-img-top' src={require("../../image/card03.jpg")} alt="Trending Game" />
                            <div className="card-body flex items-center ">
                                <h5 className="card-title text-center">Game News</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
