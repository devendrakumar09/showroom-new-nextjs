import React from 'react'

const GeneralSettingUI = () => {
  return (
    <>
      <form className='card'>
        
        <div className="card-body">
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Store</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" />
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Description</label>
            <div className="col-sm-10">
              <textarea name="" id="" className='form-control'></textarea>
            </div>
          </div>


          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">City</label>
            <div className="col-sm-10">
              <input type="text" name="" id="" className='form-control' />
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Logo</label>
            <div className="col-sm-8">
              <input type="file" name="" id="" className='form-control' />
            </div>
          </div>

          <div className="mb-3 text-end">
            <buttom className="btn btn-dark btn-sm">Save</buttom>
          </div>
        </div>
      </form>
    </>
  )
}

export default GeneralSettingUI