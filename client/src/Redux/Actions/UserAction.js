import axios from 'axios'
import Swal from 'sweetalert2'



// Register
export const registerAction = (info) => async (dispatch) => {
    try {
        dispatch({ type: "REGISTER_REQ" })
        const config = {
            Headers: {
                "Content-Type": "application/json"
            }
        }
        const { data } = await axios.post("http://localhost:5000/register", info, config)
        dispatch({
            type: "REGISTER_SUC",
            payload: data
        })
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
            type: "REGISTER_FAIL",
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


//login
export const loginAction = (info) => async (dispatch) => {
    try {
        dispatch({ type: "LOGIN_REQ" });
        const config = {
            Headers: {
                "Content-Type": 'application/json'
            }
        }
        const { data } = await axios.post("http://localhost:5000/login", info, config)
        dispatch({
            type: "LOGIN_SUC",
            payload: data
        })
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: "Login Success",
            showConfirmButton: false,
            timer: 2000,
            width: "400px"
        })
        localStorage.setItem("user", JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: "LOGIN_FAIL",
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

//Logout
export const logoutAction = () => async (dispatch) => {
    dispatch({ type: "LOGOUT" })
    localStorage.removeItem("user")
    Swal.fire({
        position: 'top',
        icon: 'success',
        title: "Logout success",
        showConfirmButton: false,
        timer: 2000,
        width: "400px"
    })
}

//User Profile Info
export const userProfileAction = () => async (dispatch, state) => {
    const { signIn: { loginInfo } } = state()
    try {
        dispatch({ type: "USER_PROFILE_REQ" })
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${loginInfo.token}`
            }
        }
        const { data } = await axios.get("http://localhost:5000/profile", config)
        dispatch({ type: "USER_PROFILE_SUC", payload: data })
    } catch (error) {
        dispatch({
            type: "USER_PROFILE_FAIL",
            payload: error.response && error.message ?
                error.response.data.message : error.message
        })

    }
}