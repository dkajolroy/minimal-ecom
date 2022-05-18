import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './nav.css'
import { logoutAction } from '../../Redux/Actions/UserAction'

function Nav() {

    const { loginInfo } = useSelector(x => x.signIn)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // LogOut
    const logout = () => {
        dispatch(logoutAction())
        navigate("/")
    }
    return (
        <header className='main_nav_bars'>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col">
                        <div className="brand">
                            <Link to="/">Express</Link>
                        </div>
                    </div>
                    <div className="col ">
                        <ul className='d-flex justify-content-end list-unstyled m-0'>
                            {
                                loginInfo.name ?
                                    <li>
                                        <Link to="/my-account">
                                            <img src={loginInfo.avatar} alt="user" />
                                            Account
                                        </Link>
                                    </li>
                                    :
                                    <li><Link to="/sign-in">Login</Link></li>
                            }
                            <li><Link to="/">Contact</Link></li>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/">Cart <span>20</span></Link></li>
                            {
                                loginInfo.name ?
                                    <li><Link onClick={() => logout()} to="/">Logout</Link></li>
                                    :
                                    null
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Nav