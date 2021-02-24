import React, { useState } from 'react';
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarText,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown,
} from 'reactstrap';

export default function MobileNavbar(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="" color="dark" dark expand="md">
                <NavbarBrand href="/">Coffee</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="https://reactstrap.github.io/components/navs/">Components</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Option 1</DropdownItem>
                                <DropdownItem>Option 2</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Reset</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>Text</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}
