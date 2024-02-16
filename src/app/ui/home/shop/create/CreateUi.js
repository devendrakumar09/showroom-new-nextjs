import Image from 'next/image'
import React from 'react'

const CreateUi = () => {
    return (
        <>

            <div class="card card0 border-0">
                <div class="row d-flex">
                    <div class="col-lg-4">
                        <div class="card1 pb-5">
                            {/* <div class="row px-3">
                                <h5 class="logo"><u>izylearning</u></h5>
                            </div> */}
                            <div class="row px-3 justify-content-center mt-4 mb-5">
                                <div class="bgimage border" style={{height:'100%', width:'100vh', overflow:'hidden'}} >
                                    <img src={'/home/images/2.jpg'} alt='sdadsa' style={{height:'100%', width:'100%'}} />
                                </div>
                            </div>                            
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="card2 card border-0 px-4 px-sm-5 py-5">
                            <h3 class="display-4">Split page!</h3>
                            <p class="text-muted mb-4">Create a login split page using Bootstrap 4.</p>
                            <form>
                                <div class="form-group mb-3">
                                    <select id="inputPassword" class="form-control py-3" >
                                        <option value="">Category</option>
                                    </select>
                                </div>
                                <div class="form-group mb-3">
                                    <input id="inputEmail" type="email" placeholder="Title of Store" required="" autofocus="" class="form-control py-3" />
                                </div>

                                <div class="form-group mb-3">
                                    <textarea id="inputPassword" placeholder="Short Description" required="" class="form-control py-3" />
                                </div>

                                <div className="text-end">
                                    <button type="submit" class="btn btn-dark btn-sn text-uppercase mb-2 shadow-sm">Next</button>

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