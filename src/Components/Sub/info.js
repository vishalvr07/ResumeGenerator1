import './main.css'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';

export default function Info() {

    const user = useSelector(selectUser);
    return (
        <div>


            <div >
                <p className="head">Personal Info</p>
                <p className="basic-text">
                    Phone &nbsp; :<br />
                    {user.ph}

                    <br /> <br />

                    Email &nbsp; : <br />
                    {user.email}

                </p>
            </div>
            <br />
            <br />
            <br />


        </div>
    )
}
