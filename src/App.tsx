import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./views/Homepage/Homepage";
import Counter from "./views/Counter/Counter";
import User from "./views/User/User";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/user" component={User} />
      </Switch>
    </Router>
  );
};

export default App;
