import React from "react";

import Solitaire from "./Solitaire";

import "./index.css";

export default ({ hocs, components }) => AppComponent => {
  return (
    <Solitaire
      hocs={hocs}
      components={components}
      AppComponent={AppComponent}
    />
  );
};
