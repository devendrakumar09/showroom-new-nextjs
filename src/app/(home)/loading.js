import React from 'react'
import styles from '@/app/ui/home/loading.module.css'
const loading = () => {
    return (
        <>
            <div class={styles.loader +' '+"text-center"}>
                <div class={styles.loader_inner}>
                    <div class={styles.lds_roller +' '+ "mb-3"}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <h4 class="text-uppercase font-weight-bold">Loading</h4>                    
                </div>
            </div>
        </>
    )
}

export default loading