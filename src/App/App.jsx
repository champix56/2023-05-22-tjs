import React from 'react';
import './App.css';
import Button from './components/ui/Button/Button';

function App() {
  return (
    <div className="App">
      <Button style={{ textDecoration: 'underline' }} onButtonClick={(unTruc) => {
        console.log(unTruc);
      }} >ok</Button>
    </div>
  );
}

export default App;
