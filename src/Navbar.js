import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function NavBar() {
    return (
        <Navbar className="navbar navbar-dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Aidan Wadin</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="navbar-link" href="#portfolio">Resume</Nav.Link>
                        <Nav.Link className="navbar-link" href="#about">About</Nav.Link>
                        <Nav.Link className="navbar-link" href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
