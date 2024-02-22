import Image from 'next/image'
import React from 'react'
import styles from './add.module.css'
import Link from 'next/link'
import { FaArrowLeft, FaCircleArrowLeft } from 'react-icons/fa6'
const Add = () => {
  return (
    <> 


      <div className="form">
        <div className="row">
          <div className="col-sm-8 border-line pb-3">
            <div className="card">
              <div className="p-5">
                <h3 className="mb-4">
                  <Link href={'/store/products'}><FaCircleArrowLeft className='me-2'></FaCircleArrowLeft></Link>
                  Product Information
                </h3>

                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea className='form-control' />
                </div>
                <div className="row">
                  <div className="mb-3 col-sm-7">
                    <label className="form-label">Category</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="mb-3 col-sm-5">
                    <label className="form-label">Price</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>

                <div className="row">
                  <div className="mb-3 col-sm-6">
                    <label className="form-label">Shpping Charge </label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="mb-3 col-sm-6">
                    <label className="form-label">Discount</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Keyword </label>
                  <textarea className='form-control' />
                  <small>Seprate keywords with the help of <b>,</b></small>
                </div>


              </div>
            </div>
          </div>
          <div className="col-sm-4 ">
            <div className="row justify-content-sm-center">
              <div className="card">
                <div className="p-4">
                  <h3 className="mb-4">Images</h3>

                  <div className="row">
                    {/* THUBNAIL */}
                    <div className="col-sm-12">

                      <div className={styles.dragImage}>
                        <div class="icon"><i class="fas fa-cloud-upload-alt"></i></div>
                        <h6 className=''>Thumbnail</h6>
                        <h6 className='text-small'>Drag & Drop File Here</h6>
                        <span>OR</span>
                        <button type='button'>Browse File</button>
                        <input type="file" hidden />
                      </div>
                    </div>
                    {/* OTHER IMAGES */}

                    <div className="col-4">
                      <div className={styles.images + ' ' + "mt-2"}>

                        <button type='button'>Browse File</button>
                        <input type="file" hidden />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className={styles.images + ' ' + "mt-2"}>

                        <button type='button'>Browse File</button>
                        <input type="file" hidden />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className={styles.images + ' ' + " mt-2"}>

                        <button type='button'>Browse File</button>
                        <input type="file" hidden />
                      </div>
                    </div>
                  </div>

                </div>



              </div>

              <button type="button" className='btn btn-dark m-4 p-2'>Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Add