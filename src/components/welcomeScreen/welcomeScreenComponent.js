import React, {useState} from "react";
import "./welcomeScreenComponent.scss"

export function WelcomeScreenComponent() {
  
  //Wir speichern im State ob die Komponente sichtbar ist
  const [visibility, setVisibility] = useState(true)
  function hide (event){
    setVisibility(false)
  }

  if (visibility){

    return (
    <div className="welcomeScreenComponent">
      <p id="welcomeFont">Herzlich Willkommen zur ToDo-Liste!</p>
      <button id="welcomeButton" onClick={hide}>Jetzt loslegen</button>
      <div id="checkboxAll">
      <input type="checkbox" id="welcomeCheckbox"></input>
      <label for="welcomeCheckbox">Diesen Bildschirm nicht mehr anzeigen!</label>
      </div> 
    </div>)
  }
  return <div className='backgroundForDiv'></div>

};