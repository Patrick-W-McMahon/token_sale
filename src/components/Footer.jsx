import React from "react";
import { Container } from "react-bootstrap";

const Footer = ({ author }) => {
    return (
        <Container className={'footer-container'} fluid>
            <Container>
                <p>Created by {author} &#169; 2021</p>
            </Container>
        </Container>
    );
}

export default Footer;