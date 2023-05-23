import React, { useEffect, useState } from 'react';
import './App.css';
import FlexH3Grow from './components/layout/FlexH3Grow/FlexH3Grow';
import Header from './components/ui/Header/Header';
import Navbar from './components/ui/Navbar/Navbar';
import FlexW1Grow from './components/layout/FlexW1Grow/FlexW1Grow';
import { MemeSVGViewer, emptyMeme } from 'orsys-tjs-meme'
import MemeForm from './components/functionnal/MemeForm/MemeForm';
import Footer from './components/ui/Footer/Footer';
function App(props) {
  return (
    <FlexH3Grow>
      <Header />
      <Navbar />
      <FlexW1Grow>
        <MemeSVGViewer meme={emptyMeme} image={undefined} />
        <MemeForm />
      </FlexW1Grow>
      <Footer />
    </FlexH3Grow>
  );
}

export default App;
