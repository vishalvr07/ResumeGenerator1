import React from 'react'
import './main.css'
import {  useSelector } from 'react-redux';
import {  selectUser } from './userSlice';




function Education() {
    const user = useSelector(selectUser);

    return (
        <div>

            <div className="head">
                <br />
                &nbsp; Education
            </div>
            <p className="basic-text">
                {user.College} , {user.ColLoc}  <br />
                <span className="colortext">
                    Bachelor of Technology , Information Technology , June 2017
                    
                </span>
            </p>
            <br/> <br/>

            <p className="basic-text"> 

                {user.Inter} , {user.SchoolLoc}<br/>
                {user.passOut}

            </p>
            <br/>
            <br/>

        </div>




    )
}

export default Education ;