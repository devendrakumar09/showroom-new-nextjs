import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const Card = ({ title, number, link }) => {
  return (
    <>
      <div class="card mt-3 p-4 text-white shadow-sm">
        <div className="d-flex flex-row justify-content-between text-align-center">
          <h6 class="top mb-1 fw-bolder text-uppercase">{title}</h6>
          <div class="">
            <h2><i class="fas fa-euro-sign"></i><span>{number}</span></h2>
            {/* <div class="discount"><span>32% OFF</span></div> */}
          </div>
        </div>
        {/* <div class="mt-2">
        
        <Link class="btn btn-block btn-sm btn-dark" href={'#'}><span>More Details </span><FaArrowRight className='ms-2'/></Link>
        </div> */}
      </div>
    </>
  )
}

export default Card