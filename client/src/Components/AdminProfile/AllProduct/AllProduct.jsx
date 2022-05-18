import React, { useEffect, useState } from 'react'
import Scrollbars from 'rc-scrollbars'
import { BsFillGridFill } from 'react-icons/bs'
import { AiOutlineBars } from 'react-icons/ai'
import './all_product.css'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductAction, getAllProduct } from '../../../Redux/Actions/ProductAction'

function AllProduct() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllProduct())
    }, [dispatch])

    const { products } = useSelector(x => x.allProduct)

    const [gridView, setGridView] = useState(false)

    //Delete Product
    const deleteProduct = (x) => {
        dispatch(deleteProductAction(x))
    }
    return (
        <div data-aos="zoom-in" className='add_product__ui'>
            <div className="grid_view d-flex justify-content-between my-2 align-items-center">
                <h2 >All Product</h2>
                <div className='grid_icons'>
                    <span onClick={() => setGridView(false)}><AiOutlineBars /></span>
                    <span onClick={() => setGridView(true)}><BsFillGridFill /></span>
                </div>
            </div><hr />
            <Scrollbars style={{ height: "79vh" }} >
                <div className="col-md-10 m-auto">
                    <div className={"row"}>
                        {
                            gridView ?
                                products.map((x, index) => (
                                    <div key={index} className={"col-lg-3 col-md-4 col-sm-6"}>

                                        <div className="gridView my-1">
                                            <div className="image">
                                                <img className='w-100' src={x.image} alt="product" />
                                            </div>
                                            <div className="product_info">
                                                <h6>Name:{x.name.substring(0, 19)}...</h6>
                                            </div>
                                            <div className="operation row gx-0">
                                                <button className="btn col-6 rounded-0 btn-danger">Delete</button>
                                                <button className="btn col-6 rounded-0 btn-success">Edit</button>
                                            </div>
                                        </div>

                                    </div>
                                )) :

                                products.map((x, index) => (
                                    <div key={index} className="columnView my-1 border rounded align-items-center row">

                                        <div className="col-2">
                                            <img className='w-100' src={x.image} alt="product" />
                                        </div>
                                        <div className="col-6">
                                            {x.name}
                                        </div>
                                        <div className="col-2">
                                            <button className="btn btn-success">Edit</button>
                                        </div>
                                        <div className="col-2">

                                            <button onClick={() => deleteProduct(x._id)} className="btn btn-danger">Delete</button>

                                        </div>
                                    </div>
                                ))
                        }
                    </div>

                </div>
            </Scrollbars>
        </div>
    )
}

export default AllProduct