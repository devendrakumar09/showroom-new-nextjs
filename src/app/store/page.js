import React from 'react'
import { FcAbout } from 'react-icons/fc'

const Dashboard = () => {
  return (
    <>
      <section classNae="">
        <div classNae="container py-5 pt-5">
          <div classNae="row">
            <div classNae="col-lg-6 mb-4">
              <div classNae="card border-0 shadow-sm rounded">
                <div classNae="card-body p-4">
                  <div classNae="row align-items-center">
                    <div classNae="col-lg-6">
                      <h3 classNae="fw-bold">Course statistics <FcAbout /></h3>
                      <p classNae="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                    </div>

                    <div classNae="col-lg-6">

                      
                      <canvas id="pieChart1"></canvas>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div classNae="col-lg-6 mb-4">
              <div classNae="card border-0 shadow-sm rounded">
                <div classNae="card-body p-4">
                  <div classNae="row align-items-center">
                    <div classNae="col-lg-6">
                      <h3 classNae="fw-bold">Course statistics</h3>
                      <p classNae="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                    </div>

                    <div classNae="col-lg-6">

                      
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