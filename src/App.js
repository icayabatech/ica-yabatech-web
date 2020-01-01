import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import TeamPage from './pages/TeamPage/TeamPage';

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/team" component={TeamPage} />
        <Redirect to="/" />
      </Switch>
    </Fragment>
  );
}

export default App;
