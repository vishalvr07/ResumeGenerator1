import React from "react";
import Main from "./Components/Main/main";
import Sub from "./Components/Sub/sub";
import Header from "./Components/Main/header";
import Pdf from "react-to-pdf";
import './Resume.css'
import {Route} from 'react-router-dom'
import App from './App'

export default function Resume() {

    const ref = React.createRef();

  return (
    <div>


    <div style={{  border: "3px solid #807182" , margin:"20px" , borderRadius:"10px" }}> 

      <div ref={ref}>
        <Header />
        <div className="grid">
          <Main />

          <Sub />
        </div>
      </div>

    <div/> 
    </div>


      <Pdf targetRef={ref} filename="yourResume.pdf">
        {({ toPdf }) => <button  className= "button"  onClick={toPdf}>Download Resume in PDF</button>}
      </Pdf>

      <br/>
      
    </div>
  
  );
}
