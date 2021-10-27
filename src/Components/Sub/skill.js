import './main.css'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';

export default function Skill() {

    const user = useSelector(selectUser);

    return (
        <div>

            <div className="head">
               
                    &nbsp; Skills </div>
            
                <p className="basic-text">
                    {user.skills}
                </p>
            </div>



       
    )
}
