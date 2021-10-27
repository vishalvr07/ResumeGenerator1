import React from 'react'
import "./main.css"
import {  useSelector } from 'react-redux';
import {  selectUser } from './userSlice';

function History() {
    const user = useSelector(selectUser);
    return (
        <div>



            <div className="head">
                &nbsp; Employment History
            </div>
            <p className="basic-text">
                {user.company} at {user.compDes} , {user.compLoc}
               
                <br /> <span className="colortext">{user.From} – {user.To}</span>
                <br />• {user.RolesA}
                . <br />
                • {user.RolesB} . <br />• {user.RolesC} . <br />
                • {user.RolesD} . <br />• {user.RolesE} .
            </p>
            <br /> <br/>


  
           { /* <p className="basic-text">
                Web Developer at Freelancer , Delhi
                <br /> <span className="colortext">January 2018 – June 2019</span>
                <br />
  
  
            </p>  */ }
            
            <br/> <br/>
            
            <p className="basic-text">
            {user.company2} at {user.compDes2} , {user.compLoc2}                <br />
                <span className="colortext"> {user.From2} – {user.To2} </span>

                <br />• {user.Roles2}
                . <br />
                • {user.Roles3} . <br />• {user.Roles4} . <br />
                • {user.Roles5} . <br />• {user.Roles6} .</p>






        </div>
    )
}


export default History;