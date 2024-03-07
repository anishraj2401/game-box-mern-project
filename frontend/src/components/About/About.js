import React from 'react'
import CardProducts from '../Home/CardProducts'

export default function About() {
    return (
        <div>
            <h1 className='text-right banner-box' id=''>About Us</h1>
            <div>
                <div className="aboutContainer1">
                    <h1 className=''>The world’s destination for gaming</h1>
                    <p className="m-3">We’re on a mission to build the world’s best gaming platform for gamers.</p>
                </div>
                <div className="aboutContainer2">
                    <div className="contents row">
                        <img src={require("../../image/center5.png")} alt="game center" className='col-lg-4' />
                        <p className="aboutP col-lg-7">The battle is building! Drop into the Battle Royale. Loot, build, explore, and fight in a game of 100 players competing to be the last one standing.Drop into the Battle Royale. Loot, build, explore, and fight in a game of 100 players competing to be the last one standing.Drop into the Battle Royale. Loot, build, explore, and fight in a game of 100 players competing to be the last one standing.</p>
                    </div>
                </div>
                <CardProducts />
            </div>
        </div >

    )
}
