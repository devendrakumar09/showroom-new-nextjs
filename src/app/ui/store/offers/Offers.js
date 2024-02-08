import React from 'react'
import styles from './offers.module.css'
import Add from './add/Add'
const Offers = () => {
    return (
        <>
            <div className={styles.card}>
                <div className="row justify-content-center">
                    <div className="col-md-9 col-11">
                        <div className="row mt-0">
                            <div className="col-md-12 ">
                                <p className={styles.subHeading + ' ' + 'text-center'}>enter your email and get</p>
                            </div>
                        </div>
                        <div className="row mt-0">
                            <div className="col-md-12 ">
                                <h4 className={styles.heading + ' ' + 'text-center'}>10% off</h4>
                            </div>
                        </div>
                        <div className="row mt-0">
                            <div className="col-md-12 ">
                                <p className="text-center sub-heading2">with order of $ 25 of more</p>
                            </div>
                        </div>
                        <div className="form-group row justify-content-center mb-0">
                            <div className="col-md-12 px-3">
                                <p className="conditions">First time registerants only. "$10 off on $25+ orders, and entering your email also makes you eligible to receive future promotional emails.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offers