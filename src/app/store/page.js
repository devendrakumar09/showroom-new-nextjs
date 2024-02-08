import React from 'react'
import { FcAbout } from 'react-icons/fc'

const Dashboard = () => {
  return (
    <>
      <section className="">
        <div className="container py-5 pt-5">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card border-0 shadow-sm rounded">
                <div className="card-body p-4">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <h3 className="fw-bold">Course statistics <FcAbout /></h3>
                      <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                    </div>

                    <div className="col-lg-6">

                      
                      <canvas id="pieChart1"></canvas>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card border-0 shadow-sm rounded">
                <div className="card-body p-4">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <h3 className="fw-bold">Course statistics</h3>
                      <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                    </div>

                    <div className="col-lg-6">

                      
                      <canvas id="pieChart2"></canvas>

                    </div>
                  </div>
                </div>
              </div>
            </div>            
          </div>
        </div>
      </section>

    </>
  )
}

export default Dashboard