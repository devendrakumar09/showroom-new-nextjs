import React from 'react'
import styles from './header.module.css'
const Header = () => {
    return (
        <>

            <section className={styles.bg} style={{background: 'url(/home/banners/6.png)'}}>
                <div className="container py-5">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 mx-auto text-center">
                            <h1 className="fw-bold display-3">Be vocal for <span className="text-uppercase">local</span> </h1>
                            <p className="fst-italic text-muted">Customizing lightweight <a className="fw-bold text-dark" href="https://github.com/jshjohnson/Choices" target="_blank">Choices.js</a> JS plugin to create a beautiful Bootstrap autocomplete dropdown menu. Snippet by <a className="text-primary" href="#" target="_blank">Bootstrapious</a></p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Header