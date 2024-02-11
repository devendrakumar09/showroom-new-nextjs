import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const Card = () => {
  return (
    <>
      <div class="card mt-2 p-4">
        <p class="top mb-1">You need to pay</p>
        <div class="d-flex flex-row justify-content-between text-align-center xyz">
          <h2><i class="fas fa-euro-sign"></i><span>888</span></h2>
          <div class="discount"><span>32% OFF</span></div>
        </div>
        <div class="mt-2">
        <button class="btn btn-block btn-sm btn-dark"><span>More Details </span><FaArrowRight className='ms-2'/></button>
        </div>
      </div>
    </>
  )
}

export default Card