import React, { useEffect, useState } from "react";
import "./listComponent.scss";

export function ListComponent({ list, removeItemAtIndex, setCheckAtIndex, editItemAtIndex }) {

  const [lastEdited, setLastEdited] = useState(null);

  useEffect(() => {
    // Wird eine Bearbeitung ausgeführt, dann wird die Komponente neu geladen.
    // Dadurch geht der Fokus auf dem zuletzt bearbeiteten Inputfeld nach jeden Tastenanschlag verloren.
    // Kommentieren Sie gerne das if-Statement aus und versuchen Sie, ein Tabellenelement zu bearbeiten.
    const lastEditedElement = document.querySelector("#" + lastEdited)
    if (lastEditedElement && lastEditedElement !== document.activeElement) lastEditedElement.focus();
  })

  function removeItem(element) {
    const index = list.indexOf(element);
    removeItemAtIndex(index);
  }

  function checkItem(element) {
    // Diese Funktion sucht den Index eines Items und kehrt den Status "checked" anschließend um.
    const index = list.indexOf(element);
    const value = element.checked ? false : true;
    setCheckAtIndex(index, value);
  }
  function itemClicked(e) {
    setLastEdited(e.target.id);
  }

  function editItem(e, element) {
    if (e.button) console.log("MOUSE");
    const index = list.indexOf(element);
    editItemAtIndex(index, e.target.value);
  }

  // Die nächsten beiden Funktion erlauben es, das Bearbeiten eines Listeneintrags durch Drücken der Escape- oder Enter-Taste zu beenden.
  function keyInputOnItem(e,element) {
    if (e.key === "Enter" || e.key === "Escape") return abortAction(e);
    if (e.key==="Delete") removeItem(element); // Diese Zeile erlaubt es, einen Listeneintrag während der Bearbeitung durch drücken der Entfernen-Tatse
  }
  function abortAction(e) {
    e.target.blur();
    console.log("Abort");
    setLastEdited(null)
  }

  // Jedes Listenelement wird in drei Bereiche unterteilt
  return (
    <ul className="todoList">
      <li key="Title" className="listItem title">
        <h2 className="listTitle">Tasks</h2>
      </li>
      {list &&
        list.map((element) => (
          <li key={element.content} className="listItem"  >
            <button className={"square check " + (element.checked ? "checked" : "")} onClick={()=> checkItem(element)}> <i className="fa fa-check"></i> </button>
            <input 
              id={"input" + list.indexOf(element)} // Diese ID wird verwendet, um das Element wiederzufinden. Siehe useEffect()-Hook
              onKeyDown={e => keyInputOnItem(e,element)}
              onClick={itemClicked}
              //onClick={() =>  checkItem(element)} // This line
              value={element.content}
              onChange={e => editItem(e, element)}
              className={"itemContent " + (element.checked ? "checked" : "")} 
            /> {/* Wenn der Wert "checked" im Objekt "true" ist, dann wird die Klasse "checked" hinzugefüt*/}

            <div className={"buttons " + (element.checked ? "checked" : "")}>
              <button className="sqaure edit" onClick={() => removeItem(element)}> <i className="fa fa-pen"></i> </button>
              <button className="sqaure delete" onClick={() => removeItem(element)}> <i className="fa fa-trash"></i> </button>
            </div>

          </li>
        ))}
    </ul>
  );
}
