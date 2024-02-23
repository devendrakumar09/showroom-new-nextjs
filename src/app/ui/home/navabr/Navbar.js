import Link from 'next/link'
import React from 'react'

import styles from './navbar.module.css'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>

      <nav className={styles.bg + ' ' + "py-2 border-bottom shadow-sm  text-white sticky-top"}>
        <div className="container d-flex flex-wrap text-white">
          <ul className="nav me-auto">
            <li className="nav-item">
              <Link href={'/'} className="nav-link link-dark px-2">
                <strong className="strong h4 fw-bold brand">The Bazaar</strong>
              </Link>
            </li>
          </ul>
          <ul className="nav">            
            <li className="nav-item">
              <Link href={'/profile'} className="nav-link link-dark px-2">
                <Image src={'/home/profile.svg'} height={40} width={40} alt='profile' className='' />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar