import React from 'react'
import ProfileUI from '@/app/ui/store/settings/profile/Profile'
import { BsPen } from 'react-icons/bs'
import Menues from '@/app/ui/store/settings/menus/Menues'
import Followers from '@/app/ui/store/customers/Followers'
import Reviews from '@/app/ui/store/reviews/Reviews'
import UserProfile from '@/app/ui/store/user/UserProfile'
import Users from '@/app/ui/store/user/users/Users'

function Layout({ children }) {
  return (
    <>

      <div className="container">
        <div className="row">
          <div className="col-sm-10 mx-auto">
            <ProfileUI />
            <div className="row mt-4">
              <div className="col-sm-3">
                <Menues />
              </div>
              <div className="col-sm-9">
                {children}                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Layout