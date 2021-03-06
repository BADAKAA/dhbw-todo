import React from "react";
import "./resetComponent.scss";

export const ResetComponent = ({ updateList }) => {
  function resetHandler() {
    //Die ResetComponent funktioniert aehnlich wie die InputComponent.
    //Hierbei wird aus der Componente listMakerComponent die Funktion setListContent geholt.
    //Anstatt Inhalte auszugeben wird das Array geleert.
    updateList([]);
  }
  //Der Button RESET aktiviert den resetHandler, welcher das Array leert.
  return (
    <button className="reset-list" onClick={resetHandler}>
      LISTE LÖSCHEN <i className="fa fa-broom"></i>
    </button>
  );
};
