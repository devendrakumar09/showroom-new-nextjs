import Link from 'next/link'
import React from 'react'
import { FaBell, FaCartShopping, FaCircleUser } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <>

      <nav className="py-2 bg-light border-bottom shadow-sm bg-white mb-2 sticky-top">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            {/* <li className="nav-item"><a href="#" className="nav-link link-dark px-2 active" aria-current="page">Home</a></li> */}
            <li className="nav-item"> <Link href={'/'} className="nav-link link-dark px-2">Website Name</Link></li>
            {/* <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Pricing</a></li>
            <li className="nav-item"><a href="#" className="nav-link link-dark px-2">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link link-dark px-2">About</a></li> */}
          </ul>
          <ul className="nav">
            <li className="nav-item"><a href="#" className="nav-link link-dark px-2"><FaCartShopping className=' h5'/></a></li>
            <li className="nav-item"><a href="#" className="nav-link link-dark px-2"><FaCircleUser className='h5 ms-2 me-2' /></a></li>
          </ul>
        </div>
      </nav>      
    </>
  )
}

export default Navbar