import Image from 'next/image'
import React from 'react'
import styles from './create.module.css'
import Link from 'next/link'
const CreateUi = () => {
    return (
        <>

            <div class="card card0 border-0">
                <div class="row d-flex">
                    <div class={styles.bg + ' ' + "col-lg-4 d-sm-none d-md-block"} style={{ background: 'url(/home/images/8.png)' }}>
                    </div>
                    <div class="col-lg-8">
                        <div class="card2 card border-0 px-4 px-sm-5 py-5">
                            <h3 class="display-4">Split page!</h3>
                            <p class="text-muted mb-4">Create a login split page using Bootstrap 4.</p>
                            <form>
                                <div class="form-group mb-2">
                                    <div class="input-group p-0 shadow-sm">
                                        <select class="form-control py-3" >
                                        <option value="">Category</option>
                                        </select>
                                        {/* <div class="input-group-append"><span class="input-group-text px-4"><i class="fa fa-clock-o"></i></span></div> */}
                                    </div>
                                </div>

                                <div class="form-group mb-2 ">
                                    <div class="input-group p-0 shadow-sm">
                                        <input type="text" placeholder="Search ..." class="form-control p-3" id="reservationDate" />
                                        {/* <div class="input-group-append"><span class="input-group-text px-4"><i class="fa fa-clock-o"></i></span></div> */}
                                    </div>
                                </div>

                                <div class="form-group mb-2">
                                    <div class="input-group p-0 shadow-sm">
                                        <input type="text" placeholder="Search ..." class="form-control p-3" id="reservationDate" />
                                        {/* <div class="input-group-append"><span class="input-group-text px-4"><i class="fa fa-clock-o"></i></span></div> */}
                                    </div>
                                </div>              <div className="text-end">
                                    <Link href={'/store/settings'} class="btn btn-dark btn-sn text-uppercase mb-2 shadow-sm">Next</Link>

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