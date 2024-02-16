import Link from 'next/link'
import React from 'react'

const Memu = ({title}) => {
  return (
      <>
        <button className="btn btn-sm btn-dark m-1 ">{title}</button>
      </>
  )
}

export default Memu