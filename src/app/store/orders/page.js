import React from 'react'
import OrdersUI from '@/app/ui/store/orders/Orders'
import CardUI from '@/app/ui/store/orders/completeOrder /Card'
const Orders = () => {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-sm-7">
            <h4 className='heading mb-4'>New Orders</h4>
            <OrdersUI />
          </div>
          <div className="col-sm-5">
              <div className="row">
                <div className="col-md-12 col-6" >
                  <CardUI title='Complated Orders' amount={84254} /></div>
                <div className="col-md-12 col-6">
                  <CardUI title='Pending Order' amount={500.10} /></div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Orders