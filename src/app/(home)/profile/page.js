import CardUi from '@/app/ui/home/profile/CardUi'
import ProfileUi from '@/app/ui/home/profile/ProfileUi'
import Link from 'next/link'
import React from 'react'

const Profile = () => {
  return (
    <section class="pb-5 header mt-4">
      <div class="container">
        <div className="row">
          <div class="col-lg-4">
            <ProfileUi />
          </div>
          <div className="col-sm-8">
            <div className="row">
              <div class="col-lg-4 col-sm-6  col-6">
                <Link href={'/store'}>
                  <CardUi title='Store' description='manage your bucket order go for buy' img={'stor-management.png'} />
                </Link>
              </div>
              <div class="col-lg-4 col-sm-6  col-6">
                <Link href={'/cart'}>
                  <CardUi title='Cart' description='manage your bucket order go for buy' img={'cart.png'} />
                </Link>
              </div>
              <div class="col-lg-4 col-sm-6  col-6">
                <Link href={'/orders'}>
                  <CardUi title='Orders' description='manage your bucket order go for buy' img={'orders.png'} />
                </Link>
              </div>
              <div class="col-lg-6 col-sm-6  col-6">
                <Link href={'/following'}>
                  <CardUi title='Following' description='manage your bucket order go for buy' img={'followres.png'} />
                </Link>
              </div>

              <div class="col-lg-6">
                <Link href={'/ratings'}>
                  <CardUi title='Rating' description='manage your bucket order go for buy' img={'rating.png'} />
                </Link>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}

export default Profile