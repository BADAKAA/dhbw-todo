import React, { useEffect, useState } from "react";
import "./welcomeScreenComponent.scss"

export function WelcomeScreenComponent() {
  const [visible,setVisibility] = useState(true);

  const hide = () => setVisibility(false)
  const show = () => setVisibility(true)

  useEffect(()=> {
    // Dieser Eventlistener erlaubt es, die Startseite auch durch Betätigen der Enter- oder Escape-Taste zu schließen.
    window.addEventListener("keydown", e=>{
      if (e.key==="Enter" || e.key==="Escape") hide();
    });
  },[])

  if (!visible) return <i id="homeIcon" onClick={show} className="fa fa-home"></i>;

  return (
    <div className="welcomeScreenComponent">
      <i id="todoIcon" onClick={hide} className="fa fa-tasks"></i>
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