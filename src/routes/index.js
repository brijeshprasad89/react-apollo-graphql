import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "../components/home";

const Routes = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/characters" />
        </Route>
        <Route exact path="/episodes" component={Home} />
        <Route exact path="/characters" component={Home} />
        <Route exact path="/locations" component={Home} />
      </Switch>
    </Router>
  </div>
);

export default Routes;
