import React from 'react'
import {  useSelector } from 'react-redux';
import {  selectUser } from './userSlice';
import "./main.css"

function Header() {

    const user = useSelector(selectUser);
  
    const nameFromLocalStorage = JSON.parse(localStorage.getItem("name"))
    
     /*
    useEffect(()=> {
        localStorage.setItem("{user.name}", JSON.stringify({user.name}));
      },[]);
    */

    return (

        <div className="header">

            <img src={user.image} style={{width:"200px" , borderRadius:"5px"}}/>
                
             <h1> {nameFromLocalStorage} </h1>  
            {user.des} <br />
            {user.loc}&nbsp; (IN)
        </div>
    )
}

export default Header;