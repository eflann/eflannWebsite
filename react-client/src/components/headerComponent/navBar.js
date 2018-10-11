import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect navbar-static-top className='nav-bar'>
		  <Navbar.Collapse>
		    <Nav pullRight>
		      <NavItem eventKey={1} href="#">
		        About
		      </NavItem>
		      <NavItem eventKey={2} href="#">
		        US Travel
		      </NavItem>
		      <NavItem eventKey={2} href="#">
		        International Travel
		      </NavItem>
		    </Nav>
		  </Navbar.Collapse>
	  </Navbar>
    );
  }
}

export default NavBar;