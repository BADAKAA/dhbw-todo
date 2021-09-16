import React, { useEffect, useState } from "react";
import "./listMakerComponent.scss";
import { InputComponent } from "../input/inputComponent";
import { ListComponent } from "../list/listComponent";
import { ResetComponent } from "../reset/resetComponent";

export function ListMakerComponent() {

  // So würde das Interface für ein Listenelement in TypeScript aussehen:

  // interface listItem {
  //   content:string,
  //   checked:boolean
  // }

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
    localStorage.setItem("dhbw-todo-gruppe-2",JSON.stringify([...new Set(listContent)]))
    console.log([...new Set(listContent)]); // The Set Operator is used to remove duplicates;
  },[listContent])
  
  function displayError(error) {
    clearInterval(errorTimeout);
    setErrorMessage(error);
    setErrorTimeout(setTimeout(()=>setErrorMessage(""), 5000));
  }

  function addItem(content) {
    if (!content) return displayError("Kein Text eingegeben."); // Diese Zeile verhindert, dass ein leeres Listenelement hinzugefügt wird.
    if((listContent.map(el=>el.content)).includes(content)) return displayError("Dieser Punkt steht bereits auf der Liste."); // Diese Zeile verhindert, dass ein doppeltes Listenelement hinzugefügt wird (wichtig für die Identifizierung über keys).
    content = {content:content,checked:false};
    setListContent([...listContent,content])
  }
  function removeItem(index) {
    if ((!index && index!==0 )|| typeof index !=="number") return;
    const newList = listContent.slice();
    // Die slice()-Funktion erstellt eine Kopie des Arrays.
    // Weil bei Objekten (Arrays) nur eine Referenz gespeichert wird, muss eine Kopie erstellt werden, damit nicht versehentlich die "listContent"-Variable verändert wird.
    // Das würde zu unerwünschtem Verhalten führen.
    newList.splice(index,1);
    setListContent(newList);
  }

  function setCheck(index,value) {
    if ((!index && index!==0 )|| typeof index !=="number" || typeof value !== "boolean") return console.error("Cannot check item.");;
    const newList = listContent.slice(); //Erklärung "slice()": siehe "removeItemAtIndex()";
    newList[index].checked=value;
    setListContent(newList);
  }
  function editItem(index,content) {
    if ((!index && index!==0 )|| typeof index !=="number" || typeof content !== "string") return console.error("Cannot edit item.");
    const newList = listContent.slice(); //Erklärung "slice()": siehe "removeItemAtIndex()";
    newList[index].content=content;
    setListContent(newList);
  }
  return (
    <div className="listMakerComponent">
        <p className="errorMessage">{errorMessage}</p>
      <div className="editor">
        <ResetComponent updateList={setListContent} />
        <InputComponent addItem={addItem} />
      </div>
      <ListComponent list={listContent} removeItemAtIndex={removeItem} setCheckAtIndex={setCheck} editItemAtIndex={editItem} />
    </div>
  );
}
