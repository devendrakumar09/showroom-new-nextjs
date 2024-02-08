import React from 'react'
import './globals.css'
function Layout({ children }) {
  return (
    <div className='container'>
      {children}    
    </div>
  )
}

export default Layout