import React from "react";
import styles from '@/app/ui/store/products/products.module.css'
import ProductUi from '@/app/ui/store/products/Products'
import { BsSearch } from "react-icons/bs";
import Dropdown from 'react-bootstrap/Dropdown';
const Products = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div class="container rounded bg-white p-2">
              {/* <div class="mb-2 d-flex justify-content-between align-items-center">
                <div class="position-relative">                  
                  <input class="form-control w-100" placeholder="Search by order#, name..." />
                </div>
                <div class="px-2">
                  <span>Categories <i class="fa fa-angle-down"></i></span>
                  <i class="fa fa-ellipsis-h ms-3"></i>
                </div>
              </div> */}

              <div class="d-flex justify-content-between m-2">
                <div className="heading"><h5 className="text-uppercase">heading</h5></div>
                <div className="search">
                  <input type="text" name="search" id="" className="form-control w-100" placeholder="Search Products" />
                </div>
                <div className="filters">
                  sdfsdf
                </div>
              </div>



              <div class="table-responsive">
                <table class='table'>
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Date</th>
                      <th scope="col">Time</th>
                      <th scope="col">Status</th>
                      <th scope='col'>Others</th>
                    </tr>
                  </thead>
                  <tbody>
                    <ProductUi />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
