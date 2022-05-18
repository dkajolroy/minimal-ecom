import React from 'react'
import './rating.css'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'

function Rating({ rating }) {
    return (
        <div className='rating__ui'>
            <span>
                {
                    rating >= 1 ? <BsStarFill /> : rating > 0 ? <BsStarHalf /> : <BsStar />
                }
            </span>
            <span>
                {
                    rating >= 2 ? <BsStarFill /> : rating > 1 ? <BsStarHalf /> : <BsStar />
                }
            </span>
            <span>
                {
                    rating >= 3 ? <BsStarFill /> : rating > 2 ? <BsStarHalf /> : <BsStar />
                }
            </span>
            <span>
                {
                    rating >= 4 ? <BsStarFill /> : rating > 3 ? <BsStarHalf /> : <BsStar />
                }
            </span>
            <span>
                {
                    rating >= 5 ? <BsStarFill /> : rating > 4 ? <BsStarHalf /> : <BsStar />
                }
            </span>
        </div>
    )
}

export default Rating