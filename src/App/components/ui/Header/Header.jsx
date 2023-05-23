import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const initialState={};
/**
 * header component
 * @param {any} props 
 * @returns React.Component Header render
 */
const Header = (props) => {
  const [state, setstate] = useState(initialState);
  useEffect(() => {
    console.log('Header mounted');
  }, [])
  return (
    <div className={styles.Header} data-testid="Header">
      header Component
    </div>
  )
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
