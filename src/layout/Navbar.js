import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, NavLink } from 'react-bootstrap';

export default class Menu extends React.Component {
    render() {
        return (
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">Home</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavDropdown eventKey={3} title="Words" id="words">
                            <MenuItem eventKey={3.1} href="/words">Add/Edit</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={1} href="/labels">
                            Labels
                        </NavItem>
                        <NavItem eventKey={2} href="/login">
                            Sign In
                        </NavItem>
                    </Nav>
                </Navbar>
        );
    }
}