import Link from 'next/link'
import React from 'react'
import { FaBell, FaCartShopping, FaCircleUser } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <>

      <nav className="py-2 bg-light border-bottom shadow-sm bg-white  sticky-top">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            {/* <li className="nav-item"><a href="#" className="nav-link link-dark px-2 active" aria-current="page">Home</a></li> */}
            <li className="nav-item"> <Link href={'/'} className="nav-link link-dark px-2">Website Name</Link></li>
            {/* <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Pricing</a></li>
            <li className="nav-item"><a href="#" className="nav-link link-dark px-2">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link link-dark px-2">About</a></li> */}
          </ul>

          <ul className="nav">
            <li className="nav-item">
              <Link href={'/shop'} className="nav-link link-dark px-2">Store</Link>
            </li>

            <li className="nav-item">
              <Link href={'/products'} className="nav-link link-dark px-2">Product</Link>
            </li>
          </ul>

          <ul className="nav">
            <li className="nav-item">
              <Link href={'/cart'} className="nav-link link-dark px-2"><FaCartShopping /></Link>
            </li>
            <li className="nav-item">
              <Link href={'/profile'} className="nav-link link-dark px-2"><FaCircleUser /></Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar