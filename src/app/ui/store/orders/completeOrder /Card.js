import React from 'react'
import { BsCurrencyRupee } from 'react-icons/bs'

const Card = (props) => {
  return (
    <div className="card p-4 mt-2">
      <div className="col-md-8 ps-0 ">
        <p className="textmuted fw-bold h6 mb-0 text-uppercase">{props.title}</p>
        <p className="h1 fw-bold d-flex">          
          <BsCurrencyRupee className="textmuted pe-1 h4 align-text-top mt-1" />          
          {props.amount}
        </p>
        <p className="ms-3 px-2 text-success">+10% since last month</p>
      </div>      
    </div>
  )
}

export default Card 