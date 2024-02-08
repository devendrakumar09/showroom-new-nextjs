import React from 'react'
import styles from './followers.module.css'

const Followers = () => {
    return (
        <>
            <div className='card p-3 bg-white mb-2'>
                <div className="d-flex justify-content-between mt-2 align-items-center">
                    <div className="d-flex flex-row">
                        <img src="https://i.imgur.com/o5uMfKo.jpg" className="rounded-circle" width="50" />
                        <div className={styles.about + ' ' + 'd-flex flex-column ms-2 '}>
                            <span className="font-weight-bold">Madison</span>
                            <small>@username</small>
                        </div>
                    </div>
                    <button className="btn btn-dark follow">Follow</button>
                </div>
            </div>
        </>
    )
}

export default Followers