import React from 'react'
import ProductDetails from '@/app/ui/store/products/Details/Details'
import Reviews from '@/app/ui/store/reviews/Reviews'


const Details = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <ProductDetails />
          </div>          
        </div>
        <div className="row reviews mt-2">
          <div className="col-sm-8">
           <Reviews />
          </div>
        </div>
      </div>
    </>
  )
}

export default Details