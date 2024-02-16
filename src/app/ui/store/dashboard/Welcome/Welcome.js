import React from 'react'

const Welcome = () => {
  return (
    <>
      <div class="card p-5" style={{background:'url(/dashboard/backgrounds/1.png)'}}>
        <div class="text-end">
          <h5 className='bd-highlight'>Monday</h5>
          <h1 className='bd-highlight'>10:14 
            <small className='small'>&nbsp;Am </small> 
          </h1>
          <p class="bd-highlight ">Evening</p>          
        </div>
        <div className="">
          <h3 className="h3">Welcome Devendra Kumar </h3>
          <small className="small text-muted">
            Mannage Your Shop in Smart Way. &nbsp; 
              <strong className="font-weight-bold text-success">Anytime</strong>, &nbsp; 
              <strong className="font-weight-bold text-primary">AnyWhere</strong>
          </small>
        </div>
        
      </div>
    </>
  )
}

export default Welcome