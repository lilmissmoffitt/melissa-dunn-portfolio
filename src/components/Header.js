import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../assets/stylesheets/Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <Navbar expand="sm" bg="dark" fixed="top" variant="dark">
        <Navbar.Brand href="/" style={{paddingLeft: "20px"}}>Melissa Dunn's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent: "right", paddingRight: "20px"}}>
          <Nav className="ml-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="rainbow-strip" />
    </div>
  );
};

export default Header;
