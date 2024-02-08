import React from 'react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'

const Reviwes = () => {
    return (
        <>
            <div className="card mt-5 mb-3 p-4">
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <div className="rating">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                        <BsStar />
                    </div>
                    <small className="text-muted">2 Days Ago</small>
                </div>
                <h5 className="mt-3">Figma Design Tool</h5>
                <p className="text-muted">
                    Our elite teams build apps, responsive websites, bots any digital product that interacts with users for the world's leading companies.
                </p>
            </div>
        </>
    )
}

export default Reviwes