import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Menu from './Menu';

function Header() {
  return (
    <header className="bg-gray-800">
      <Navbar expand="lg" className="shadow-lg py-3">
        <Container className="mx-auto">
          <Navbar.Brand href="#home" className="text-black text-2xl font-bold">News</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Menu className="ml-auto text-white"/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;

