import React from 'react'
import styles from './header.module.css'
const Header = () => {
    return (
        <>

            <section className={styles.bg} style={{background: 'url(/home/images/banner2.jpg)'}}>
                <div className="container py-5">
                    <div className="row py-lg-5">
                        <div className="col-lg-6">
                            <h1 className="fw-bold">Bootstrap autocomplete dropdown</h1>
                            <p className="fst-italic text-muted">Customizing lightweight <a className="fw-bold text-dark" href="https://github.com/jshjohnson/Choices" target="_blank">Choices.js</a> JS plugin to create a beautiful Bootstrap autocomplete dropdown menu. Snippet by <a className="text-primary" href="#" target="_blank">Bootstrapious</a></p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Header