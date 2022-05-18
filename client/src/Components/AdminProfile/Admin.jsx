import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutAction } from '../../Redux/Actions/UserAction'
import Dashboard from './Dashboard/Dashboard';
import AllProduct from './AllProduct/AllProduct';
import AddProduct from './AddProduct/AddProduct';
import Customer from './Customer/Customer';
import MyProfile from './MyProfile/MyProfile';
import './admin.css'

function Admin({ profileInfo }) {

    const [route, setRoute] = useState("dashboard")

    // Logout
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logout = () => {
        dispatch(logoutAction())
        navigate('/')
    }
    return (
        <div className='admin__dashboard'>
            <div className="container-fluid h-100">
                <div className="row h-100 ">
                    <div className="col-2 gx-0 side_bar">
                        <ul className="list-unstyled m-0">
                            <li onClick={() => setRoute("dashboard")}>Dashboard</li>
                            <li onClick={() => setRoute("addProduct")}>Add Product</li>
                            <li onClick={() => setRoute("allProduct")}>All Product</li>
                            <li onClick={() => setRoute("customer")}>Customer</li>
                            <li onClick={() => setRoute("myProfile")}>My Profile</li>
                        </ul>
                        <ul className="user_logout_profile list-unstyled m-0">
                            <li onClick={() => logout()}>Logout</li>
                        </ul>
                    </div>
                    <div className="col-10 bg-light">
                        {
                            route === "dashboard" ?
                                <Dashboard /> :
                                route === "addProduct" ?
                                    <AddProduct /> :
                                    route === "allProduct" ?
                                        <AllProduct /> :
                                        route === "customer" ?
                                            <Customer /> :
                                            route === "myProfile" ?
                                                <MyProfile /> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin