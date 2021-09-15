import React, { useState } from "react";
import "./inputComponent.scss"

export function InputComponent({addItem}) {

    const [inputValue,setValue] = useState("");

    function onChange(e) {
        setValue(e.target.value);
    }
    function sendNewItem() {
        addItem(inputValue);
        setValue("");
    }
    function keyPressed(e) {
        // Diese Funktion ermöglicht es, einen Listeneintrag durch Drücken der Enter-Taste hinzuzufügen.
        if (e.key==="Enter") sendNewItem();
    }
    return (
        <div className="inputComponent">
            <input onKeyDown={keyPressed} value={inputValue} placeholder="Eintrag hinzufügen..." onChange={onChange} type="text" />
            <button className="square add-item" onClick={sendNewItem}><i className="fa fa-plus"></i></button>
        </div>
    )
}