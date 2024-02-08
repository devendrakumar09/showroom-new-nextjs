import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>

      <nav className="py-3 bg-light border-bottom shadow-sm bg-white mb-2">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            {/* <li className="nav-item"><a href="#" className="nav-link link-dark px-2 active" aria-current="page">Home</a></li> */}
            <li className="nav-item"> <Link href={'/'} className="nav-link link-dark px-2">Website Name</Link></li>
            {/* <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Pricing</a></li>
            <li className="nav-item"><a href="#" className="nav-link link-dark px-2">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link link-dark px-2">About</a></li> */}
          </ul>
          <ul className="nav">
            <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Login</a></li>
            <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Sign up</a></li>
          </ul>
        </div>
      </nav>      
    </>
  )
}

export default Navbar