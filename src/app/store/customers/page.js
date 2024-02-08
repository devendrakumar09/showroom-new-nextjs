import React from 'react'
import FollowersUI from '@/app/ui/store/customers/Followers'
import ProfileUi from '@/app/ui/store/settings/profile/Profile'
import UserProfile from '@/app/ui/store/user/UserProfile'



const Followers = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex" >
          <div className="col-sm-8">
            <ProfileUi />
            <div className="mt-1">
              <FollowersUI />
              <FollowersUI />
              <FollowersUI />
              <FollowersUI />
              <FollowersUI />
              <FollowersUI />
              <FollowersUI />
              <FollowersUI />
              <FollowersUI />
              <FollowersUI />
              <FollowersUI />
              <FollowersUI />
              <FollowersUI />
              <FollowersUI />
              <FollowersUI />
              <FollowersUI />
              <FollowersUI />
              <FollowersUI />
              <FollowersUI />
              <FollowersUI />
            </div>
          </div>
          <div className="col-sm-4 ">
            <div className="userProfile sticky-top">
              <UserProfile />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Followers