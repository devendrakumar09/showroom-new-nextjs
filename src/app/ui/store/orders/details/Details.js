import React from 'react'
import styles from './details.module.css'
import { BsCurrencyRupee } from 'react-icons/bs'
const Details = () => {
  return (
    <>
      <div className="card p-4">


        <div className={styles.topContainer + ' ' + 'mb-4'}>
          <img src="https://i.imgur.com/G1pXs7D.jpg" className={styles.profileImage + ' ' + 'img-fluid'} width="70" />
          <div className="ms-3">
            <h5 className={styles.name}>Clarke Jeffery</h5>
            <p className={styles.mail}>clark@zmail.com</p>
          </div>
        </div>

        <div className="row ">
          <div className="col-md-8 ps-0 ">
            <p className="ps-3 textmuted fw-bold h6 mb-0">TOTAL PURCHASE</p>
            <p className="h1 fw-bold d-flex">
              <span className=" fas fa-dollar-sign textmuted pe-1 h6 align-text-top mt-1"></span>84,254
              <span className="textmuted">.58</span> </p>
            <p className="ms-3 px-2 text-success">+10% since last month</p>
          </div>

          <div className="col-md-4">
            <p className="p-blue"> <span className="fas fa-circle pe-2"></span>Current Order </p>
            <p className="fw-bold mb-3"><span className="fas fa-dollar-sign pe-1"></span>1254
              <span className="textmuted">.50</span> </p>
            {/* <p className="p-org"><span className="fas fa-circle pe-2"></span>On drafts</p>
            <p className="fw-bold">
              <span className="fas fa-dollar-sign pe-1"></span>00<span className="textmuted">.00</span></p> */}
          </div>
        </div>

      </div>


    </>
  )
}

export default Details