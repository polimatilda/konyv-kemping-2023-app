import React from 'react'
import { NavDropdown } from 'react-bootstrap';
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
            <NavDropdown title="A kempingről" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">A témáról</NavDropdown.Item>
              <NavDropdown.Item href="/#readathon-choices">Közös könyvek</NavDropdown.Item>
              <NavDropdown.Item href="/#guilds">Céhek</NavDropdown.Item>
              <NavDropdown.Item href="/#creator">A kemping mögött</NavDropdown.Item>
            </NavDropdown>
              <Nav.Link href="/events">Események</Nav.Link>
              <Nav.Link href="/tbr">Olvasmánylista</Nav.Link>
              <Nav.Link href="/profile">Profil</Nav.Link>
              <Nav.Link href="/help">Súgó</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComp