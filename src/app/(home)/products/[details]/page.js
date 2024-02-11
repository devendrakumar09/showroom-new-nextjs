import React from 'react'
import DetailsUi from '@/app/ui/home/product/Details/Details'
import Reviews from '@/app/ui/home/product/reviews/Reviews'
import AddReview from '@/app/ui/home/product/reviews/AddReview'
const Details = () => {
  return (
    <>
      <div className="container mt-2 mb-2">
        <div className="row">
          <div className="col-sm-12">
            <DetailsUi />
          </div>
        </div> 
        <div className="row">
          <div className="col-sm-8">
            <Reviews />
          </div>
          <div className="col-sm-4">
            <AddReview />
          </div>
        </div>
      </div>
    </>
  )
}

export default Details