import React from 'react'
import Carousel from '../Components/Carousel'
import NewArrivalsCarousel from '../Components/NewArrivalsCarousel'
import ShopSection from '../Components/ShopSection'
import Footer from '../Components/Footer'
import NewCarousel from '../Components/NewCarousel'


function Home() {
  return (
    <div>
        <Carousel/>
        <NewCarousel/>
        <ShopSection/>
        <Footer/>
    </div>
  )
}

export default Home