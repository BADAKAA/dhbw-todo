import React from "react";
import "./listComponent.scss";

export function ListComponent({ list, removeItemAtIndex, setCheckAtIndex }) {
  function removeItem(element) {
    const index = list.indexOf(element);
    removeItemAtIndex(index);
  }

  function checkItem(element) {
    // Diese Funktion sucht den Index eines Items und kehrt den Status "checked" anschließend um.
    const index = list.indexOf(element);
    const value = element.checked ? false : true;
    setCheckAtIndex(index,value);
  }


  // Jedes Listenelement wird in drei Bereiche unterteilt
  return (
    <ul className="todoList">
      <li key="Title" className="listItem title">
        <h2 className="listTitle">Tasks</h2>
      </li>
      { list && 
        list.map((element) => (
          <li key={element.content} className="listItem" onClick={() => checkItem(element)} >
              <button className={"square check " + (element.checked ? "checked":"")} onClick={() => checkItem(element)}> <i className="fa fa-check"></i> </button>
            <div className={"itemContent " + (element.checked ? "checked":"")}> {/* Wenn der Wert "checked" im Objekt "true" ist, dann wird die Klasse "checked" hinzugefüt*/}
            {element.content}
            </div>
            <div className={"buttons " + (element.checked ? "checked":"")}>
              <button className="sqaure edit" onClick={() => removeItem(element)}> <i className="fa fa-pen"></i> </button>
              <button className="sqaure delete" onClick={() => removeItem(element)}> <i className="fa fa-trash"></i> </button>
            </div>

          </li>
        ))}
    </ul>
  );
}
