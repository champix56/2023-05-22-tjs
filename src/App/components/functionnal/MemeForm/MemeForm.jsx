import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';
import Button from '../../ui/Button/Button';

const initialState = {};
/**
 * memeForm component
 * @param {any} props 
 * @returns React.Component MemeForm render
 */
const MemeForm = (props) => {


  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      <form>
        <label htmlFor="titre"><h1>Titre</h1></label>
        <br />
        <input name="titre" id="titre" value={props.meme.titre} />
        <hr />
        <label htmlFor="image"><h2>Image</h2></label>
        <br />
        <select name="image" id="image">
          <option value="-1">No image</option>
        </select>
        <hr />
        <label htmlFor="text"><h2>texte</h2></label>
        <br />
        <input name="text" id="text" type="text" value={props.meme.text} onChange={evt => {
          props.onMemeChange({ ...props.meme, text: evt.target.value })
        }} />
        <br />
        <label htmlFor="x"><h2 style={{ display: 'inline' }}>x :</h2>
        </label>
        <input className={styles.smallNumber} name="x" id="x" type="number" value={props.meme.x}  onChange={evt => {
          props.onMemeChange({ ...props.meme, x:Number(evt.target.value) })
        }} />
        <label htmlFor="y"><h2 style={{ display: 'inline' }}>y :</h2></label>
        <input className={styles.smallNumber} name="y" id="y" type="number" value={props.meme.y} />
        <hr />
        <h2>Decorations</h2>
        <label htmlFor="color"><h2 style={{ display: 'inline' }}>color :</h2></label>
        <input name="color" id="color" type="color" value={props.meme.color} />
        <br />
        <label htmlFor="fontSize"><h2 style={{ display: 'inline' }}>font-size :</h2></label>
        <input className={styles.smallNumber} name="fontSize" id="fontSize" type="number" min="0" value={props.meme.fontSize} />px
        <br />
        <label htmlFor="fontWeight"><h2 style={{ display: 'inline' }}>font-weight :</h2></label>
        <input className={styles.smallNumber} name="fontWeight" id="fontWeight" type="number" min="100" step="100" max="900" value={props.meme.fontWeight} />
        <br />
        <input name="underline" id="underline" type="checkbox" checked={props.meme.underline} />&nbsp;<label htmlFor="underline"><h2 style={{ display: 'inline' }}>underline</h2></label>&nbsp;<h2 style={{ display: 'inline' }}>/</h2>&nbsp;<label htmlFor="italic"><h2 style={{ display: 'inline' }}>italic</h2></label>&nbsp;<input name="italic" id="italic" type="checkbox" checked={props.meme.italic} />
        <hr />
        <Button bgColor='tomato' type="reset">Annul.</Button>
        <Button bgColor='skyblue' type="submit">OK</Button>
      </form>
    </div>
  )
};

MemeForm.propTypes = {
  meme: PropTypes.shape({
    id: PropTypes.number,
    titre: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    fontWeight: PropTypes.string.isRequired,
    fontSize: PropTypes.number.isRequired,
    underline: PropTypes.bool.isRequired,
    italic: PropTypes.bool.isRequired,
    imageId: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    frameSizeX: PropTypes.number.isRequired,
    frameSizeY: PropTypes.number.isRequired
  }).isRequired,
  onMemeChange: PropTypes.func.isRequired,
  images : PropTypes.array.isRequired
};

MemeForm.defaultProps = {};

export default MemeForm;
