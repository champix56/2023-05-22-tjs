import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';

const initialState={};
/**
 * navbar component
 * @param {any} props 
 * @returns React.Component Navbar render
 */
const Navbar = (props) => {
  const [state, setstate] = useState(initialState);
  useEffect(() => {
    console.log('Navbar mounted');
  }, [])
  return (
    <div className={styles.Navbar} data-testid="Navbar">
      navbar Component
    </div>
  )
};

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
