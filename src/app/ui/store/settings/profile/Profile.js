import React from 'react'
import styles from './profile.module.css'
const Profile = () => {
    return (
        <>
            <div className={styles.profileCard +' '+'card p-3'}>
                <div className="align-items-center row "> 
                    <div className="image col-sm-4 text-center mb-4">
                        <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" className="rounded" width="155" />
                    </div>
                    <div className="col-sm-8 text-center">
                        <h4 className="mb-0 mt-0">Alex HMorrision</h4>
                        <span>@username</span>
                        <div className={styles.stats +' '+ 'p-2 mt-2 d-flex justify-content-between rounded text-white'}>
                            <div className="d-flex flex-column">
                                <span className={styles.articles}>Posts</span>
                                <span className={styles.number1}>38</span>
                            </div>
                            <div className="d-flex flex-column">
                                <span className={styles.followers}>Followers</span>
                                <span className={styles.number2}>980</span>
                            </div>
                            <div className="d-flex flex-column">
                                <span className={styles.rating}>Rating</span>
                                <span className={styles.number3}>8.9</span>
                            </div>
                        </div>
                        <div className="button mt-3 d-flex flex-row align-items-center">
                            <button className="btn btn-sm btn-dark w-100">Followers</button>
                            <button className="btn btn-sm btn-dark w-100 ms-2">Followsing</button>
                            <button className="btn btn-sm btn-dark w-100 ms-2">Ratings</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile