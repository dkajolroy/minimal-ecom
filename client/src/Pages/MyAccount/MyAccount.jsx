import React, { useEffect } from 'react'
import './my_account.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userProfileAction } from '../../Redux/Actions/UserAction'
import User from '../../Components/UserProfile/User'
import Admin from '../../Components/AdminProfile/Admin'

function MyAccount() {

    const dispatch = useDispatch()
    const { profileInfo } = useSelector(x => x.profile)
    const products = useSelector(x => x.allProduct)
    useEffect(() => {
        dispatch(userProfileAction())
    }, [dispatch])


    return (
        <>
            {
                profileInfo.isAdmin ?
                    <Admin profileInfo={profileInfo} /> :
                    <User profileInfo={profileInfo} />
            }

        </>
    )
}

export default MyAccount