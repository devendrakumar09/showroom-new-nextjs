import React from 'react'

const OrderProduct = () => {
    return (
        <div className="card align-items-lg-center flex-column flex-lg-row p-3">
            <div className="card-body order-2 order-lg-1">
                <div className="row">
                    <div className="col-sm-3">
                        <img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-1_gthops.jpg" alt="Generic placeholder image" width="100" className="ml-lg-5 order-1 order-lg-2" />
                    </div>
                    <div className="col-sm-9">
                        <h5 className="mt-0 font-weight-bold mb-2">Awesome product</h5>                        
                        <div className="d-flex align-items-center justify-content-between mt-1">
                            <h6 className="font-weight-bold my-2">$120.00</h6>
                            <ul className="list-inline small">
                                <li className="list-inline-item m-1">                                    
                                    <button className='btn btn-outline-dark btn-sm'>Cancle</button>
                                </li>

                                <li className="list-inline-item m-1">                                    
                                    <button className='btn btn-outline-primary btn-sm'>Accept</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderProduct