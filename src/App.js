import randomColor from "randomcolor";
import { useState } from 'react';
import './index.css';

const App = () =>  {
  const [color,setColor]= useState('#f3c4fb');

  const handleClick= () => {
    setColor(
      randomColor()
    );
  };

  return (
    <div className="App" style={{backgroundColor: color }}>
      <h1 onClick={() =>  navigator.clipboard.writeText(color)}> {color} </h1>
      <h4> Click to copy hex code </h4>
      <h3> Press the button below to generate a new color </h3>
      <div className="button-container">
        <button onClick={handleClick}>Click me!</button>
      </div>
    </div>
  );
}

export default App;
