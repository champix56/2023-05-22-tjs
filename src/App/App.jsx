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
import {showModal, store, storeInitialState} from './store/store'
import Button from './components/ui/Button/Button';
function App(props) {
  const [meme, setmeme] = useState(emptyMeme);
  const [imgs, setimgs] = useState([]);
  const [memes, setmemes] = useState([]);
  const [storeState, setstoreState] = useState(storeInitialState)
  useEffect(() => {
    const prImg = fetch(`http://localhost:5679/images`)
      .then(r => r.json())

    const prMeme = fetch(`http://localhost:5679/memes`)
      .then(r => r.json())

    Promise.all([prImg, prMeme])
      .then(arr => {
        setmemes(arr[1]);
        setimgs(arr[0])
      });
      setstoreState(store.getState());
      store.subscribe(()=>{setstoreState(store.getState())});
  }, [])
  return (
    <FlexH3Grow>
      <Header />
      <Button onButtonClick={()=>store.dispatch(showModal('coucoucoucou'))}>click surtout pas ICI !!</Button>
      <Navbar />
      <FlexW1Grow>
        <Routes>
          <Route path='/' element={<h1>Hello</h1>} />
          <Route path='/thumbnail' element={<MemeSVGThumbnail memes={memes} images={imgs} basePath='' />} />
          <Route path='/meme' element={<>
            <MemeSVGViewer meme={meme} image={imgs.find((img) => img.id === meme.imageId)} basePath='' />
            <MemeForm meme={meme} images={imgs} onMemeChange={(meme) => {
              setmeme(meme);
            }} />
          </>} />
        </Routes>
      </FlexW1Grow>
      <Footer />
    </FlexH3Grow>
  );
}

export default App;