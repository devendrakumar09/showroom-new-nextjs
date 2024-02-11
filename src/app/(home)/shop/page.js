import Search from '@/app/ui/home/search/Search'
import ShopProfile from '@/app/ui/home/shop/Shop/ShopProfile'
import React from 'react'

const Shop = () => {
  return (
    <>
      <Search />

      <div className="container">
        {/* TOP STORE IN YOUR CITY */}
        <div className="row">

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
      </div>
    </>
  )
}

export default Shop