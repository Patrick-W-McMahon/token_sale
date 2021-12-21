import React, { Fragment } from "react";
import { Navbar, Container, Nav, Button, NavDropdown, Badge } from 'react-bootstrap';
import { addressShortDisplay } from '../libs/blockchain';

const Header = ({ loginFn, isLoggedIn, accounts, title, network }) => {
    console.log('head', network);
    return (
        <Navbar fixed="top" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className="d-flex">
                    <Nav className="p-2">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto p-2">
                        {isLoggedIn ? (
                            <Fragment>
                                <Navbar.Text>{network.color ? (
                                    <Badge bg={'primary'} text={'light'}>
                                        {network.name || ''}
                                    </Badge>
                                ) : network.name || ''}</Navbar.Text>
                                <NavDropdown title={`Account: ${addressShortDisplay(accounts[0])}`} id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Fragment>
                        ) : ( 
                        <Button variant={'outline-primary'} onClick={() => loginFn()}>Connect Wallet</Button> 
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;