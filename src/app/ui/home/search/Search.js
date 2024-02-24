import React from 'react'
import styles from './search.module.css'

const Search = () => {
  return (
    <>
      <div class={styles.bg +' '+"container-flude p-5 bg-warning"} >
        <div class="row">
          <header class="text-center">
            <h1 class="display-4 font-weight-bold">Bootstrap Datepicker</h1>
            <p class="font-italic text-muted mb-0">Create a nicely styled reservation form using Bootstrap 4 and <a href="https://github.com/uxsolutions/bootstrap-datepicker" class="text-muted">Bootstrap datepicker</a>.</p>
            <p class="font-italic text-muted">Snippet By <a href="https://bootstrapious.com" class="text-muted">
              <u>Bootstrapious</u></a>
            </p>
          </header>
          <div class="col-md-6 mx-auto mt-2">            
            <div class="form-group ">
              <div class="input-group p-0 shadow-sm">
                <input type="text" placeholder="Search ..." class="form-control py-4 px-4" id="reservationDate" />
                {/* <div class="input-group-append"><span class="input-group-text px-4"><i class="fa fa-clock-o"></i></span></div> */}
              </div>
            </div>            
          </div>
        </div>
      </div>
    </>
  )
}

export default Search