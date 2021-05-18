import React from "react";
import './App.css';
import './index.css';
import virtual from "./virtual.jpg"


// https://api.github.com/users/west557


function App() {


return (
    <div>
      <h1>Story AR!</h1>
      <h2>Welcome to an interactive Augmented Reality Game!</h2>
      <img src={virtual} /> <br></br>
      <button
        className="Start"
        onClick={() =>{Props.onClick}}
      >Start Game</button>

    </div>
  );
}


export default App;
