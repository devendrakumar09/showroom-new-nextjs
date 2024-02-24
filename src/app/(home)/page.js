import Link from 'next/link'
import React from 'react'
import Header from '../ui/home/header/Header'
import ShopBanner from '../ui/home/baners/ShopBanner'
import Categories from '../ui/home/categories/Categories'
import ShopProfile from '../ui/home/shop/shopProfile/ShopProfile'
import Product from '../ui/home/product/Product'
import ProductList from '../ui/home/product/productList/ProductList'
import NeoCard from '../ui/store/dashboard/Welcome/NeoCard'
import Image from 'next/image'

const Home = () => {
  const categoriesArr = [
    {
      id: 1,
      title: 'food and beverage',
      images: "/store/orders",
      link: 'shop/category/koaksdop',
    },
    {
      id: 2,
      title: 'Fashion',
      images: "/store/orders",
      link: 'shop/category/koaksdop',
    },
    {
      id: 3,
      title: 'Electronics',
      images: "/store/orders",
      link: 'shop/category/koaksdop',
    },
    {
      id: 4,
      title: 'Grocery/Supermarket',
      images: "/store/orders",

      link: 'shop/category/koaksdop',
    },
    {
      id: 5,
      title: 'Electronics',
      images: "/store/orders",

      link: 'shop/category/koaksdop',
    },
    {
      id: 6,
      title: 'Electronics',
      images: "/store/orders",

      link: 'shop/category/koaksdop',
    },
  ];

  return (
    <>
      <div className="container-flude">
        <Header />
      </div>
      <div className="container mt-4">


        {/* SEARCH STORE AND PRODUCTS */}

        <div className="container">
          <div className="row d-flex justify-content-evenly">
            <div className="col-sm-4 col-sx-6 col-6">

              <div className="card p-4">
                <div className=" text-center">
                  <h3 className="fw-bold display-5">Store</h3>
                  <Image src={'/home/icons/shop.png'} height={100} width={100} alt='store image' />
                  <p className="mt-4">The Master license allows you to customize, store and even host your website
                    using your platform</p>
                </div>
                <Link href={'/shop'} className="btn btn-dark  m-4 border-0">Explore</Link>
              </div>
            </div>
            <div className="col-sm-4 col-sx-6 col-6">
              <div className="card p-4">
                <div className=" text-center">
                  <h3 className="fw-bold display-5">Products</h3>
                  <Image src={'/home/icons/3.png'} height={100} width={100} alt='store image' />

                  <p className="mt-4">The Master license allows you to customize, store and even host your website
                    using your platform</p>
                </div>
                <Link href={'/products'} className="btn btn-dark  m-4 border-0">Explore</Link>
              </div>
            </div>
          </div>
        </div>


        {/* TOP STORE IN YOUR CITY */}
        <div className="row">
          <div className="col-sm-12">
            <ShopBanner />
          </div>
        </div>


        {/* STORE BANNER */}
        <div className="container">
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
            <h2 class="display-4 mb-3 fw-bold text-uppercase">Store </h2>
            <p class="lead mb-4">Everything you need to design like a
              professional. Boost you and your team s
              creativity and supercharge your productivity with Geeks UI Pro.</p>
          </div>
          <div class="row">
            <div class="offset-xl-2 col-xl-8 offset-lg-1 col-lg-10 col-md-12 col-12">
              <div class="row">


                {categoriesArr.map(({ id, title, link, icon }) => (
                  <div class="col-lg-3 col-md-4 col-6" key={id}>
                    <Link className="nav-link" href={link}>
                      <Categories title={title} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* TRANDIN PRODUC INYOUR CITY */}

        <div class="row  mb-4">
          <h2 class="font-weight-bold mb-2 mt-4">Top Tranding Product</h2>
          <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>

          {/* 
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
          </div> */}

          <div className="col-sm-8">
            <div className="row">
              <div class="col-6 col-md-4 col-sm-6 col-xs-6">
                <Product />
              </div>
              <div class="col-6 col-md-4 col-sm-6 col-xs-6">
                <Product />
              </div>
              <div class="col-6 col-md-4 col-sm-6 col-xs-6">
                <Product />
              </div>
              <div class="col-6 col-md-4 col-sm-6 col-xs-6">
                <Product />
              </div>
              <div class="col-6 col-md-4 col-sm-6 col-xs-6">
                <Product />
              </div>
              <div class="col-6 col-md-4 col-sm-6 col-xs-6">
                <Product />
              </div>
            </div>

          </div>

          <div className="col-sm-4">
            <div className="row">
              <div className="col-sm-12">
                <ProductList />
              </div>
              <div className="col-sm-12">
                <ProductList />
              </div>
              <div className="col-sm-12">
                <ProductList />
              </div>
              <div className="col-sm-12">
                <ProductList />
              </div>
              <div className="col-sm-12">
                <ProductList />
              </div>
              <div className="col-sm-12">
                <ProductList />
              </div>
              <div className="col-sm-12">
                <ProductList />
              </div>
              <div className="col-sm-12">
                <ProductList />
              </div>
            </div>
          </div>

        </div>
      </div>


    </>
  )
}

export default Home