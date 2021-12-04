import React from "react";
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const Header = ({ loginFn, loggedIn, accounts }) => (
    <Navbar bg="primary" variant="dark">
        <Container>
            <Navbar.Brand href="#home">DAPP</Navbar.Brand>
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
            <Nav className="d-flex">
                {loggedIn ? <Navbar.Text>Account: {accounts[0]}</Navbar.Text> : <Button variant={'outline-light'} onClick={() => loginFn()}>Login</Button> }
            </Nav>
        </Container>
    </Navbar>
);

export default Header;