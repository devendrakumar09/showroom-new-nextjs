import ProfileUI from '@/app/ui/store/settings/profile/Profile'
import React from 'react'
import { BsPen } from 'react-icons/bs'

const Settings = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 mx-auto">
          <ProfileUI />
          <div classNae="p-3 mb-4 bg-light rounded-3 mt-2">
            <div classNae="container-fluid p-2">
              <p classNae="small">
                Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.
                {'     '}<BsPen />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings