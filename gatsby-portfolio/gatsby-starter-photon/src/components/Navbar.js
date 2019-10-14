import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import navbarStyles from './Navbar.module.scss'

export default function Navagation() {
  return (
    <Navbar className={navbarStyles.navbar} bg="white" expand="lg" fixed="top">
      <Navbar.Brand href="#home" className={navbarStyles.logoName}>
        <img
          src="https://i.imgur.com/bXjBe8j.gif"
          className={navbarStyles.imgLogo}
          alt="Alan Tang Logo"
        />
      </Navbar.Brand>

      <Navbar.Collapse
        id="basic-navbar-nav"
        className={navbarStyles.justifyContentEnd}
      >
        <Nav className={navbarStyles.navLinks}>
          <Nav.Link id="links" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className={navbarStyles.navLinks} href="#about">
            About
          </Nav.Link>
          <Nav.Link className={navbarStyles.navLinks} href="#projects">
            Projects
          </Nav.Link>
          <Nav.Link className={navbarStyles.navLinks} href="#photos">
            Photos
          </Nav.Link>
          <Nav.Link className={navbarStyles.navLinks} href="#footer">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
