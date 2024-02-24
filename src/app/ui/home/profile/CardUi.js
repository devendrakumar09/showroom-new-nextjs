import Image from 'next/image'
import React from 'react'

const CardUi = ({ title, description,img }) => {
  return (
    <>
      <div className='card p-3 border  mb-2'>
        <div className="d-flex justify-content-start">
          <div className="icon me-3">
            <Image src={'/home/icons/'+img} height={30} width={30} alt={title} />
          </div>
          <div className="about">
            <h2 className="h4 fw-bold">{title}</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardUi