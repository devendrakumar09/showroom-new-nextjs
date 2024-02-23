import Link from 'next/link'
import React from 'react'
import { BsPlus, BsPlusCircle } from 'react-icons/bs'
import { FaCirclePlus } from 'react-icons/fa6'

const ProfileUi = () => {
  return (
    <>
      <div className='card rounded border-0 shadow-sm position-relative p-3 mb-2'>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex flex-row ">
            <img src="https://i.imgur.com/G1pXs7D.jpg" className='rounded mx-auto d-block' width="70" />
            <div className={'d-flex flex-column ms-2 mt-2'}>
              <span className="font-weight-bold">Madison alex Aol</span>
              <small className='text-sall text-muted'>@username</small>
            </div>
          </div>          
        </div>
        <div className="address mt-3">
          <h6 className="text-uppercase">Address
            <Link href={'#'}><FaCirclePlus className="ms-2" style={{marginTop:'-4px'}}/></Link>
          </h6>
          <button className="btn btn-dark btn-sm me-1">Office</button>
          <button className="btn btn-dark btn-sm me-1">Home Town 1</button>
          <button className="btn btn-dark btn-sm me-1">Home Town 2</button>          
        </div>
      </div>
    </>
  )
}

export default ProfileUi