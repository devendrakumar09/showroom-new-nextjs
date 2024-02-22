import React from 'react'
import HeaderUi from '@/app/ui/home/shop/shopHeader/ShopHeader'
import Categories from '@/app/ui/home/categories/Categories'
import Product from '@/app/ui/home/product/Product'
import AddReview from '@/app/ui/home/reviews/AddReview'
import MenuUI from '@/app/ui/home/shop/menu/Memu'
import Reviews from '@/app/ui/home/reviews/Reviews'
const Details = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">




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
                    <div className="col-lg-3 col-md-4 col-6">
                      <Categories />
                    </div>

                  </div>
                </div>
              </div>


            </div>


            <div className="row mb-4">
              {/* Products */}

              <div className="col-sm-7">
                <h4 className="font-weight-bold mb-2">Top Tranding Product</h4>

                <div className="row">
                  <div className="col-6 col-md-4 col-sm-6 col-xs-6">
                    <Product />
                  </div>
                  <div className="col-6 col-md-4 col-sm-6 col-xs-6">
                    <Product />
                  </div>
                  <div className="col-6 col-md-4 col-sm-6 col-xs-6">
                    <Product />
                  </div>

                  <div className="col-6 col-md-4 col-sm-6 col-xs-6">
                    <Product />
                  </div>

                  <div className="col-6 col-md-4 col-sm-6 col-xs-6">
                    <Product />
                  </div>

                  <div className="col-6 col-md-4 col-sm-6 col-xs-6">
                    <Product />
                  </div>
                </div>
              </div>

              {/* STORE RATINGS */}
              <div className="col-sm-5 store-rating">
                <h4 className="h4 ">Store Ratings</h4>
                <div className="row">
                  <div className="col-sm-12 mx-auto">
                    <Reviews />
                  </div>
                  <div className="col-sm-12 mx-auto">
                    <Reviews />
                  </div>
                  <div className="col-sm-12 mx-auto">
                    <Reviews />
                  </div>
                  <div className="col-sm-12 mx-auto">
                    <Reviews />
                  </div>
                  <div className="col-sm-12 mx-auto">
                    <Reviews />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Details