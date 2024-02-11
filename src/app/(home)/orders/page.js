import React from 'react'
import OrderUi from '@/app/ui/home/orders/Orders'
import Invoice from '@/app/ui/home/cart/Invoice'
import OrderSummery from '@/app/ui/home/orders/OrderSummery'
const Orders = () => {
  return (
    <>
      <div className="container mt-4 mb-4">        
        <div className="row">
          <div className="col-sm-8">
            <OrderUi />
          </div>
          <div className="col-sm-4">
            <OrderSummery />
          </div>
        </div>
      </div>
    </>
  )
}

export default Orders