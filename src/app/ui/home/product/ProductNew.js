import React from 'react'
import styles from './product.module.css'
import { FaHeart } from 'react-icons/fa6'
import Link from 'next/link'
const ProductNew = () => {
    return (
        <>
            <div class="card mb-2">
                {/* <div class="pe-3 d-flex justify-content-end">
                    <FaHeart class={styles.like} />
                </div> */}
                <div class={styles.productPic}>
                    <img class="pic1" src="https://i.imgur.com/fP3NOTX.png" />
                </div>
                <div className="text px-3">
                    <small class={styles.category}>Backpacks</small>
                    <h6 class={styles.productName}>
                        <Link href={'/products/dsahuydsa'}>TH Jeans City Backpack</Link>                        
                    </h6>
                </div>

                <div class="d-flex justify-content-between px-3">
                    <p class="price">$79.<span class="sm-text">50</span></p>
                    <div class="stars">
                        <button className="btn btn-dark btn-sm px-3">Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductNew