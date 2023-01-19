import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComp() {
  return (
    <Navbar collapseOnSelect className='mb-5 navbar-custom' expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" className='nav-brand'>Könyv Kemping</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">A kempingről</Nav.Link>
            <Nav.Link href="/">Események</Nav.Link>
            <Nav.Link href="/">Olvasmány lista</Nav.Link>
            <Nav.Link href="/profile">Profil</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComp