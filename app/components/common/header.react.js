import React from 'react';
import { Link } from 'react-router';

import {
  Navbar,
  Nav
} from 'react-bootstrap';

class Header extends React.Component {
  static defaultProps = {}
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='#'>Taipei Wifi Scan Map</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <div style={ { padding: '15px' } }><Link to='search'>Search</Link></div>
        </Nav>
        <Nav>
          <div style={ { padding: '15px' } }><Link to='about'>About</Link></div>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
