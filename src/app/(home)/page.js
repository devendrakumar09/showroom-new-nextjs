import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <>
      <h4>this is a Home page of stre </h4>
      <Link href={'/store'}>Got To dashboard</Link>
    </>
  )
}

export default Home