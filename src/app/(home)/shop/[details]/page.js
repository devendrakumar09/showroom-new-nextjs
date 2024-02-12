import React from 'react'
import HeaderUi from '@/app/ui/home/shop/shopHeader/ShopHeader'
import Categories from '@/app/ui/home/categories/Categories'
import Product from '@/app/ui/home/product/Product'
import AddReview from '@/app/ui/home/reviews/AddReview'
const Details = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-12">
              <HeaderUi />
            </div>

            {/* SHOP CATEGORIES */}
            <div className="row mt-4">

              <div className="row">
                {/* <div className="col-xl-10 offset-lg-1 col-lg-10 col-md-12 col-12"> </div>*/}
                <div className="col-sm-4 mb-4">
                  <AddReview />
                </div>
                <div className="col-sm-8">
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-6">
                      <Categories />
                    </div>

                    <div className="col-lg-3 col-md-4 col-6">
                      <Categories />
                    </div><div className="col-lg-3 col-md-4 col-6">
                      <Categories />
                    </div>

                    <div className="col-lg-3 col-md-4 col-6">
                      <Categories />
                    </div>
                    <div className="col-lg-3 col-md-4 col-6">
                      <Categories />
                    </div>
                    <div className="col-lg-3 col-md-4 col-6">
                      <Categories />
                    </div>
                    <div className="col-lg-3 col-md-4 col-6">
                      <Categories />
                    </div>
                    <div className="col-lg-3 col-md-4 col-6">
                      <Categories />
                    </div>

                  </div>
                </div>
              </div>

              
            </div>

            {/* Products */}
            <div className="row justify-content-center mb-4">
              <h2 className="font-weight-bold mb-2 mt-4">Top Tranding Product</h2>
              <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
              
              <div className="col-6 col-md-3 col-sm-6 col-xs-6">
                <Product />
              </div>

              <div className="col-6 col-md-3 col-sm-6 col-xs-6">
                <Product />
              </div> <div className="col-6 col-md-3 col-sm-6 col-xs-6">
                <Product />
              </div>

              <div className="col-6 col-md-3 col-sm-6 col-xs-6">
                <Product />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Details