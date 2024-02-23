import React from 'react'
import styles from './ratings.module.css'
import { BsStar } from 'react-icons/bs'
const Rating = () => {
    return (
        <>
            <div className='card'>
                <div className={styles.ratings}>
                    <span className={styles.productRating}>4.6</span><span>/5</span>
                    <div className={styles.stars}>
                        <BsStar/>
                        <BsStar/>            
                        <BsStar/>
                        <BsStar/>
                        <BsStar/>
                    </div>
                    <div className={styles.ratingText}>
                        <span>46 ratings & 15 reviews</span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Rating