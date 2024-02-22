import React from 'react'
import styles from './addReview.module.css'
import { BsStar } from 'react-icons/bs'
const AddReview = () => {
  return (
    <>

      <div className="card p-4 shadow-sm">
        <div className="px-3 d-flex justify-content-star align-items-center mt-3 bg-light">
          <img className={styles.profile_pic + ' ' + "me-3"} src="https://i.imgur.com/6tPhTUn.jpg" />
          <div className="d-flex column">
            <h6 className="mb-0 font-weight-normal">Camilla Perez</h6>
          </div>
        </div>
        <div className="row px-3 form-group">
          <textarea className={styles.textarea + ' ' + "text-muted bg-light mt-4 mb-3"} placeholder="Hi Camilla, what's on your mind today?"></textarea>
        </div>
        <div className="row px-3">
          <div className="d-flex justify-content-between">
            <BsStar className='StarIcon' />
            <BsStar className='StarIcon' />
            <BsStar className='StarIcon' />
            <BsStar className='StarIcon' />
            <BsStar className='StarIcon' />
          </div>
          <div className="btn btn-success ml-auto mt-3">Post</div>
        </div>
      </div>
    </>
  )
}

export default AddReview