import React from 'react'
import './globals.css';
import Navbar from '../ui/home/navabr/Navbar';
function Layout({ children }) {
  return (
    <>
      <div className="main">
          <Navbar />    
          {children}                   
      </div>
    </>
  )
}

export default Layout