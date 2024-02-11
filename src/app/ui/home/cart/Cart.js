import React from 'react'
import { FaStar } from 'react-icons/fa6'

const Cart = () => {
  return (
    <>

      <div className="card p-4 mt-2">
        <div className="row">
          <div className="col-sm-4 text-center">
            <img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-1_gthops.jpg" alt="Generic placeholder image" width="200" className="ml-lg-5 order-1 order-lg-2" />
          </div>
          <div className="col-sm-8">
            <div className="media-body order-2 order-lg-1 me-5 ms-4">
              <h5 className="mt-0 font-weight-bold mb-2">Awesome product</h5>
              <p className="font-italic text-muted mb-0 small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.</p>
              <div className="d-flex align-items-center justify-content-between mt-2">
                <h6 className="font-weight-bold my-2">$120.00</h6>
                <div className="buttons">
                  <button className="btn btn-dark btn-sm">cancle</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default Cart