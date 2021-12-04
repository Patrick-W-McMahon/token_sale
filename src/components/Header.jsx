import React from "react";
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const Header = ({ loginFn, loggedIn, accounts }) => (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">DAPP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Nav>
                <Nav className="justify-content-end">
                    {loggedIn ? <Navbar.Text>Account: {accounts[0]}</Navbar.Text> : <Button variant={'outline-primary'} onClick={() => loginFn()}>Login</Button> }
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Header;