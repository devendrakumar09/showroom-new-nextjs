'use client';
import React from "react";
import ProductUi from '@/app/ui/store/products/Products'
import Dropdown from 'react-bootstrap/Dropdown';
import { FaCirclePlus } from "react-icons/fa6";
import Link from "next/link";

const Products = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div class="card p-3">
              <div class="d-flex justify-content-between m-2">
                <div className="heading">
                  <h5 className="text-uppercase">Products <Link href={'/store/products/add'}><FaCirclePlus className="ms-2" /></Link></h5>
                </div>
                <div className="search">
                  <input type="text" name="search" id="" className="form-control w-100" placeholder="Search Products" />
                </div>
                <div className="filters">

                  <Dropdown>
                    <Dropdown.Toggle variant="dark btn-sm" id="dropdown-basic">
                      Filter
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>



              <div class="table-responsive">
                <table class='table'>
                  <thead>
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Order</th>
                      <th scope="col">Stock</th>
                      <th scope="col">Avalble</th>
                      <th scope="col">Deliverd</th>
                      <th scope="col">Status</th>
                      <th scope='col'>Action</th>
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
