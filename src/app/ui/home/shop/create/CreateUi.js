import Image from 'next/image'
import React from 'react'
import styles from './create.module.css'
import Link from 'next/link'
const CreateUi = () => {
    return (
        <>

            <div className="card card0 border-0">
                <div className="row d-flex">
                    <div className={styles.bg + ' ' + "col-lg-4 d-sm-none d-md-block"} style={{ background: 'url(/home/images/8.png)' }}>
                    </div>
                    <div className="col-lg-8">
                        <div className="card2 card border-0 px-4 px-sm-5 py-5">
                            <h3 className="display-4">Split page!</h3>
                            <p className="text-muted mb-4">Create a login split page using Bootstrap 4.</p>
                            <form>
                                <div className="form-group mb-2">
                                    <div className="input-group p-0 shadow-sm">
                                        <select className="form-control py-3" >
                                        <option value="">Category</option>
                                        </select>
                                        {/* <div className="input-group-append"><span className="input-group-text px-4"><i className="fa fa-clock-o"></i></span></div> */}
                                    </div>
                                </div>

                                <div className="form-group mb-2 ">
                                    <div className="input-group p-0 shadow-sm">
                                        <input type="text" placeholder="Title ..." className="form-control p-3" id="reservationDate" />
                                        {/* <div className="input-group-append"><span className="input-group-text px-4"><i className="fa fa-clock-o"></i></span></div> */}
                                    </div>
                                </div>

                                <div className="form-group mb-2">
                                    <div className="input-group p-0 shadow-sm">
                                        <textarea  placeholder="Description ..." className="form-control p-3" ></textarea>
                                        {/* <div className="input-group-append"><span className="input-group-text px-4"><i className="fa fa-clock-o"></i></span></div> */}
                                    </div>
                                </div>              <div className="text-end">
                                    <Link href={'/store/settings'} className="btn btn-dark btn-sn text-uppercase mb-2 shadow-sm">Next</Link>

                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CreateUi