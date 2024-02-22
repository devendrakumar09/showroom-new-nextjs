import React from 'react'
import HeaderUi from '@/app/ui/home/shop/shopHeader/ShopHeader'
import AddReview from '@/app/ui/home/reviews/AddReview'
import MenuUI from '@/app/ui/home/shop/menu/Memu'
import Reviews from '@/app/ui/home/reviews/Reviews'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


function Layout({ children, Component, pageProps }) {

  const links = [
    {
      id: 1,
      title: 'Home',
      link: "/shop/sadas",
    },
    {
      id: 2,
      title: 'Rating',
      link: "/shop/sadas/rating",
    },
    {
      id: 3,
      title: 'Product',
      link: "/shop/sadas/products",
    },
    {
      id: 4,
      title: 'Customers',
      link: "/shop/sadas/customers",
    },
    {
      id: 5,
      title: 'Following',
      link: "/shop/sadas/following",
    },
    {
      id: 6,
      title: 'About',
      link: "/shop/sadas/about",
    },
    


  ];
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
                {/* <div className="col-sm-4 mb-4">
                  <AddReview />
                </div> */}
                <div className="col-sm-12">
                  <div className="row">
                    <div className="col-sm-12 mb-4 bg-white p-2">
                      {links.map(({id, title, link }) => (

                      <Link key={id}  href={link} className='btn btn-dark btn-sm me-2'>
                          {title}
                        </Link>
                      ))}
                    </div>

                    <div className="col-sm-12">
                      {children}
                    </div>
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

export default Layout