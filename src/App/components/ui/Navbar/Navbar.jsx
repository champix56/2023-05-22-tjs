import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';
import { Navbar as NavBar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
/**
 * navbar component
 * @returns React.Component Navbar render
 */
const Navbar = () => {
  return (
    <div className={styles.Navbar} data-testid="Navbar">
      <NavBar bg="primary" variant="dark">
        <Container>
          <LinkContainer to="/"><NavBar.Brand href="#">Navbar</NavBar.Brand></LinkContainer>
          <Nav className="me-auto">
          <LinkContainer to="/thumbnail">
            <Nav.Link href="#">Thumbnail</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/meme">
            <Nav.Link href="#">Meme</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/meme/1">
            <Nav.Link href="#">Meme/1</Nav.Link>
          </LinkContainer>
          </Nav>
        </Container>
      </NavBar>
    </div>
  )
};

export default Navbar;
