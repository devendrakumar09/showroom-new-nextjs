import React from 'react'

const Orders = () => {
  return (
    <>
      <div className="card p-4 ">
        <div className="row">
          <div className="col-sm-4 text-center">
            <img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-1_gthops.jpg" alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2" />
          </div>
          <div className="col-sm-8">
            <div class="media-body order-2 order-lg-1 me-5 ms-4">
              <h5 class="mt-0 font-weight-bold mb-2">Awesome product</h5>
              <p class="font-italic text-muted mb-0 small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.</p>
              <div class="d-flex align-items-center justify-content-between mt-2">
                <h6 class="font-weight-bold my-2">$120.00</h6>
                <div className="buttons">
                  <button className="btn btn-dark btn-sm">cancle</button>
                  <button className="btn btn-dark btn-sm ms-2">Track</button>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Orders