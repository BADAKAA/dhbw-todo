import React, { useEffect, useState } from "react";
import "./welcomeScreenComponent.scss"

export function WelcomeScreenComponent() {
  const [visible, setVisibility] = useState(true);

  const hide = () => setVisibility(false);
  const show = () => setVisibility(true);

  const getScreenPreference = () => JSON.parse(localStorage.getItem("dhbw-todo-group-2-welcome-preference" || "false"));

  useEffect(() => {
    // Dieser Eventlistener erlaubt es, die Startseite auch durch Betätigen der Enter- oder Escape-Taste zu schließen.
    window.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === "Escape") hide();
    });
    const screenDeactivated = getScreenPreference();
    screenDeactivated ? hide() : show();
  }, [])



  useEffect(() => {
    const checkbox = document.querySelector("#welcomeCheckbox");
    if (checkbox) checkbox.checked = getScreenPreference();
  })
  function checkBoxClicked(e) {
    // Die Auswahl wird im LocalStorage festgehalten.
    localStorage.setItem("dhbw-todo-group-2-welcome-preference", e.target.checked.toString())
  }
  if (!visible) return <i id="homeIcon" onClick={show} className="fa fa-home"></i>;

  return (
    <div className="welcomeScreenComponent">
      <i id="todoIcon" onClick={hide} className="fa fa-tasks"></i>
      <div className="title-text">
        <h2 id="welcomeFont">
          All your tasks–<br />already done.
        </h2>
        <p>Wilkommen! 👋</p>
        <p>Benutzen Sie diese App und steigern Sie Ihre Produktivität um 1000% (mindestens).</p>
        <div className="buttons">
          <button id="welcomeButton" onClick={hide}>Jetzt loslegen</button>
        </div>
        <label className="container" id="checkboxContainer">
          <input type="checkbox" id="welcomeCheckbox" onChange={checkBoxClicked}></input>
          <span className="checkmark"></span>
          Diesen Bildschirm nicht mehr anzeigen
        </label>
      </div>
      <div className="hero">
        <img className="titleImage" src="assets/completed-tasks.svg" alt="Illustration of a ToDo List." />
      </div>

    </div>
  )

};