import React from 'react'
import styles from './add.module.css'
const Add = () => {
    return (
        <>
            <div className="card">
                <div className="card-body py-5 px-4">
                    <h2 className="text">Add New Offer</h2>
                    <div className="mb-3">
                        <label className={styles.labels + ' ' + 'form-label'}>Ttile</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className={styles.labels + ' ' + 'form-label'}>Short description</label>
                        <textarea className='form-control' />
                    </div>

                    <div className="row">
                        <div className="mb-3 col-sm-6">
                            <label className={styles.labels + ' ' + 'form-label'}>Category OFF in %</label>

                            <select class="selectpicker form-control mb-1">
                                <option >Categoties</option>
                                <option >Ultrasound Knee Left</option>
                                <option >MRI Knee Right</option>
                                
                            </select>
                        </div>

                        <div className="mb-3 col-sm-6">
                            <label className={styles.labels + ' ' + 'form-label'}>Minimum order</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <a href="#" className="btn btn-dark">Publish</a>
                </div>
            </div>
        </>
    )
}

export default Add