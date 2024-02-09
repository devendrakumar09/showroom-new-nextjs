import React from 'react'
import { FcAbout } from 'react-icons/fc'
import CardUI from '../ui/store/dashboard/Card'

const Dashboard = () => {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          wether Card
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