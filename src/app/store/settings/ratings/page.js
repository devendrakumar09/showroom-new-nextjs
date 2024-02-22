import React from 'react'
import RatingUi from '@/app/ui/store/settings/ratings/Rating'
import Reviews from '@/app/ui/store/reviews/Reviews'
const Rating = () => {
  return (
    <>
      <div className="heading mb-2">
        <h4 className="h4 fw-bold">Rating</h4>
      </div>
      <div className="rating">
        <RatingUi />
      </div>
      <div className="review mt-4">
        <Reviews />
      </div>
    </>
  )
}

export default Rating