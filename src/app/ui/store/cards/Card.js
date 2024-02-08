import React from 'react'
import styles from './card.module.css'
import { BsDash } from 'react-icons/bs'
const Card = (props) => {
  return (
    <>
      <div className="card mb-4">

        <div className="card-body">
          <span className="fs-6 text-uppercase fw-semibold ls-md">{props.title}</span>
          <div className="mt-2 d-flex justify-content-between align-items-center">
            <div className="lh-1">
              <h2 className="h1 fw-bold mb-1">2,000</h2>
              <span className='small'>100Last 30Days</span>
            </div>
            <div>
              <span className="bg-light-primary icon-shape icon-xl rounded-3 text-dark-primary">
                <img src="../../assets/images/svg/file-text.svg" alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card