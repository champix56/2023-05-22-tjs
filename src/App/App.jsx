import React from 'react';
import './App.css';
import { MemeSVGViewer, emptyMeme } from 'orsys-tjs-meme';
import Button from './components/ui/Button/Button';

function App() {
  return (
    <div className="App">
      <Button style={{ textDecoration: 'underline' }} onButtonClick={(unTruc) => {
        console.log('%c%s', 'font-size:28pt;color:tomato;text-decoration:underline blue;', unTruc);
      }}>
        ok<img src='https://cdn4.iconfinder.com/data/icons/icocentre-free-icons/137/f-check_256-256.png' alt='' />
      </Button>
    </div>
  );
}

export default App;
