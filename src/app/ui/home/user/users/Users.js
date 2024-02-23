import React from 'react'

const Users = () => {
    return (
        <>
            <div className='card p-3  mb-2'>
                <div className="d-flex justify-content-between mt-2 align-items-center">
                    <div className="d-flex flex-row">
                        <img src="https://i.imgur.com/o5uMfKo.jpg" className="rounded-circle" width="50" height={50} />
                        <div className='d-flex flex-column ms-2 '>
                            <span className="fw-bolder ">Madison</span>
                            <small className="small">@usrid12545</small>                                                        
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="btn btn-outline-primary BUTTONS btn-sm me-1">Follow</button>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Users