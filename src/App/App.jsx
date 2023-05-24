import React, { useState, useEffect } from 'react';
import './App.css';
import FlexH3Grow from './components/layout/FlexH3Grow/FlexH3Grow';
import Header from './components/ui/Header/Header';
import Navbar from './components/ui/Navbar/Navbar';
import FlexW1Grow from './components/layout/FlexW1Grow/FlexW1Grow';
import { MemeSVGThumbnail, MemeSVGViewer, emptyMeme } from 'orsys-tjs-meme'
import MemeForm from './components/functionnal/MemeForm/MemeForm';
import Footer from './components/ui/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Button from './components/ui/Button/Button';
import { addImage } from './store/memes';
import MemeThumbnail from './pages/MemeThumbnail/MemeThumbnail';
function App(props) {
  const [meme, setmeme] = useState(emptyMeme);
  return (
    <FlexH3Grow>
      <Header />
      <Navbar />
      <FlexW1Grow>
        <Routes>
          <Route path='/' element={<h1>Hello</h1>} />
          <Route path='/thumbnail' element={
           <MemeThumbnail />
          } />
          <Route path='/meme' element={<>
            {/* <MemeSVGViewer meme={meme} image={imgs.find((img) => img.id === meme.imageId)} basePath='' />
            <MemeForm meme={meme} images={imgs} onMemeChange={(meme) => {
              setmeme(meme);
            }} /> */}
          </>} />
        </Routes>
      </FlexW1Grow>
      <Footer />
    </FlexH3Grow>
  );
}

export default App;