import React from 'react'

const ProfileUi = () => {
  return (
    <>
      <div className='card p-3 border'>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex flex-row text-center">
            <img src="https://i.imgur.com/G1pXs7D.jpg" className={'img-fluid'} width="70" />
            <div className={'d-flex flex-column ms-2 mt-2'}>
              <span className="font-weight-bold">Madison</span>
              <small className='text-sall text-muted'>@username</small>
            </div>
          </div>          
        </div>
      </div>
    </>
  )
}

export default ProfileUi