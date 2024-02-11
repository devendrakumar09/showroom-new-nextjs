import Link from 'next/link'
import React from 'react'
import Header from '../ui/home/header/Header'
import ShopBanner from '../ui/home/baners/ShopBanner'
import Categories from '../ui/home/categories/Categories'
import ShopProfile from '../ui/home/shop/Shop/ShopProfile'
import Product from '../ui/home/product/Product'

const Home = () => {
  return (
    <>
      <div className="container-flude">
        <Header />
      </div>
      <div className="container mt-4">


        {/* TOP STORE IN YOUR CITY */}
        <div className="row">
          <div className="col-sm-12">
            <ShopBanner />
          </div>
          <div className="row mt-4 mb-4">
            <h2 class="font-weight-bold mb-2">Top Store In Kanpur</h2>
            <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>

            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <ShopProfile />
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <ShopProfile />
            </div><div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <ShopProfile />
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <ShopProfile />
            </div>
          </div>
        </div>

        {/* SHOP CATEGORIES */}
        <div className="row">
          <div class="mb-8 text-center">
            <h2 class="display-4 mb-3 fw-bold">Shop Product Via Category</h2>
            <p class="lead mb-4">Everything you need to design like a
              professional. Boost you and your team s
              creativity and supercharge your productivity with Geeks UI Pro.</p>
          </div>
          <div class="row">
            <div class="offset-xl-2 col-xl-8 offset-lg-1 col-lg-10 col-md-12 col-12">
              <div class="row">
                <div class="col-lg-3 col-md-4 col-6">
                  <Categories />
                </div>

                <div class="col-lg-3 col-md-4 col-6">
                  <Categories />
                </div><div class="col-lg-3 col-md-4 col-6">
                  <Categories />
                </div>

                <div class="col-lg-3 col-md-4 col-6">
                  <Categories />
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                  <Categories />
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                  <Categories />
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                  <Categories />
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                  <Categories />
                </div>

              </div>
            </div>
          </div>
        </div>


        {/* TRANDIN PRODUC INYOUR CITY */}

        <div class="row justify-content-center mb-4">
          <h2 class="font-weight-bold mb-2 mt-4">Top Tranding Product</h2>
          <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>


          <div class="col-6 col-md-3 col-sm-6 col-xs-6">
            <Product />
          </div>

          <div class="col-6 col-md-3 col-sm-6 col-xs-6">
            <Product />
          </div>

          <div class="col-6 col-md-3 col-sm-6 col-xs-6">
            <Product />
          </div>

          <div class="col-6 col-md-3 col-sm-6 col-xs-6">
            <Product />
          </div>

          <div class="col-6 col-md-3 col-sm-6 col-xs-6">
            <Product />
          </div>
          <div class="col-6 col-md-3 col-sm-6 col-xs-6">
            <Product />
          </div>

          <div class="col-6 col-md-3 col-sm-6 col-xs-6">
            <Product />
          </div>

          <div class="col-6 col-md-3 col-sm-6 col-xs-6">
            <Product />
          </div>

          <div class="col-6 col-md-3 col-sm-6 col-xs-6">
            <Product />
          </div>
          <div class="col-6 col-md-3 col-sm-6 col-xs-6">
            <Product />
          </div>
          <div class="col-6 col-md-3 col-sm-6 col-xs-6">
            <Product />
          </div>

          <div class="col-6 col-md-3 col-sm-6 col-xs-6">
            <Product />
          </div>



        </div>
      </div>
    </>
  )
}

export default Home