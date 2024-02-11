import React from 'react'
import CartUi from '@/app/ui/home/cart/Cart'
import InvoiceUi from '@/app/ui/home/cart/Invoice'
const Cart = () => {
  return (
    <div className="container mt-4 mb-4">
        <div className="row">
            <div className="col-sm-7">
                <CartUi />
            </div>
            <div className="col-sm-5">
                <InvoiceUi />      
            </div>
        </div>
    </div>
  )
}

export default Cart