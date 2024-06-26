import React from 'react'
import { BsPen } from 'react-icons/bs'
import { FaCartShopping, FaCircleCheck, FaTrash } from 'react-icons/fa6'

const Category = () => {
  return (
    <>
      <div className="card rounded shadow-sm border-0 mt-2">
        <div className="card-body p-3">
          <img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-2_g4qame.jpg" alt="" className="img-fluid d-block mx-auto mb-3 rounded" />
          <h5 className="">Awesome product</h5>
          <p className="small font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>         
          <div className="bottom d-flex justify-content-between">
            <span className="small">Products 25</span>
            <FaTrash className='text-danger'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Category