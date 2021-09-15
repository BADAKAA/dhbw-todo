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
      <p>Herzlich Willkommen zur ToDo-Liste!</p>
      <button onClick={hide}>Jetzt loslegen</button>
    </div>)
  }
  return <div className='backgroundForDiv'></div>

};