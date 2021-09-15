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
        <div>
            <input  value={inputValue} placeholder="List item text..." onChange={onChange} type="text" />
            <button className="add-item-button" onClick={addItem}>+</button>
        </div>
    )
}