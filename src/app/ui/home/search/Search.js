import React from 'react'
import styles from './search.module.css'

const Search = () => {
  return (
    <>

      <section className={styles.search +' '+ "py-5 bg-light" }>
        <div className="container py-5">
          <div className="row py-lg-5">
            <div className="col-lg-6">
              <h1 className="fw-bold">Bootstrap autocomplete dropdown</h1>
              <p className="fst-italic text-muted">Customizing lightweight 
              <a className="fw-bold text-dark" href="https://github.com/jshjohnson/Choices" target="_blank">Choices.js</a> JS plugin to create a beautiful Bootstrap autocomplete dropdown menu. Snippet by <a className="text-primary" href="#" target="_blank">Bootstrapious</a></p>
              <input type="text" name="" id="" className='form-control'  placeholder='Search Store By Name'/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search