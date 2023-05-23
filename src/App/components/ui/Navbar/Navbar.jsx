import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';
import { Navbar as NavBar, Container, Nav } from 'react-bootstrap';
/**
 * navbar component
 * @returns React.Component Navbar render
 */
const Navbar = () => {
  return (
    <div className={styles.Navbar} data-testid="Navbar">
      <NavBar bg="primary" variant="dark">
        <Container>
          <NavBar.Brand href="#home">Navbar</NavBar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </NavBar>
    </div>
  )
};

export default Navbar;
