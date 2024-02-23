import React from 'react'

const CardUi = ({title,description}) => {
  return (
    <>
      <div className="card mt-2 text-center">
        <div className="card-body p-3">
          <h2 className="h4 fw-bold">{title}</h2>
          <p className="font-italic text-muted small">{description}</p>
        </div>
      </div>
    </>
  )
}

export default CardUi