import Link from 'next/link'
import React from 'react'

const Memu = ({title,link}) => {
  return (
      <>
        <Link className="btn btn-sm btn-dark m-1 " href={link}>{title}</Link>
      </>
  )
}

export default Memu