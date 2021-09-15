import React, { useEffect, useState } from "react";
import "./listMakerComponent.scss";
import { InputComponent } from "../input/inputComponent";
import { ListComponent } from "../list/listComponent";
import { ResetComponent } from "../reset/resetComponent";

export function ListMakerComponent() {
  const [listContent, setListContent] = useState([]);

  const [errorMessage,setErrorMessage] = useState("");
  const [errorTimeout,setErrorTimeout] = useState(0);

  useEffect(() => {
    // Wenn die Komponente das erste mal geladen wird, dann überprüft sie, ob bereits Listenwerte im LocalStorage festgehalten wurden.
    // Andernfalls wird eine Leere Liste initialisiert.
    // Das leere Array am Ende der "useEffect()"-Funktion bewirkt, dass diese nur einmal bei der Komponenten-Initialisierung aufgerufen wird.
    setListContent(
      JSON.parse(localStorage.getItem("dhbw-todo-gruppe-2") || "[]")
    );
  },[])
  console.log(listContent);

  useEffect(() => {
    // Bei jeder Änderung des Listeninhalts werden durch diese Funktion die Werte im LocalStorage festgehalten.
    localStorage.setItem("dhbw-todo-gruppe-2",JSON.stringify(listContent))
  },[listContent])
  
  function displayError(error) {
    clearInterval(errorTimeout);
    setErrorMessage(error);
    setErrorTimeout(setTimeout(()=>setErrorMessage(""), 5000));
  }

  function addItem(item) {
    if (!item) return displayError("Kein Text eingegeben."); // Diese Zeile verhindert, dass ein leeres Listenelement hinzugefügt wird.
    if(listContent.includes(item)) return displayError("Dieser Punkt steht bereits auf der Liste."); // Diese Zeile verhindert, dass ein doppeltes Listenelement hinzugefügt wird (wichtig für die Identifizierung über keys).
    setListContent([...listContent,item])
  }
  function removeItemAtIndex(index) {
    if ((!index && index!==0 )|| typeof index !=="number") return;
    const newList = listContent.slice()
    newList.splice(index,1);
    setListContent(newList);
  }
  return (
    <div className="listMakerComponent">
        <p className="errorMessage">{errorMessage}</p>
      <div className="editor">
        <ResetComponent updateList={setListContent} />
        <InputComponent addItem={addItem} />
      </div>
      <ListComponent list={listContent} removeItemAtIndex={removeItemAtIndex} />
    </div>
  );
}
