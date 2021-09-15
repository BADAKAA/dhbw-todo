import React, { useState } from "react";
import "./listMakerComponent.scss";
import { InputComponent } from "../input/inputComponent";
import { ListComponent } from "../list/listComponent";
import { ResetComponent } from "../reset/resetComponent";

export function ListMakerComponent() {
  const [listContent, setListContent] = useState([]);
  return (
    <div className="listMakerComponent">
      <InputComponent updateList={setListContent} />
      <ResetComponent emptyListeninhalt={setListContent} />
      <ListComponent list={listContent} />
    </div>
  );
}
