import React, { useState } from "react";
import "./inputComponent.scss"

export function InputComponent({updateList}) {

    const [inputValue,setValue] = useState("");

    function onChange(e) {
        setValue(e.target.value);
    }
    function addItem() {
        if (!inputValue) return; // Diese Zeile verhindert, dass ein leeres Listenelement hinzugefügt wird.
        updateList(currentArray => [...currentArray,inputValue])
        setValue("")
    }
    function keyPressed(e) {
        // Diese Funktion ermöglicht es, einen Listeneintrag durch Drücken der Enter-Taste hinzuzufügen.
        if (e.key==="Enter") addItem();
    }
    return (
        <div className="inputComponent">
            <input onKeyDown={keyPressed} value={inputValue} placeholder="Eintrag hinzufügen..." onChange={onChange} type="text" />
            <button className="square add-item" onClick={addItem}><i className="fa fa-plus"></i></button>
        </div>
    )
}