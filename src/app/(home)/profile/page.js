import CardUi from '@/app/ui/home/profile/CardUi'
import ProfileUi from '@/app/ui/home/profile/ProfileUi'
import Link from 'next/link'
import React from 'react'

const Profile = () => {
  return (
    <section class="pb-5 header mt-4">
      <div class="container">        
        <div class="row">
          <div class="col-lg-4">
            <ProfileUi />
          </div>

          <div class="col-lg-4 col-sm-6  col-6">
            <Link href={'/cart'}>
              <CardUi title='Cart' description='manage your bucket order go for buy' />
            </Link>
          </div>

          <div class="col-lg-4 col-sm-6  col-6">
            <Link href={'/orders'}>
              <CardUi title='Orders' description='manage your bucket order go for buy' />
            </Link>
          </div>

          <div class="col-lg-6">
            <Link href={'/following'}>
            <CardUi title='Following' description='manage your bucket order go for buy' />
            </Link>
          </div>

          <div class="col-lg-6">          
            <Link href={'/ratings'}>
            <CardUi title='Rating' description='manage your bucket order go for buy' />
            </Link>
          </div>

          <div className="col-sm-12">
            <Link href={'/store'} >
              <CardUi title={'Store Management'} description={'manage your store in just ne click'} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile