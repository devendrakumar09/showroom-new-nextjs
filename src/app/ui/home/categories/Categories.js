import React from 'react'
import styles from './categories.module.css'
const Categories = ({title}) => {
    return (
        <>
            <div className="card rounded  mt-2 mb-3">
                <div className="card-body p-4 text-center">
                    <div className={styles.image +' '+" border rounded"}>
                        <img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-2_g4qame.jpg" alt="" className="img-fluid d-block mx-auto mb-3 " />
                    </div>
                    <h5 className="text-dark small">{title}</h5>
                </div>
            </div>
        </>
    )
}

export default Categories