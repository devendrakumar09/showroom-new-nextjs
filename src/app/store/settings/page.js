import ProfileUI from '@/app/ui/store/settings/profile/Profile'
import React from 'react'
import { BsPen } from 'react-icons/bs'
import Menues from '@/app/ui/store/settings/menus/Menues'
import Followers from '@/app/ui/store/customers/Followers'
import Reviews from '@/app/ui/store/reviews/Reviews'
import UserProfile from '@/app/ui/store/user/UserProfile'
import Users from '@/app/ui/store/user/users/Users'

const Settings = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-10 mx-auto">
          <ProfileUI />
          {/* <div className="p-3 mb-4 bg-light rounded-3 mt-2">
            <div className="container-fluid p-2">
              <p className="small">
                Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.
                {'     '}<BsPen />
              </p>
            </div>
          </div> */}

          <div className="row mt-4">
            <div className="col-sm-3">
              <Menues />
            </div>
            <div className="col-sm-9">
              <Reviews />              
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Settings