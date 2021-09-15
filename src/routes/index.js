import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Characters from '~/pages/Characters';
import ComicsDetails from '~/pages/ComicDetails';
import Home from '~/pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/characters" component={Characters} />
      <Route exact path="/comic/:id" component={ComicsDetails} />
    </Switch>
  );
}
