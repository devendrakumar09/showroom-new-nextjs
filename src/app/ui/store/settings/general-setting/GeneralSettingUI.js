import React from 'react'

const GeneralSettingUI = () => {
  return (
    <>
      <form className='card'>
        
        <div className="card-body">
          <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">Store</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" />
            </div>
          </div>

          <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">Description</label>
            <div class="col-sm-10">
              <textarea name="" id="" className='form-control'></textarea>
            </div>
          </div>


          <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">City</label>
            <div class="col-sm-10">
              <input type="text" name="" id="" className='form-control' />
            </div>
          </div>

          <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">Logo</label>
            <div class="col-sm-8">
              <input type="file" name="" id="" className='form-control' />
            </div>
          </div>

          <div class="mb-3 text-end">
            <buttom className="btn btn-dark btn-sm">Save</buttom>
          </div>
        </div>
      </form>
    </>
  )
}

export default GeneralSettingUI