import React from 'react'
import styles from './product.module.css'
import { FaHeart } from 'react-icons/fa6'
import Link from 'next/link'
const ProductNew = () => {
    return (
        <>
            <div className="card mb-2">
                {/* <div className="pe-3 d-flex justify-content-end">
                    <FaHeart className={styles.like} />
                </div> */}
                <div className={styles.productPic}>
                    <img className="pic1" src="https://i.imgur.com/fP3NOTX.png" />
                </div>
                <div className="text px-3">
                    <small className={styles.category}>Backpacks</small>
                    <h6 className={styles.productName}>
                        <Link href={'/products/dsahuydsa'}>TH Jeans City Backpack</Link>                        
                    </h6>
                </div>

                <div className="d-flex justify-content-between px-3">
                    <p className="price">$79.<span className="sm-text">50</span></p>
                    <div className="stars">
                        <button className="btn btn-dark btn-sm px-3">Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductNew