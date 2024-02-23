import React from 'react'
import styles from './product.module.css'
import { FaHeart, FaShare, FaStar, FaStarHalf } from 'react-icons/fa6'
import Link from 'next/link'
import { BsCart, BsShare } from 'react-icons/bs'
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
                    <small className={styles.category +' '+ 'mark'}><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/></small>
                    <h6 className={styles.productName}>
                        <Link href={'/products/dsahuydsa'}>TH Jeans City Backpack</Link>                        
                    </h6>
                </div>

                <div className="d-flex justify-content-between px-3 mb-2">
                    <p className="price">$79.<span className="sm-text">50</span></p>
                    <div className="stars">
                        <button className="btn btn-dark btn-sm me-1"><BsShare /></button>                    
                        <button className="btn btn-dark btn-sm "><BsCart /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductNew