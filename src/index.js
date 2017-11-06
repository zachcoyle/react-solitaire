import React from "react";

import Solitaire from "./Solitaire";

import "./index.css";

export default components => AppComponent => {
  return <Solitaire components={components} AppComponent={AppComponent} />;
};
