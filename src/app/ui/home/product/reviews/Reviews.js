import React from 'react'
import { FaStar } from 'react-icons/fa6'
import styles from './reviews.module.css'
const Reviews = () => {
  return (

    <>
      <div className='card p-3 bg-white mb-2'>
        <div className="d-flex justify-content-between mt-2 align-items-center">
          <div className="d-flex flex-row">
            <img src="https://i.imgur.com/o5uMfKo.jpg" className="rounded-circle" width="50" />
            <div className={styles.about + ' ' + 'd-flex flex-column ms-2 '}>
              <span className="font-weight-bold">Madison</span>
              <small>@username</small>
            </div>
          </div>
          <div className="buttons">
            <button className="btn btn-dark BUTTONS btn-sm me-1">Dell</button>            
          </div>
        </div>
        <div className="messageAndRatings mt-1">
          <div className="ratingsAndDate d-flex justify-content-between ">
            <div className="ratings">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <div className="date">
              <small className="small text-muted">2 Days ago</small>
            </div>
          </div>
          <div className="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
        </div>
      </div>


    </>
  )
}

export default Reviews