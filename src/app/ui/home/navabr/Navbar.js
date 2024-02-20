import Link from 'next/link'
import React from 'react'
import { FaBell, FaCartShopping, FaCircleUser } from 'react-icons/fa6'
import styles from './navbar.module.css'
import Image from 'next/image'
import { FcList, FcMindMap, FcPaid, FcShop } from 'react-icons/fc'
const Navbar = () => {
  return (
    <>

      <nav className={styles.bg + ' ' + "py-3  border-bottom shadow-sm  text-white sticky-top"}>
        <div className="container d-flex flex-wrap text-white">
          <ul className="nav me-auto">
            <li className="nav-item">
              <Link href={'/'} className="nav-link link-dark px-2">
                <strong className="strong h4 fw-bold brand">Showroom</strong>
              </Link>
            </li>
          </ul>

          <ul className="nav">
            <li className="nav-item">
              <Link href={'/shop'} className="nav-link link-dark px-2 fw-bolder  text-uppercase"><FcShop className='h4' /></Link>
            </li>

            <li className="nav-item">
              <Link href={'/products'} className="nav-link link-dark px-2 fw-bolder small text-uppercase"><FcList className='h4' /></Link>
            </li>
          </ul>

          <ul className="nav">
            <li className="nav-item">
              <Link href={'/cart'} className="nav-link link-dark px-2"><FcPaid className='h4' /></Link>
            </li>
            <li className="nav-item">
              <Link href={'/profile'} className="nav-link link-dark px-2"><FaCircleUser className='h4'/></Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar