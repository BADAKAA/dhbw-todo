import React, { useEffect, useState } from "react";

export const ResetComponent = ({ emptyListeninhalt }) => {
  function resetHandler(event) {
    emptyListeninhalt((aktuellesArray) => []);
  }

  return <button onClick={resetHandler}>RESET</button>;
};
