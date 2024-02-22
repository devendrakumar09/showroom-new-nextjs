import AddReview from '@/app/ui/home/reviews/AddReview'
import Reviews from '@/app/ui/home/reviews/Reviews'
import React from 'react'

const Rating = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <AddReview />
        </div>
        <div className="col-sm-8">
          Rating Card
        </div>
      </div>

      <div className="row reviews mt-4">
        <Reviews />
      </div>
    </div>
  )
}

export default Rating