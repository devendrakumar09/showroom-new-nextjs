import React from 'react'
import styles from './shopProfile.module.css'
import Link from 'next/link'
const ShopProfile = () => {
    return (
        <>
        
            <Link href={'/shop/jaisdias'} >
                <div class="card rounded shadow-sm border-0 border">
                    <div class="card-body p-0">
                        <div class="bg-warning px-5 py-4 text-center card-img-top"><img src="https://bootstrapious.com/i/snippets/sn-cards/teacher-1.jpg" alt="..." width="100" class="rounded-circle mb-2 img-thumbnail d-block mx-auto" />
                            <h5 class="text-white mb-0">John Tarly</h5>
                            <p class="small text-white mb-0">Elite user</p>
                        </div>
                        <div class={styles.storeFooter + ' ' + "d-flex justify-content-around mt-4 text-center pb-4"}>
                            <div className="rating">
                                <h5 className="h5 text-small">5.4</h5>
                                <small className="text-muted">Rating</small>
                            </div>

                            <div className="products ">
                                <h5 className="h5 text-small">55k</h5>
                                <small className="text-muted ">Products</small>
                            </div>

                            <div className="customers">
                                <h5 className="h5 text-small">100</h5>
                                <small className="text-muted">Customers</small>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

        </>


    )
}

export default ShopProfile