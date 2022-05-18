import React from 'react'
import './user.css'

function User({ profileInfo }) {
    return (
        <div className="user__info row">
            <div className="col-2">
                <img src={profileInfo.avatar} alt="avatar" className="w-100" />
            </div>
            <div className="col-4">
                <h3>{profileInfo.name}</h3>
            </div>
            <div className="col-4">
                <h3>{profileInfo.email}</h3>
            </div>
            <div className="col-2">
                <h3>{profileInfo.isAdmin && "Admin"}</h3>
            </div>
        </div>
    )
}

export default User