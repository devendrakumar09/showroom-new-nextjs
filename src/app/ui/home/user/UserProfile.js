import React from 'react'

const UserProfile = () => {
    return (
        <>
            <div className="card rounded ">
                <div className="card-body p-0">
                    <div className="bg-primary px-5 py-4 text-center card-img-top"><img src="https://bootstrapious.com/i/snippets/sn-cards/teacher-4.jpg" alt="..." width="100" className="rounded-circle mb-2 img-thumbnail d-block mx-auto" />
                        <h5 className="text-white mb-0">Emma Nevoresky</h5>
                        <p className="small text-white mb-0">Elite user</p>
                    </div>
                    <div className="p-4 d-flex justify-content-center">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <h5 className="font-weight-bold mb-0 d-block">241</h5><small className="text-muted"><i className="fa fa-picture-o mr-1 text-primary"></i>Photos</small>
                            </li>
                            <li className="list-inline-item">
                                <h5 className="font-weight-bold mb-0 d-block">84K</h5><small className="text-muted"><i className="fa fa-user-circle-o mr-1 text-primary"></i>Followers</small>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile