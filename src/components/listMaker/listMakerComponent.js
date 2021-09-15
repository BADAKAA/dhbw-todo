import React, { useState } from "react";
import "./listMakerComponent.scss";
import { InputComponent } from "../input/inputComponent";
import { ListComponent } from "../list/listComponent";
import { ResetComponent } from "../reset/resetComponent";

export function ListMakerComponent() {
  const [listContent, setListContent] = useState([]);
  return (
    <div className="listMakerComponent">
        <div className="editor">
      <ResetComponent emptyListeninhalt={setListContent} />
      <InputComponent updateList={setListContent} />
        </div>
      <ListComponent list={listContent} />
    </div>
  );
}
