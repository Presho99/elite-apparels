import React from 'react'
import Carousel from '../Components/Carousel'
import NewArrivalsCarousel from '../Components/NewArrivalsCarousel'
import ShopSection from '../Components/ShopSection'
import Footer from '../Components/Footer'


function Home() {
  return (
    <div>
        <Carousel/>
        <NewArrivalsCarousel/>
        <ShopSection/>
        <Footer/>
    </div>
  )
}

export default Home