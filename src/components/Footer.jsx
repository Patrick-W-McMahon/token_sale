import React from "react";
import { Container } from "react-bootstrap";

const Footer = ({ author }) => (
    <Container>
        <div>
        <p>Created by {author} &#169; 2021</p>
        </div>
    </Container>
);

export default Footer;