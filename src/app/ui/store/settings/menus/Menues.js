import React from 'react'
import styles from './menues.module.css'
import Link from 'next/link'
const Menues = () => {
  return (
    <>
      <div class="card p-3 ">
        <div class={styles.recent_border + ' ' + "mt-4"}>
          <span class="recent-orders ms-1">Rating</span>
        </div>
        <div class="pt-2">
          <Link class="" href={'/store/settings/general-setting'}>General Setting</Link>
        </div>
        <div class="pt-2">
          <span class="">Privacy</span>
        </div>
        <div class="pt-2">
          <span class="">Advance Settings</span>
        </div>        
      </div>
    </>
  )
}

export default Menues