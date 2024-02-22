import Users from '@/app/ui/store/user/users/Users'
import React from 'react'

const Following = () => {
  return (
    <>
      <div className="heading mb-2">
        <h4 className="h4 fw-bold">Following</h4>
      </div>
      <Users />
    </>
  )
}

export default Following