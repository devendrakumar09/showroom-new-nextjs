import React from 'react'
import { FaStar } from 'react-icons/fa6'
import styles from './reviews.module.css'
const Reviews = () => {
  return (

    <>
      <div className='card p-3 bg-white mb-2'>
        <div className="d-flex justify-content-between mt-2 align-items-center">
          <div className="d-flex flex-row">
            <img src="https://i.imgur.com/o5uMfKo.jpg" className="rounded-circle" width="50" height={50} />
            <div className={styles.about + ' ' + 'd-flex flex-column ms-2 '}>                          
              <span className="fw-bolder mt-2">Madison</span>
              <small className='small'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> <span className="ms-2 small text-muted">2 Days Ago</span></small>
              <p className="p small text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="buttons">
            <button className="btn btn-outline-dark btn-sm me-1">Dell</button>            
          </div>
        </div>        
      </div>


    </>
  )
}

export default Reviews