import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function Navigation() {
  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink exact to='/' >
            Home
            </NavLink>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <LinkContainer to="/about">
            <NavItem eventKey={1}>About</NavItem>
          </LinkContainer>
          <LinkContainer to="/contactus">
            <NavItem eventKey={2}>Contact Us</NavItem>
          </LinkContainer>
          <NavDropdown eventKey={3} title="Profile" id="basic-nav-dropdown">
            <LinkContainer to="/settings">
              <MenuItem eventKey={3.1}>Settings</MenuItem>
            </LinkContainer>
            <LinkContainer to="/logout">
              <MenuItem eventKey={3.1}>Logout</MenuItem>
            </LinkContainer>
          </NavDropdown>           </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

