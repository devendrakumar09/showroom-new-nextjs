import React from 'react'

const Invoice = () => {
  return (
    <div className="card p-4">
      <p className="textmuted h8">Invoice</p>
      <p className="fw-bold h7">Alex Parkinson</p>
      <p className="textmuted h8">3897 Hickroy St, salt Lake city</p>
      <p className="textmuted h8 mb-2">Utah, United States 84104</p>
      <div className="h8">
        <div className="row m-0 border mb-3">
          <div className="col-6 h8 pe-0 ps-2">
            <p className="textmuted py-2">Items</p>
            <span className="d-block py-2 border-bottom">Legal Advising</span>
            <span className="d-block py-2">Expert Consulting</span>
          </div>
          <div className="col-2 text-center p-0">
            <p className="textmuted p-2">Qty</p> <span className="d-block p-2 border-bottom">2</span>
            <span className="d-block p-2">1</span>
          </div>
          <div className="col-2 p-0 text-center h8 border-end">
            <p className="textmuted p-2">Price</p>
            <span className="d-block border-bottom py-2"><span className="fas fa-dollar-sign"></span>500</span>
            <span className="d-block py-2 "><span className="fas fa-dollar-sign"></span>400</span>
          </div>
          <div className="col-2 p-0 text-center">
            <p className="textmuted p-2">Total</p>
            <span className="d-block py-2 border-bottom"><span className="fas fa-dollar-sign"></span>1000</span>
            <span className="d-block py-2"><span className="fas fa-dollar-sign"></span>400</span>
          </div>
        </div>
        <div className="d-flex h7 mb-2">
          <p className="">Total Amount</p>
          <p className="ms-auto"><span className="fas fa-dollar-sign"></span>1400</p>
        </div>
        <div className="h8 mb-5">
          <p className="textmuted">Lorem ipsum dolor sit amet elit. Adipisci ea harum sed quaerat tenetur </p>
        </div>
      </div>  

      <button className='btn btn-primary'> Print</button>
      
    </div>
  )
}

export default Invoice