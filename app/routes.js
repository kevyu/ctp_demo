/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import ChartPage from './containers/ChartPage';

export default () => (
  <App>
    <Switch>
      <Route path="/chart" component={ChartPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
