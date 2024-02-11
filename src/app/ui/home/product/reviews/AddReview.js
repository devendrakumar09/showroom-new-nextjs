import React from 'react'
import styles from './addReview.module.css'
const AddReview = () => {
  return (
    <>
      
      
          <div className="card p-4">
            <div className="px-3 d-flex justify-content-star align-items-center mt-3">
              <img className={styles.profile_pic +' '+ "me-3"} src="https://i.imgur.com/6tPhTUn.jpg" />
                <div className="d-flex column">
                  <h5 className="mb-0 font-weight-normal">Camilla Perez</h5>                  
                </div>
            </div>
            <div className="row px-3 form-group">
              <textarea className={styles.textarea +' '+"text-muted bg-light mt-4 mb-3"} placeholder="Hi Camilla, what's on your mind today?"></textarea>
            </div>
            <div className="row px-3">
              <input type="range" name="" id="" step={1} max={5} min={0}/>
              <div className="btn btn-success ml-auto">Post</div>
            </div>
          </div>
    </>
  )
}

export default AddReview