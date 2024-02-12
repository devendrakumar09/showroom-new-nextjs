import React from 'react'
import DetailsUi from '@/app/ui/home/product/Details/Details'
import Reviews from '@/app/ui/home/reviews/Reviews'
import AddReview from '@/app/ui/home/reviews/AddReview'
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
          <div className="col-sm-4 sticky-top">
            <AddReview />
          </div>
        </div>
      </div>
    </>
  )
}

export default Details