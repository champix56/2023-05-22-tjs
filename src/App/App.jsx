import React from 'react';
import './App.css';
import { MemeSVGViewer, emptyMeme } from 'orsys-tjs-meme';

function App() {
  return (
    <div className="App">
      <MemeSVGViewer meme={emptyMeme} image={undefined} />
    </div>
  );
}

export default App;
