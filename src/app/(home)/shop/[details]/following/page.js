import Users from '@/app/ui/home/user/users/Users'
import React from 'react'

const Followings = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <div className="heading">
            <h4 className="h4 fw-bold">Following</h4>
          </div>
          <Users />
        </div>
      </div>
    </div>
  )
}

export default Followings