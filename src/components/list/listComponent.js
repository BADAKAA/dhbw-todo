import React from "react";
import "./listComponent.scss"

export function ListComponent({list}) {
    if (!list) list = [];
    return(
        <ul className="todoList">
            {list && list.map(element => <li>{element}</li>)}
        </ul>   
    )
}  