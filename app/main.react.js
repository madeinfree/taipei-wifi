import React from 'react';
import { render } from 'react-dom';

import App from './components/common/app.react';

function Main() {
  return (
    <div>
      <App />
    </div>
  );
}

render(<Main />, document.getElementById('app'));
