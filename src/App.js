import { Route, Switch, Link } from "react-router-dom";
import React from "react";

import "./style.css";
import "./App.css";
import Form from './Form'
import cv from "./cv";

function App() {
  return (
    <div>
      {/*router link didnt use in project */}
      
      <div className="Links">
        <Link to="/">Form </Link>
       
      </div>

      <main>
        <Switch>
          <Route path="/" component={Form} exact />
       
          <Route path="/cv" component={cv}/>

          <Route component={Error} />
        </Switch>
      </main>

     




    </div>
  );


}

export default App;
