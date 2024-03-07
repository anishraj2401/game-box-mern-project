import React from 'react'
import Bannner from './Banner';
import VideoBanner from './VideoBanner';
import TrendingGames from '../Games/TrendingGames';
import CardProducts from './CardProducts';
import VirtualCardBanner from './VirtualCardBanner';
import HowToPlay from '../Games/HowToPlay';

export default function Home() {
  return (
    <div>
      <Bannner />
      {/* Video Banner */}
      <VideoBanner />
      {/* Trending Games  */}
      <TrendingGames />
      {/* Virtual Card Section */}
      <VirtualCardBanner />
      {/* Products */}
      <CardProducts />
      {/* {How to Play} */}
      <HowToPlay />
    </div >
  )
}
