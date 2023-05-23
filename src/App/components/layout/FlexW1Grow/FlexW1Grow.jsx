import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlexW1Grow.module.css';

/**
 * flexW1Grow component
 * @param {any} props 
 * @returns React.Component FlexW1Grow render
 */
const FlexW1Grow = (props) => {
  return (
    <div className={styles.FlexW1Grow} data-testid="FlexW1Grow">
      {props.children}
    </div>
  )
};

FlexW1Grow.propTypes = {
  children: PropTypes.array.isRequired
};

FlexW1Grow.defaultProps = {};

export default FlexW1Grow;
