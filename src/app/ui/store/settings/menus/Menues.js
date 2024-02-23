import React from 'react'
import styles from './menues.module.css'
import Link from 'next/link'
const Menues = () => {
  return (
    <>
      <div className="card p-3 ">        
        <div className="pt-2">
          <Link className={styles.recent_border + ' ' + "mt-4"} href={'/store/settings/ratings'}>Ratings</Link>
        </div>

        <div className="pt-2">
          <Link className="" href={'/store/settings/customers'}>Customers</Link>
        </div>
        <div className="pt-2">
          <Link className="" href={'/store/settings/following'}>Following</Link>
        </div>
        
        <div className="pt-2">
          <Link className="" href={'/store/settings/general-setting'}>General Setting</Link>
        </div>
        <div className="pt-2">
          <Link className="" href={'#'}>Privacy</Link>
        </div>
        <div className="pt-2">
          <Link className="" href={'#'}>Advance Setting Setting</Link>
        </div>
      </div>
    </>
  )
}

export default Menues