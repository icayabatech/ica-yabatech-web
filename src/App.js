import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact component={} />
        <Redirect to="/" />
      </Switch>
    </Fragment>
  );
}

export default App;
