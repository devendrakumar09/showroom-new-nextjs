import Link from 'next/link'
import React from 'react'
import Header from '../ui/home/header/Header'

const Home = () => {
  return (
    <>
      <div className="container-flude">
        <Header />
        <h4>this is a Home page of stre </h4>
        <Link href={'/store'}>Got To dashboard</Link>
      </div>
      <div className="container">
        asdjdjsi
      </div>
    </>
  )
}

export default Home