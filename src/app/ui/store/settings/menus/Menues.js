import React from 'react'
import styles from './menues.module.css'
import Link from 'next/link'
const Menues = () => {
  return (
    <>
      <div class="card p-3 ">        
        <div class="pt-2">
          <Link class={styles.recent_border + ' ' + "mt-4"} href={'/store/settings/ratings'}>Ratings</Link>
        </div>

        <div class="pt-2">
          <Link class="" href={'/store/settings/customers'}>Customers</Link>
        </div>
        <div class="pt-2">
          <Link class="" href={'/store/settings/following'}>Following</Link>
        </div>
        
        <div class="pt-2">
          <Link class="" href={'/store/settings/general-setting'}>General Setting</Link>
        </div>
        <div class="pt-2">
          <Link class="" href={'#'}>Privacy</Link>
        </div>
        <div class="pt-2">
          <Link class="" href={'#'}>Advance Setting Setting</Link>
        </div>
      </div>
    </>
  )
}

export default Menues