import React from 'react';
import Header from './/header.react';

class Common extends React.Component {
  static defaultProps = {}
  render() {
    return (
      <div>
        <Header />
        { this.props.children }
      </div>
    );
  }
}

export default Common;
