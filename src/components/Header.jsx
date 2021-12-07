import React from "react";
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const Header = ({ loginFn, isLoggedIn, accounts, title }) => (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">{title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto me-auto mb-2 mb-lg-0">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Nav>
                <Nav className="justify-content-end d-flex">
                    {isLoggedIn ? <Navbar.Text>Account: {accounts[0]}</Navbar.Text> : <Button variant={'outline-primary'} onClick={() => loginFn()}>Login</Button> }
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Header;