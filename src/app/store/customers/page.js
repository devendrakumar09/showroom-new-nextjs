import React from 'react'
import FollowersUI from '@/app/ui/store/customers/Followers'
import ProfileUi from '@/app/ui/store/settings/profile/Profile'
import UserProfile from '@/app/ui/store/user/UserProfile'
import Users from '@/app/ui/store/user/users/Users'



const Customers = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex" >
          <div className="col-sm-7">            
            <div className="mt-1">
              <Users />  <Users />  <Users />  <Users />  <Users />  <Users />  <Users />  <Users />  <Users />  <Users />  <Users />
            </div>
          </div>
          <div className="col-sm-5 ">
            <div className="userProfile sticky-top">
              <UserProfile />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Customers