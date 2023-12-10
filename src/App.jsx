import { React, useState, useEffect } from 'react'
import './styles.css'
import {array} from './index.js'

export default function App() {

const [display, setDisplay] = useState("")

useEffect(() => {
  document.addEventListener("keydown", handleKeyPress, false);
  
  return () => {
    document.removeEventListener("keydown", handleKeyPress, false);
  }
}, []);

function handleClick (event) {
  const audio = event.target.children[0];
  setDisplay(event.target.id)
  audio.play()
}

function handleKeyPress (event) {
  switch(event.keyCode) {
    case 81:
      document.getElementById("Heater 1").click();
      break;
    case 87:
      document.getElementById("Heater 2").click();
      break;
    case 69:
      document.getElementById("Heater 3").click();
      break;
    case 65:
      document.getElementById("Heater 4").click();
      break;
    case 83:
      document.getElementById("Clap").click();
      break;
    case 68:
      document.getElementById("Open high hat").click();
      break;
    case 90:
      document.getElementById("Kick-n-hat").click();
      break;
    case 88:
      document.getElementById("Kick").click();
      break;
    case 67:
      document.getElementById("Closed high hat").click();
      break;
  }

}

const buttonElements = array.map(element => (
  <button 
    className="drum-pad" 
    id={element.name}
    key={element.id}
    onClick={handleClick}
  >
    {element.id}
    <audio 
      src={element.audio} 
      className="clip" 
      id={element.id}
    ></audio>
</button>
))

  return (
    <div id="drum-machine">
      <div id="display">
        <div className="text-wrapper">
          <h1>
            {display}
          </h1>
        </div>
      </div>
        <div className="buttons">
          {buttonElements}
        </div>
    </div>
  )
}