import React from 'react'
import ProductList from '../Components/ProductList'
import Footer from '../Components/Footer'

function Basics() {
  return (
    <div>
         <ProductList category="new-arrivals" />
         <Footer/>
    </div>
  )
}

export default Basics