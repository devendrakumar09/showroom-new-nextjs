import React from 'react'
import styles from './product.module.css'
import { FaCartShopping, FaHeart } from 'react-icons/fa6'
import Link from 'next/link'
const Product = () => {
    return (
        <>
            
            <div className="card ps-4 pe-3 py-2 mt-2 ">
                <div className="div1 row pl-4 px-2">
                    <div className="col-3 mt-2">
                        <button className={styles.discBtn + ' ' + "btn discBtn text-white p-1 p-md-2"}>-25%</button>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <img src="https://i.imgur.com/3SKCNZw.jpg" height="" width="150%" alt="" />
                    </div>
                    <div className="col-3 d-flex flex-column pl-4">
                        <i className="fa fa-heart fa-lg mt-4" aria-hidden="true"></i>
                        <FaHeart className='h5' />

                        {/* <i className="fa fa-balance-scale mt-3 font-weight-bold" aria-hidden="true"></i> */}
                    </div>
                </div>
                <div className="py-2 mt-4">
                    <small className={styles.small}> Apple A12, 4 GB, 64GB </small>
                    <Link href={'/products/asjdij'}>
                        <h6 className='mb-0'>Smartphone Apple iPhone Xs 64GB E2 Silver</h6>
                    </Link>
                    <div className="d-flex mt-3">
                        <h6 className="align-self-center small">Rs. 29 999</h6>
                        <button className="d-flex ms-auto  btn btn-dark btn-sm font-weight-bold ps-4 pe-4 border-0">
                            Buy
                        </button>                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product