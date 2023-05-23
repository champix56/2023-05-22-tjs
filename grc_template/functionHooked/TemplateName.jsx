import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateName.module.css';

const initialState={};
/**
 * templateName component
 * @param {any} props 
 * @returns React.Component TemplateName render
 */
const TemplateName = (props) => {
  const [state, setstate] = useState(initialState);
  useEffect(() => {
    console.log('TemplateName mounted');
  }, [])
  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      templateName Component
    </div>
  )
};

TemplateName.propTypes = {};

TemplateName.defaultProps = {};

export default TemplateName;
