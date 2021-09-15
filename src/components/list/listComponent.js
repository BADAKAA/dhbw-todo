import React from "react";
import "./listComponent.scss";

export function ListComponent({ list, updateList }) {
  if (!list) list = [];

  function removeItem(element) {
    const index = list.indexOf(element);
    list.slice(index);
    updateList(list);
  }

  // Jedes Listenelement wird in drei Bereiche unterteilt
  return (
    <ul className="todoList">
      <li key="Title" className="listItem">
        <h2 className="listTitle">Tasks</h2>
      </li>
      {list &&
        list.map((element) => (
          <li key={element} className="listItem">
            {element}
            <button onClick={() => removeItem(element)}></button>
          </li>
        ))}
    </ul>
  );
}
