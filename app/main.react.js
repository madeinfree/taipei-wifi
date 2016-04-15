import React, { Component } from 'react';
import ReactDom, { render } from 'react-dom';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Hello Taipei Wifi.</div>
    );
  }
};

render(<Main />, document.getElementById('app'));
