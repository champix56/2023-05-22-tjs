import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';

const initialState = {};
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
      <form>
        <label htmlFor="titre"><h1>Titre</h1></label>
        <br />
        <input name="titre" id="titre" />
        <hr />
        <label htmlFor="image"><h2>Image</h2></label>
        <br />
        <select name="image" id="image">
          <option value="-1">No image</option>
        </select>
        <hr />
        <label htmlFor="text"><h2>texte</h2></label>
        <br />
        <input name="text" id="text" type="text" />
        <br />
        <label htmlFor="x"><h2 style={{display:'inline'}}>x :</h2>
        </label>
        <input className={styles.smallNumber} name="x" id="x" type="number" />
        <label htmlFor="y"><h2 style={{display:'inline'}}>y :</h2></label>
        <input className={styles.smallNumber} name="y" id="y" type="number" />
        <hr />
        <br />
        <h2>Decorations</h2>
        <label htmlFor="color"><h2 style={{display:'inline'}}>color :</h2></label>
        <input name="color" id="color" type="color" />
        <br />
        <label htmlFor="fontSize"><h2 style={{display:'inline'}}>font-size :</h2></label>
        <input className={styles.smallNumber} name="fontSize" id="fontSize" type="number" min="0" />px
        <br />
        <label htmlFor="fontWeight"><h2 style={{display:'inline'}}>font-weight :</h2></label>
        <input className={styles.smallNumber} name="fontWeight" id="fontWeight" type="number" min="100" step="100" max="900" />
        <br />
        <input name="underline" id="underline" type="checkbox" />&nbsp;<label htmlFor="underline"><h2 style={{display:'inline'}}>underline</h2></label>&nbsp;<h2 style={{display:'inline'}}>/</h2>&nbsp;<label htmlFor="italic"><h2 style={{display:'inline'}}>italic</h2></label>&nbsp;<input name="italic" id="italic" type="checkbox" />
        <hr />
        <br />
      </form>
    </div>
  )
};

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
