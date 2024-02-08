import React from 'react'

const Navbar = () => {
  return (
    <>

      <nav classNae="py-3 bg-light border-bottom shadow-sm bg-white mb-2">
        <div classNae="container d-flex flex-wrap">
          <ul classNae="nav me-auto">
            {/* <li classNae="nav-item"><a href="#" classNae="nav-link link-dark px-2 active" aria-current="page">Home</a></li> */}
            <li classNae="nav-item"><a href="#" classNae="nav-link link-dark px-2">Website Name</a></li>
            {/* <li classNae="nav-item"><a href="#" classNae="nav-link link-dark px-2">Pricing</a></li>
            <li classNae="nav-item"><a href="#" classNae="nav-link link-dark px-2">FAQs</a></li>
            <li classNae="nav-item"><a href="#" classNae="nav-link link-dark px-2">About</a></li> */}
          </ul>
          <ul classNae="nav">
            <li classNae="nav-item"><a href="#" classNae="nav-link link-dark px-2">Login</a></li>
            <li classNae="nav-item"><a href="#" classNae="nav-link link-dark px-2">Sign up</a></li>
          </ul>
        </div>
      </nav>      
    </>
  )
}

export default Navbar