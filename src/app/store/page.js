import React from 'react'
import { FcAbout } from 'react-icons/fc'
import CardUI from '../ui/store/dashboard/Card'
import Welcome from '../ui/store/dashboard/Welcome/Welcome'

const Dashboard = () => {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <Welcome />
        </div>
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-6"><CardUI /></div>
            <div className="col-sm-6"><CardUI /></div>
            <div className="col-sm-6"><CardUI /></div>
            <div className="col-sm-6"><CardUI /></div>
          </div>
        </div>        
      </div>
    </div>   
    </>
  )
}

export default Dashboard