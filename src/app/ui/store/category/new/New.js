import React from 'react'

const New = () => {
    return (
        <>
            <div className="card rounded shadow-sm border-0 mt-2">
                <div className="card-body p-4">
                    <div className="img">
                        <img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-2_g4qame.jpg" alt="" className="img-fluid d-block mx-auto mb-3 rounded" />
                    </div>
                    <div className="form">
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input type="text" className="form-control" placeholder='Title' />                            
                        </div>                        


                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <textarea className="form-control" placeholder='Description' ></textarea>
                        </div> 
                        
                        <div className="mb-3">
                            <label className="form-label">Thumbnail</label>
                            <input type="file" className="form-control" />                            
                        </div> 

                         <div className="mb-3">
                            <button type="submit" className='btn btn-primary w-100'>Save</button>
                        </div> 


                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default New