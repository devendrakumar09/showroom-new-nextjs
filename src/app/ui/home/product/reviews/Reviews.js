import React from 'react'
import { FaStar } from 'react-icons/fa6'
import styles from './reviews.module.css'
const Reviews = () => {
  return (

    <>
      <div className='card p-2 mt-2 bg-white mb-2'>
        <div className="d-flex justify-content-between mt-2 align-items-center">
          <div className="d-flex flex-row">
            <img src="https://i.imgur.com/o5uMfKo.jpg" className="rounded-circle" width="50" />
            <div className={styles.about + ' ' + 'd-flex flex-column ms-2 '}>
              <span className="font-weight-bold">Madison</span>
              <small>@username</small>              
              <p>askdop asd isad i jsdaiidsj ijsdai iadsj ijasdij asiddj isad jidsajid ijadsi </p>
            </div>
          </div>          
        </div>
        
      </div>
    </>
  )
}

export default Reviews