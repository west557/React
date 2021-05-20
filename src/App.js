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

/*

return (
  <h1> Create an Account now to get started! </h1>
  <form>
    <input type="First Name" placeholder = "First Name" name="first" />
    <br> </br>
    <input type="Surname" placeholder = "Surname" name="Surname" />
    <br> </br>
    <input type="text" placeholder="Email" name="email" />
    <br> </br>
    <input type="text" placeholder="Information" name="Information" />
    </form>

    );


*/


export default App;
