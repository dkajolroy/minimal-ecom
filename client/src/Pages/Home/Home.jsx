import React, { useEffect } from 'react'
import Product from '../../Components/Product/Product'
import { getAllProduct } from '../../Redux/Actions/ProductAction'
import { useSelector, useDispatch } from 'react-redux'

function Home() {
    const dispatch = useDispatch()
    const state = useSelector(x => x.allProduct)
    useEffect(() => {
        dispatch(getAllProduct())
    }, [dispatch])

    return (
        <div className='container'>
            <div className="row">
                {
                    state.loading ?
                        <h2>Loading.......</h2> :
                        state.products.map((x, index) => (
                            <Product key={index} product={x} />
                        ))
                }
            </div>
        </div>
    )
}

export default Home