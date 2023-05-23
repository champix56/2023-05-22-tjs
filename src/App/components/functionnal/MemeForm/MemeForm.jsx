import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';

const initialState={};
/**
 * memeForm component
 * @param {any} props 
 * @returns React.Component MemeForm render
 */
const MemeForm = (props) => {
  const [state, setstate] = useState(initialState);
  useEffect(() => {
    console.log('MemeForm mounted');
  }, [])
  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      memeForm Component
    </div>
  )
};

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
