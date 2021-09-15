import React, { useEffect, useState } from "react";
import "./welcomeScreenComponent.scss"

export function WelcomeScreenComponent() {

  //Wir speichern im State ob die Komponente sichtbar ist
  const [visibility, setVisibility] = useState(true)
  function hide() {
    setVisibility(false)
  }
  useEffect(()=> {
    window.addEventListener("keydown", e=>{
      if (e.key==="Enter" || e.key==="Escape") hide();
    });
  },[])

  if (!visibility) return <div></div>;

  return (
    <div className="welcomeScreenComponent">
      <div className="title-text">
        <h2 id="welcomeFont">
          All your tasks–<br />already done.
        </h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis voluptatibus pariatur rem quod.</p>
        <p>Quis obcaecati delectus reiciendis iure unde sint quasi magni, cupiditate consequuntur voluptatum, ipsam debitis nihil quae dolorem.</p>
        <div className="buttons">
          <button id="welcomeButton" onClick={hide}>Jetzt loslegen</button>
        </div>
        <div id="checkboxContainer">
          <input type="checkbox" id="welcomeCheckbox"></input>
          <label htmlFor="welcomeCheckbox">Diesen Bildschirm nicht mehr anzeigen</label>
        </div>
      </div>
      <div className="hero">
        <img className="titleImage" src="assets/completed-tasks.svg" alt="Illustration of a ToDo List." />
      </div>

    </div>
  )

};