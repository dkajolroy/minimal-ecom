import axios from 'axios'
import Swal from 'sweetalert2'


//Create Product actions
export const createProductAction = (info) => async (dispatch, state) => {
    const { signIn: { loginInfo } } = state()
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${loginInfo.token}`
            }
        }
        const { data } = await axios.post("http://localhost:5000/product", info, config)
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: data.message,
            showConfirmButton: false,
            timer: 2000,
            width: "400px"
        })
    } catch (error) {
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: error.response && error.message ?
                error.response.data.message : error.message,
            showConfirmButton: false,
            timer: 2000,
            width: "400px"
        })

    }
}




//GEt all Product
export const getAllProduct = () => async (dispatch) => {
    try {
        dispatch({ type: "GET_ALL_PRODUCT_REQ" })
        const config = {
            Headers: { "Content-Type": "application/json" }
        }
        const { data } = await axios.get("http://localhost:5000/product", config)
        dispatch({ type: "GET_ALL_PRODUCT_SUC", payload: data })
    } catch (error) {
        dispatch({
            type: "GET_ALL_PRODUCT_FAIL",
            payload: error.response && error.message ?
                error.response.data.message : error.message
        })
    }
}

//Delete Product ACtion
export const deleteProductAction = (id) => async (dispatch, state) => {
    const { signIn: { loginInfo }, allProduct: { products } } = state()
    const product = products.filter(x => x._id != id)
    try {
        dispatch({ type: "DELETE_PRODUCT_REQ" })
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${loginInfo.token}`
            }
        }
        const { data } = await axios.delete(`http://localhost:5000/product/${id}`, config)
        dispatch({ type: "DELETE_PRODUCT_SUC", payload: data })
        dispatch({ type: "GET_ALL_PRODUCT_SUC", payload: product })
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: data.message,
            showConfirmButton: false,
            timer: 2000,
            width: "400px"
        })
    } catch (error) {
        dispatch({
            type: "DELETE_PRODUCT_FAIL",
            payload: error.response && error.message ?
                error.response.data.message : error.message
        })
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: error.response && error.message ?
                error.response.data.message : error.message,
            showConfirmButton: false,
            timer: 2000,
            width: "400px"
        })
    }
}



// ViewProduct 
export const viewProductAction = (id) => async (dispatch, state) => {
    try {
        dispatch({ type: "VIEW_PRODUCT_REQ" })
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const { data } = await axios.get(`http://localhost:5000/product/${id}`, config)
        dispatch({ type: "VIEW_PRODUCT_SUC", payload: data })

    } catch (error) {
        dispatch({
            type: "VIEW_PRODUCT_FAIL",
            payload: error.response && error.message ?
                error.response.data.message : error.message
        })
    }
}