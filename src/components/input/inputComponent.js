import React, { useState } from "react";
import "./inputComponent.scss"

export function InputComponent({updateList}) {

    const [inputValue,setValue] = useState("");

    function onChange(e) {
        setValue(e.target.value);
    }
    function addItem() {
        updateList(currentArray => [...currentArray,inputValue])
        setValue("")
    }
    return (
        <div className="inputComponent">
            <input  value={inputValue} placeholder="List item text..." onChange={onChange} type="text" />
            <i className="bi bi-plus-square-fill" onClick={addItem}></i>
        </div>
    )
}