import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';
import "./main.css"

function Profile() {
    const user = useSelector(selectUser);
    return (
        <div>

            <div className="head">
                Profile
            </div>
            <p className="basic-text">
                {user.profile}
            </p>
            <br />




        </div>
    )
}

export default Profile;