import React from 'react'

const New = () => {
    return (
        <>
            <div classNae="card rounded shadow-sm border-0 mt-2">
                <div classNae="card-body p-4">
                    <div className="img">
                        <img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-2_g4qame.jpg" alt="" classNae="img-fluid d-block mx-auto mb-3" />
                    </div>
                    <div className="form">
                        <div classNae="mb-3">
                            <label classNae="form-label">Title</label>
                            <input type="text" classNae="form-control" placeholder='Title' />                            
                        </div>                        


                        <div classNae="mb-3">
                            <label classNae="form-label">Description</label>
                            <textarea classNae="form-control" placeholder='Title' ></textarea>
                        </div> 
                        
                        <div classNae="mb-3">
                            <label classNae="form-label">Thumbnail</label>
                            <input type="file" classNae="form-control" />                            
                        </div> 

                         <div classNae="mb-3">
                            <button type="submit" className='btn btn-primary w-100'>Save</button>
                        </div> 


                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default New