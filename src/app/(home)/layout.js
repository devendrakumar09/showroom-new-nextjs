import React from 'react'
import './globals.css';
function Layout({ children }) {
  return (
    <>
      <div className="container-fluid">      
          {children}                   
      </div>
    </>
  )
}

export default Layout