import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

function App() {
  return (
    <div>
      <Router history={ browserHistory }>
        <Route path='/' />
      </Router>
    </div>
  );
}

export default App;
