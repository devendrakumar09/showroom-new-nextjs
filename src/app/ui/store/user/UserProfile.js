import React from 'react'

const UserProfile = () => {
    return (
        <>
            <div classNae="card rounded shadow-sm border-0">
                <div classNae="card-body p-0">
                    <div classNae="bg-primary px-5 py-4 text-center card-img-top"><img src="https://bootstrapious.com/i/snippets/sn-cards/teacher-4.jpg" alt="..." width="100" classNae="rounded-circle mb-2 img-thumbnail d-block mx-auto" />
                        <h5 classNae="text-white mb-0">Emma Nevoresky</h5>
                        <p classNae="small text-white mb-0">Elite user</p>
                    </div>
                    <div classNae="p-4 d-flex justify-content-center">
                        <ul classNae="list-inline mb-0">
                            <li classNae="list-inline-item">
                                <h5 classNae="font-weight-bold mb-0 d-block">241</h5><small classNae="text-muted"><i classNae="fa fa-picture-o mr-1 text-primary"></i>Photos</small>
                            </li>
                            <li classNae="list-inline-item">
                                <h5 classNae="font-weight-bold mb-0 d-block">84K</h5><small classNae="text-muted"><i classNae="fa fa-user-circle-o mr-1 text-primary"></i>Followers</small>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile