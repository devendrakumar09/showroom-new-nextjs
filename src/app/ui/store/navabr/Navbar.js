import Link from 'next/link'
import React from 'react'
import { FaBell, FaCircleUser } from 'react-icons/fa6'
import styles from './navbar.module.css'
const Navbar = () => {
  return (
    <>

      <nav className={styles.background +' '+"py-3 border-bottom shadow-sm mb-2 sticky-top"}>
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            {/* <li className="nav-item"><a href="#" className="nav-link link-dark px-2 active" aria-current="page">Home</a></li> */}
            <li className="nav-item"> <Link href={'/'} className="nav-link link-dark px-2">Website Name</Link></li>
            {/* <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Pricing</a></li>
            <li className="nav-item"><a href="#" className="nav-link link-dark px-2">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link link-dark px-2">About</a></li> */}
          </ul>
          <ul className="nav">
            <li className="nav-item"><a href="#" className="nav-link link-dark px-2"><FaBell className='text-success h5'/></a></li>
            <li className="nav-item"><a href="#" className="nav-link link-dark px-2"><FaCircleUser className='h5 ms-2 me-2' /></a></li>
          </ul>
        </div>
      </nav>      
    </>
  )
}

export default Navbar