import React from 'react'
import './main.css'
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';

export default function Lang() {
    const user = useSelector(selectUser);
    return (
        <div>

            <div className="head">Languages</div>
                <p className="basic-text">Languages
               
                    {user.lang} <br />
                    Fluent
              
                    <br />  <br />
              
                    Hindi <br />
                    Native
                    
                </p>

                <br />
                <br />



        </div>
    )
}
