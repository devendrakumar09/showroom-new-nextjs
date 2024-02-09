import React from "react";
import styles from '@/app/ui/store/products/products.module.css'
import ProductUi from '@/app/ui/store/products/Products'
import { BsSearch } from "react-icons/bs";
import Dropdown from 'react-bootstrap/Dropdown';
import { FaCirclePlus } from "react-icons/fa6";
import Link from "next/link";
const Products = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div class="container rounded bg-white p-2">              
              <div class="d-flex justify-content-between m-2">
                <div className="heading">
                  <h5 className="text-uppercase">Products <Link href={'/store/products/add'}><FaCirclePlus className="ms-2"/></Link></h5>                  
                </div>
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
                      <th scope="col">Title</th>
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
