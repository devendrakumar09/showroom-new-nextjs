import React from 'react'
import DetailsUI from '@/app/ui/store/orders/details/Details'
import InvoiceUI from '@/app/ui/store/orders/invoice/Invoice'
import OrderProductUI from '@/app/ui/store/orders/details/orderproduct/OrderProduct'


const Details = () => {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-sm-7">
                    <DetailsUI />
                    <div className="mt-4">
                        <OrderProductUI />                      
                    </div>
                </div>
                <div className="col-sm-5">
                  <InvoiceUI />
                </div>
            </div>
        </div>
    </>
  )
}

export default Details