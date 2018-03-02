import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink href="#" active>Home</NavLink>
                    </NavItem>
                    <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle nav caret>
                            Words
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Add / Edit</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <NavItem>
                        <NavLink href="#">Labels</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink disabled href="#">Sign in</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}