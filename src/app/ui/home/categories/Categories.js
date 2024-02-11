import React from 'react'
import styles from './categories.module.css'
const Categories = () => {
    return (
        <>
            <div className="card rounded shadow-sm border-1 mt-2 mb-3">
                <div className="card-body p-4 text-center">
                    <div className={styles.image +' '+" border rounded"}>
                        <img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-2_g4qame.jpg" alt="" className="img-fluid d-block mx-auto mb-3 " />
                    </div>
                    <h5 className="text-dark small">Awesome product</h5>
                </div>
            </div>
        </>
    )
}

export default Categories