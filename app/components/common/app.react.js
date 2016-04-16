import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Common from './common.react';
import About from '../about/index.react';
import Search from '../search/index.react';

export default class App extends React.Component {
  static defaultProps = {}

  render() {
    return (
      <Router history={ browserHistory }>
        <Route path='/' component={ Common }>
          <Route path='search' component={ Search } />
          <Route path='about' component={ About } />
        </Route>
      </Router>
    );
  }
}
