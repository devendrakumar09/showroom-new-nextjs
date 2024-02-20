import React from 'react'
import Sidebar from '../ui/store/sidebar/Sidebar'
import './globals.css'
import Navbar from '../ui/store/navabr/Navbar'

function Layout({ children }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
        <Sidebar />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-4">
           {/* <Navbar /> */}
            {children}            
          </main>
        </div>
      </div>

      

    </>
  )
}

export default Layout