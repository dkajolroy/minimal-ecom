import './product.css'
import React from 'react'
import Rating from '../../Components/Rating/Rating'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteProductAction } from '../../Redux/Actions/ProductAction'

function Product({ product }) {

    const dispatch = useDispatch()
    const { _id, price, image } = product


    return (
        <div className="col-md-3 col-sm-4 col-6 mt-2 ">
            <div className='product__item__ui'>
                <Link to={`/product/${_id}`} className="text-decoration-none text-dark" >
                    <div className="product__image">
                        <img className='w-100' src={image} alt="product" />
                    </div>
                    <div className="product__item__info d-flex justify-content-between align-items-center">
                        <Rating rating={4} />
                        <span>${price.toFixed(2)}</span>
                    </div>
                </Link>
                <div className="row gx-0 product__action">
                    <button className="rounded-0 col-7 btn btn-success">Add to cart</button>
                    <button className="rounded-0 col btn btn-danger">Buy</button>
                </div>
            </div>
        </div>
    )
}

export default Product