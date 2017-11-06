import React from "react";
import { withState } from "recompose";
import { keys, mapObjIndexed, pipe, pathOr } from "ramda";

const mapComponents = mapObjIndexed((num, key, obj) => <obj key={num} />);

const solitaireStyle = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  height: window.screen.availHeight //"100%"
};

const componentSelectorStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: window.screen.width / 10,
  border: "1px solid black",
  cross: "flex-grow",
  height: window.screen.availHeight //"100%",
};

const buttonStyle = selected => ({
  borderBottom: "1px solid black",
  padding: "10px",
  color: selected ? "white" : "black",
  backgroundColor: selected ? "black" : "white",
  textDecoration: "none"
});

const Button = ({ title, selected, onClick = () => {} }) => (
  <a style={buttonStyle(selected)} href="#" onClick={onClick}>
    {title}
  </a>
);

const ComponentSelector = ({ components, state, setState }) =>
  console.warn("screen", window.screen) || (
    <div style={componentSelectorStyle}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid black",
          fontSize: "25px",
          padding: "10px"
        }}
      >
        ♠
      </div>
      {keys(components).map(name => (
        <Button
          title={name}
          selected={name === state.selectedComponent}
          onClick={() => {
            setState({ ...state, selectedComponent: name });
          }}
        />
      ))}
    </div>
  );

const SolitaryConfinement = ({ Component }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      flexGrow: "1"
    }}
  >
    <Component />
  </div>
);

const NoneSelected = () => <div>Select a component</div>;

const Solitaire = ({ state, setState, components, AppComponent }) => (
  <div style={solitaireStyle}>
    <ComponentSelector
      state={state}
      setState={setState}
      components={components}
    />

    <SolitaryConfinement
      Component={pathOr(NoneSelected, [state.selectedComponent], components)}
    />
  </div>
);

export default withState("state", "setState", { selectedComponent: undefined })(
  Solitaire
);
