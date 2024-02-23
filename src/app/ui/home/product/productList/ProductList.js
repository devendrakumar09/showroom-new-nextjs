import React from 'react'
import styles from './productList.module.css'
import Link from 'next/link'
import { BsCart, BsCurrencyRupee, BsShare, BsStar } from 'react-icons/bs'

const ProductList = () => {
    return (
        <div className='card p-2 mb-1'>
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row text-center">
                    <img src="https://i.imgur.com/G1pXs7D.jpg" className={styles.profileImage + ' ' + 'img-fluid'} width="70" />
                    <div className={styles.about + ' ' + 'd-flex flex-column ms-2 mt-2'}>
                        <Link href={'#'} className="">Madison</Link>
                        <small className={styles.rating}><BsStar /><BsStar /><BsStar /><BsStar /><BsStar /></small>
                    </div>
                </div>
                <div className="col3 d-flex flex-column">
                    <small className="small fw-bold"><BsCurrencyRupee />54154</small>
                    <div className="buttons">
                        <button className="btn btn-sm btn-outline-dark me-1"><BsShare /></button>
                        <button className="btn btn-sm btn-outline-dark"><BsCart /></button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductList