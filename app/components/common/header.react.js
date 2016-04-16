import React from 'react';

import {
  Navbar
} from 'react-bootstrap';

function Header() {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href='#'>Taipei Wifi Scan Map</a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  );
}

export default Header;
