import React from 'react'

const CardUi = ({title,description}) => {
  return (
    <>
      <div class="card mt-2 text-center">
        <div class="card-body p-3">
          <h2 class="h4 fw-bold">{title}</h2>
          <p class="font-italic text-muted small">{description}</p>
        </div>
      </div>
    </>
  )
}

export default CardUi