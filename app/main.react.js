import React from 'react';
import { render } from 'react-dom';

import App from './components/common/app.react';
import Header from './components/common/header.react';

function Main() {
  return (
    <div>
      <Header />
      <App />
    </div>
  );
}

render(<Main />, document.getElementById('app'));
