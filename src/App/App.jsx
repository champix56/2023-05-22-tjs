import React, { useState } from 'react';
import './App.css';
import Button from './components/ui/Button/Button';

function App() {
  const [counter, setcounter] = useState(0)
  return (
    <div className="App">
      valeur de counter :{counter}
      <hr />
      <Button bgColor='tomato' onButtonClick={() => {
       setcounter(counter-1);
       console.log(counter);
      }} >-1</Button>
      <Button bgColor='skyblue' onButtonClick={() => {
       setcounter(counter+1);
       console.log(counter);
      }} >+1</Button>

    </div>
  );
}

export default App;
