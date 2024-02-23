import React from 'react'

const CardUi = ({title,description}) => {
  return (
    <>
        <div className='card p-3 border text-center mb-2'>
        <div className=" p-3">
          <h2 className="h4 fw-bold">{title}</h2>
          <p className="font-italic text-muted small">{description}</p>
        </div>
      </div>
    </>
  )
}

export default CardUi