import React from 'react'
import styles from './welcome.module.css'

const Welcome = () => {
  return (
    <>
      <div class={styles.bg+' '+"card p-5 text-dark"} style={{background :'url(/home/images/6.png)'}} >
        <div class="text-end">
          <h5 className='bd-highlight'>Monday</h5>
          <h1 className='bd-highlight'>10:14 
            <small className='small'>&nbsp;Am </small> 
          </h1>
          <p class="bd-highlight ">Evening</p>          
        </div>
        <div className="">
          <h3 className="h3">Welcome Devendra Kumar </h3>
          <small className="small">
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