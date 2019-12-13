import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Redirect to="/" />
      </Switch>
    </Fragment>
  );
}

export default App;
