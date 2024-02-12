import React from 'react'
import styles from './menues.module.css'
const Menues = () => {
  return (
    <>
      <div class="card p-3 ">
        <div class={styles.recent_border + ' ' + "mt-4"}>
          <span class="recent-orders ms-1">Recent orders</span>
        </div>

        <div class="pt-2">
          <span class="">Ratings</span>
        </div>               
        <div class="pt-2">
          <span class="">General Setings</span>
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