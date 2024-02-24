import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ShopBanner = () => {
    return (
        <div className="pricing7 py-5  ">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <h2 className="display-4 mb-3 fw-bold" >Create Your <span className="text-uppercase">Store</span> Here</h2>
                        <h6 className="subtitle font-weight-normal">
                            Create Your Shop here and increes Trafic to Your Website
                        </h6>
                    </div>
                </div>

                <div className="row mt-4">

                    <div className="col-md-8">
                        <div className="row">

                            <div className="col-lg-6">
                                <div className="card border-0 mb-4 p-3">
                                    <i className="icon-emotsmile display-6 text-info"></i>
                                    <h5 className="fw-bolder mt-2">100% Free</h5>
                                    <p className="mt-2">You can relay on our amazing features list and also our customer services
                                        will be great experience.</p>
                                </div>
                            </div>


                            <div className="col-lg-6">
                                <div className="card border-0 mb-4 p-3">
                                    <i className="icon-emotsmile display-6 text-info"></i>
                                    <h5 className="fw-bolder mt-2">100% Free</h5>
                                    <p className="mt-2">You can relay on our amazing features list and also our customer services
                                        will be great experience.</p>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card border-0 mb-4 p-3">
                                    <i className="icon-emotsmile display-6 text-info"></i>
                                    <h5 className="fw-bolder mt-2">100% Free</h5>
                                    <p className="mt-2">You can relay on our amazing features list and also our customer services
                                        will be great experience.</p>
                                </div>
                            </div>


                            <div className="col-lg-6">
                                <div className="card border-0 mb-4 p-3">
                                    <i className="icon-emotsmile display-6 text-info"></i>
                                    <h5 className="fw-bolder mt-2">100% Free</h5>
                                    <p className="mt-2">You can relay on our amazing features list and also our customer services
                                        will be great experience.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-4 ml-auto pricing-box align-self-center">
                        <div className="card p-4">
                            <div className=" text-center">                                
                                <Image src={'/home/icons/add-store.png'} height={100} width={100} alt='store image' />
                                <h5 className='fw-bold'>Create  Store</h5>
                                <p className="mt-4">The Master license allows you to customize, store and even host your website
                                    using your platform</p>
                            </div>
                            <Link href={'/shop/create'} className="btn btn-dark  m-4 border-0">Create Now</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default ShopBanner