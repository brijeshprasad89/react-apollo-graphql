import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/home";

const AppSwitch = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/episodes" component={Home} />
        {/* <Route exact path="/album/:id" component={Album} />
        <Route exact path="/album/:id/photo/:id" component={Photo} />
        <Route component={NotFound} /> */}
      </Switch>
    </div>
  );
};

export default AppSwitch;
