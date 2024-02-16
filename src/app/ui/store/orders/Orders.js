import Link from 'next/link'
import React from 'react'
import styles from './orders.module.css'
import { FaSquareArrowUpRight } from 'react-icons/fa6'

const Orders = () => {
    return (
        <>
            <div className='card p-3 border'>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-row text-center">
                        <img src="https://i.imgur.com/G1pXs7D.jpg" className={styles.profileImage +' '+'img-fluid'}  width="70" />
                        <div className={styles.about + ' ' + 'd-flex flex-column ms-2 mt-2'}>
                            <span className="font-weight-bold">Madison</span>
                            <small className='text-sall text-muted'>@username</small>
                        </div>
                    </div>                    
                    <Link href={'/store/orders/skajsdkaj'} className="btn btn-sm btn-outline-primary follow">View</Link>
                </div>
            </div>
        </>
    )
}

export default Orders