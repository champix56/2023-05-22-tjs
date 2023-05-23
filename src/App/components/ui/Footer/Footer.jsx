import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const initialState={};
/**
 * footer component
 * @param {any} props 
 * @returns React.Component Footer render
 */
const Footer = (props) => {
  const [state, setstate] = useState(initialState);
  useEffect(() => {
    console.log('Footer mounted');
  }, [])
  return (
    <div className={styles.Footer} data-testid="Footer">
      footer Component
    </div>
  )
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
