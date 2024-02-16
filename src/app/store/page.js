import React from 'react'
import { FcAbout } from 'react-icons/fc'
import CardUI from '../ui/store/dashboard/Card'
import Welcome from '../ui/store/dashboard/Welcome/Welcome'
import Products from '../ui/store/products/Products'
import Orders from '../ui/store/orders/Orders'
import Users from '../ui/store/user/users/Users'
import Link from 'next/link'

const Dashboard = () => {
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <Welcome />
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6"><CardUI title="Orders" number={55} /></div>
              <div className="col-sm-6"><CardUI title="Customers" number={55} /></div>
              <div className="col-sm-6"><CardUI title="Products" number={55} /></div>
              <div className="col-sm-6"><CardUI title="Categories" number={55} /></div>
            </div>
          </div>
        </div>

        <div className="row mt-4">

          <div className="col-sm-7 Orders">
            <div className="row">
              <h4 className="h4 fw-bolder small">Recent Orders</h4>
              <div className="col-sm-12 mb-2">
                <Orders />
              </div>
              <div className="col-sm-12 mb-2">
                <Orders />
              </div>
              <div className="col-sm-12 mb-2">
                <Orders />
              </div>
              <div className="col-sm-12 mb-2">
                <Orders />
              </div>
              <div className="col-sm-12 text-center">
                <Link href={'/store/customers'} className='btn btn-sm btn-dark'>View More</Link>
              </div>

            </div>
          </div>

          {/* NEW CUSTOMERS */}
          <div className="col-sm-5 Customers">
            <div className="row">
              <h4 className="h4 fw-bolder small">New Customes</h4>
              <div className="col-sm-12">
                <Users />
              </div>
              <div className="col-sm-12">
                <Users />
              </div>
              <div className="col-sm-12">
                <Users />
              </div>
              <div className="col-sm-12">
                <Users />
              </div>
              <div className="col-sm-12">
                <Users />
              </div>
              <div className="col-sm-12 text-center">
                <Link href={'/store/customers'} className='btn btn-sm btn-dark'>View More</Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Dashboard