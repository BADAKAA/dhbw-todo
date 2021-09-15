import React from "react";
import "./resetComponent.scss";

export const ResetComponent = ({ emptyListeninhalt }) => {
  function resetHandler(event) {
    //Die ResetComponent funktioniert aehnlich wie die InputComponent.
    //Hierbei wird aus der Componente listMakerComponent die Funktion setListContent geholt.
    //Anstatt Inhalte auszugeben wird das Array geleert.
    emptyListeninhalt((aktuellesArray) => []);
  }
  //Der Button RESET aktiviert den resetHandler, welcher das Array leert.
  return (
    <button className="reset-button" onClick={resetHandler}>
      RESET
    </button>
  );
};
