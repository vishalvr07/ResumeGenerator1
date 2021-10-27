import { Route, Switch, Link } from "react-router-dom";
import React from "react";
import Resume from "./Resume";
import "./style.css";
import "./App.css";
import Form from './Form'

function App() {
  return (
    <div>
      {/*router link didnt use in project */}
      
      <div className="Links">
        <Link to="/">Form </Link>
        <Link to="/Resume">Resume </Link>
      </div>

      <main>
        <Switch>
          <Route path="/" component={Form} exact />
          <Route path="/Resume" component={Resume} />

          <Route component={Error} />
        </Switch>
      </main>

     




    </div>
  );


}

export default App;
