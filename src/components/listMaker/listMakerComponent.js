import React, { useState } from "react";
import "./listMakerComponent.scss"
import { InputComponent } from "../input/inputComponent";
import { ListComponent } from "../list/listComponent";

export function ListMakerComponent() {

    const [listContent,setListContent] = useState([])
    return (
        <div className="listMakerComponent">
            <InputComponent updateList={setListContent}/>
            <ListComponent list={listContent}/>
        </div>
    )
}