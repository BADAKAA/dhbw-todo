import React from "react";
import "./listComponent.scss";

export function ListComponent({ list, removeItemAtIndex }) {

  function removeItem(element) {
    const index = list.indexOf(element);
    removeItemAtIndex(index);
  }

  // Jedes Listenelement wird in drei Bereiche unterteilt
  return (
    <ul className="todoList">
      <li key="Title" className="listItem">
        <h2 className="listTitle">Tasks</h2>
      </li>
      { list && 
        list.map((element) => (
          <li key={element}  className="listItem">
            <div className="itemContent">
            {element}
            </div>
            <div className="buttons">
              <button className="sqaure edit" onClick={() => removeItem(element)}> <i className="fa fa-pen"></i> </button>
              <button className="sqaure delete" onClick={() => removeItem(element)}> <i className="fa fa-trash"></i> </button>
            </div>

          </li>
        ))}
    </ul>
  );
}
