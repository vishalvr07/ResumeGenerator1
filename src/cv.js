import React from "react";
import NewResume from "./NewResume/NewResume";
import Pdf from "react-to-pdf";
import './style.css'

function Cv() {

const ref = React.createRef();

  return ( <>
    <div  ref={ref} > 

    <NewResume />
    </div>

   
    
          <Pdf targetRef ={ref} filename="post.pdf"  >
            {({ toPdf }) => <button className="btn" style={{marginBottom:"50px"}} onClick = {toPdf}>Download As Pdf  </button> }
        </Pdf>

   
     
      </>
  );
}

export default Cv;
