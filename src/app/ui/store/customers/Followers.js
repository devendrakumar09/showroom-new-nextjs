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
                    <div className="buttons">
                        <button className="btn btn-dark BUTTONS btn-sm me-1">Block</button>
                        <button className="btn btn-dark BUTTONS btn-sm">Follow Back</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Followers