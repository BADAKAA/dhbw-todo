import React, { useEffect, useState } from "react";
import "./listMakerComponent.scss";
import { InputComponent } from "../input/inputComponent";
import { ListComponent } from "../list/listComponent";
import { ResetComponent } from "../reset/resetComponent";

export function ListMakerComponent() {
  const [listContent, setListContent] = useState([]);

  useEffect(()=> {
      // Wenn die Komponente das erste mal geladen wird, dann überprüft sie, ob bereits Listenwerte im LocalStorage festgehalten wurden.
      // Andernfalls wird eine Leere Liste initialisiert.
      // Das leere Array am Ende der "useEffect()"-Funktion bewirkt, dass diese nur einmal bei der Komponenten-Initialisierung aufgerufen wird.
    setListContent(JSON.parse(localStorage.getItem("dhbw-todo-gruppe-2")||"[]"));
    console.log(JSON.parse(localStorage.getItem("dhbw-todo-gruppe-2")));
      // Bevor die Anwendung geschlossen wird, werden durch diese Funktion die Werte der Liste im LocalStorage festgehalten.
    window.addEventListener("beforeunload", () => localStorage.setItem("dhbw-todo-gruppe-2",JSON.stringify(listContent)))
  },[])
  return (
    <div className="listMakerComponent">
        <div className="editor">
            <ResetComponent emptyListeninhalt={setListContent} />
            <InputComponent updateList={setListContent} />
        </div>
      <ListComponent list={listContent} />
    </div>
  );
}
