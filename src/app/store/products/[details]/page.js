import React from 'react'
import ProductDetails from '@/app/ui/store/products/Details/Details'
import Reviwes from '@/app/ui/store/products/reviwes/Reviwes'

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
            <Reviwes />
          </div>
        </div>
      </div>
    </>
  )
}

export default Details