import ShopProfile from '@/app/ui/home/shop/shopProfile/ShopProfile'
import React from 'react'

const Rating = () => {
  return (
    <div className="container">
    <div className="heading mt-4">
      <h4 className="h4 fw-bold">Rating Given By ME </h4>
    </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <ShopProfile />
        </div>
      </div>
    </div>
  )
}

export default Rating