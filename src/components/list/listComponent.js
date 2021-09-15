import React from "react";
import "./listComponent.scss"

export function ListComponent({list}) {
    if (!list) list = [];

    // Jedes Listenelement wird in drei Bereiche unterteilt
    return(
        <ul className="todoList">
            <li key="Title" className="listItem"><h2 className="listTitle">Tasks</h2></li>
            {list && list.map(element => <li key={element} className="listItem">{element}</li>)}
        </ul>
    )
}  