import React from 'react'
import Footer from '../Components/Footer'
import ProductList from '../Components/ProductList'

function Sale() {
  return (
    <div>
             <ProductList category="sale" />
             <Footer/>

    </div>
  )
}

export default Sale