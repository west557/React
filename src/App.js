import React from "react";
import './App.css';
import './index.css';
import virtual from "./virtual.jpg"


// https://api.github.com/users/west557
// https://github.com/jasonhtpham/StoryAR-frontend


function App() {


return (
    <div>
      <h1>Story AR!</h1>
      <h2>Welcome to an interactive Augmented Reality Game!</h2>
      <img src={virtual} /> <br></br>
      <button
        className="Start"
        >Start Game</button>
        <br></br>
        <br></br>
      <footer>
        A program by Jason Pham, Nikhita Paul, 
        Scott West and Cameron Howling.       
      </footer>
        <br></br>
        <br></br>

    </div>
  );
}


export default App;
