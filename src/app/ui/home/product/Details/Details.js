import React from 'react'
import styles from './details.module.css'
import { FaStar } from 'react-icons/fa6'

const Details = () => {
  return (

    <>
      <div className={styles.card}>
        <div className="row g-0">
          <div className="col-md-6 border-end">
            <div className="d-flex flex-column justify-content-center">
              <div className={styles.main_image}>
                <img src="https://i.imgur.com/TAzli1U.jpg" id="main_product_image" width="350" />
              </div>
              <div className={styles.thumbnail_images}>
                <ul id="thumbnail">
                  <li><img onclick="changeImage(this)" src="https://i.imgur.com/TAzli1U.jpg" width="70" /></li>
                  <li><img onclick="changeImage(this)" src="https://i.imgur.com/w6kEctd.jpg" width="70" /></li>
                  <li><img onclick="changeImage(this)" src="https://i.imgur.com/L7hFD8X.jpg" width="70" /></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className={styles.right_side + ' ' + "ms-4"} >
              <div className="d-flex justify-content-between align-items-center">
                <h3>IIlana</h3> <span className="heart"><i className='bx bx-heart'></i></span>
              </div>
              <div className={styles.content}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua</p>


              </div>
              <h3>$430.99</h3>
              <div className={styles.ratings + ' ' + "d-flex flex-row align-items-center"}>
                <div className="d-flex flex-row"> 
                  <FaStar />
                  <FaStar />                  
                  <FaStar />                  
                  <FaStar />
                </div>
                <span>441 reviews</span>
              </div>
              <div className="mt-5"> <span className="fw-bold">Color</span>
                <div className={styles.colors}>
                  <ul id="marker">
                    <li id="marker-1"></li>
                    <li id="marker-2"></li>
                    <li id="marker-3"></li>
                    <li id="marker-4"></li>
                    <li id="marker-5"></li>
                  </ul>
                </div>
              </div>
              <div className={styles.buttons + ' ' + "d-flex flex-row mt-5 gap-3"}>
                <button className="btn btn-outline-dark">Buy Now</button>
                <button className="btn btn-dark">Add to Basket</button> </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Details