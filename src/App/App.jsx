import React, { useEffect, useState } from 'react';
import './App.css';
import Button from './components/ui/Button/Button';
import Button2 from './components/ui/Button/ButtonClass';

function App(props) {
  const [counter, setcounter] = useState(0)
  useEffect(() => {
    console.log('montage du cmp');
    return ()=>{
      console.log('demontage du cmp');
    }
  }, [])
  useEffect(() => {
    console.log('valeur etatique',counter);
    return()=>{
     console.log('demontage du cmp lié a la valeur de counter')
    }
  }, [counter])
  return (
    <div className="App">
      valeur de counter :{counter}
      <hr />
      <Button bgColor='tomato' onButtonClick={() => {
       setcounter(counter-1);
       console.log(counter);
      }} >-1</Button>
      <Button2 bgColor='skyblue' onButtonClick={() => {
       setcounter(counter+1);
       console.log(counter);
      }} >+1</Button2>
     
    </div>
  );
}

export default App;
