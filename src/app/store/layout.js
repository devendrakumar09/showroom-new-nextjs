import React from 'react'
import Sidebar from '../ui/store/sidebar/Sidebar'
import './globals.css'
import HeaderNavbar from '../ui/store/navabr/HeaderNavbar'


function Layout({ children }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
        <Sidebar />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <HeaderNavbar />
            {children}            
          </main>
        </div>
      </div>

      

    </>
  )
}


export default Layout