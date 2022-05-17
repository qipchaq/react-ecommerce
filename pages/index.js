import React from 'react'

import { Product, FooterBanner, HeroBanner } from '../components';

const index = () => {
  return (
    <>
      {/* <HeroBanner heroBanner={bannerData.length && bannerData[0]} /> */}
      <HeroBanner />
      Hero
      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>speaker There are many variations passages</p>
      </div>

      <div className="products-container">
        {/* {products?.map((product) => <Product key={product._id} product={product} />)} */}
        Product!
      </div>

      {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
      <FooterBanner />
      Footer
    </>
  )
}

export default index