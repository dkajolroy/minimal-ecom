import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Rating from '../../Components/Rating/Rating'
import { viewProductAction } from '../../Redux/Actions/ProductAction'
import './view_product.css'

function ViewProduct() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { product } = useSelector(x => x.viewProduct)
    useEffect(() => {
        dispatch(viewProductAction(id))
    }, [dispatch])

    const { name, image, stock, price } = product
    return (
        <div className='view_product_ui' style={{ height: "1000px" }}>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-6">
                        <div className="breadcrumb">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item"><Link to="/">Category</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">{id}</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="view__product_image border">
                            <img className='w-100' src={image && image} alt="product" />
                        </div>
                    </div>
                    <div className="col-md-6 mt-5">
                        <h2 className='product__title'>{name && name}</h2>
                        <div className="min_info d-flex align-items-center">
                            <div className='py-2 pe-5'><Rating rating={3.1} /></div>
                            <span className='py-2 pe-5'>5 Review</span>
                            <span className='py-2 pe-5'>Other</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="price">${price && price.toFixed(2)} <del>$60.00</del></div>
                            <span className="stock_info text-success">{stock ? "In-Stock" : "Out of Stock"}</span>
                        </div>
                        <hr />
                        <div className="size__price__other">
                            <span className="discount">Discount: $5.00</span>
                        </div>
                        <div className="select_item my-2">
                            <select name="" id="" className='w-50 form-select'>
                                <option value="">1</option>
                                <option value="">1</option>
                                <option value="">1</option>
                            </select>
                        </div>
                        <div className="action__product d-flex">
                            <button className="btn btn-success px-5 rounded-0">Add to cart</button>
                            <button className="btn btn-danger ms-2 px-5 rounded-0">Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProduct