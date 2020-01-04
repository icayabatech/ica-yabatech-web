import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import TeamPage from './pages/TeamPage/TeamPage';
import MemberPage from './pages/MemberPage/MemberPage';
import EventPage from './pages/EventsPage/EventsPage';

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/members" component={MemberPage} />
        <Route path="/events" component={EventPage} />
        <Redirect to="/" />
      </Switch>
    </Fragment>
  );
}

export default App;
