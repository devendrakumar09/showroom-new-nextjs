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
                                Text
                            </div>
                            <div class="row px-3 text-center justify-content-center mb-0 social">
                                <span class="fa fa-facebook-square mx-2"></span>
                                <span class="fa fa-twitter mx-2"></span>
                                <span class="fa fa-instagram mx-2"></span>
                                <span class="fa fa-youtube-play mx-2"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="card2 card border-0 px-4 px-sm-5 py-5">                            
                            <h3 class="mb-1">Create New Store</h3>
                            <p class="mb-4 small text-muted">   Create our account and start learning with thousands of courses</p>
                            <div class="row px-3 mb-3">
                                <label class="mb-0"><h6 class="mb-0 text-sm">Title</h6></label>
                                <input type="text" name="text" placeholder="Store Title" className='form-control' />
                            </div>
                            <div class="row px-3 mb-3">
                                <label class="mb-0"><h6 class="mb-0 text-sm">Short Description</h6></label>
                                <textarea className='form-control' placeholder="short description in 150 words."></textarea>
                            </div>

                             <div class="row px-3 mb-3">
                                <label class="mb-0"><h6 class="mb-0 text-sm">Keywords Related To Store</h6></label>
                                <textarea className='form-control' placeholder="Top Keywords Related To Your Store"></textarea>
                                <small className="small text-muted"> seprate keyword with , symbol</small>
                            </div>

                            <div class="row px-3 mb-3">
                                <small class="text-muted">By creating Store, you agree our <a href="" class="text-primary">Terms of services</a> and <a href="" class="text-primary">Privacy Policy</a></small>
                            </div>

                            <div class="row mb-4 ">
                                <div class="col-md-12 text-end">
                                    <button class="btn btn-dark btn-sm text-center mb-1 py-2">Create Account</button>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CreateUi