import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

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
          <Nav>
            <NavItem eventKey={1}>
              <NavLink exact to='/' >
                About
              </NavLink>
            </NavItem>
            <NavItem eventKey={2}>
              <NavLink exact to='/' >
                Contact
              </NavLink>
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={2}>
              <NavLink exact to='/' >
                Admin
              </NavLink>
            </NavItem>
            <NavDropdown eventKey={3} title="Profile" style={{color:'white'}} id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Settings</MenuItem>
              <MenuItem eventKey={3.2}>Logout</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

