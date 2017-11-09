import React from "react";
import { withState, compose } from "recompose";
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

const ComponentSelector = ({ components, state, setState }) => (
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
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: "1px solid black",
        fontSize: "15px",
        padding: "10px"
      }}
    >
      <a
        href="#"
        onClick={() => setState({ ...state, useHOCs: !state.useHOCs })}
      >
        Turn higher order components {state.useHOCs ? "off" : "on"}
      </a>
    </div>
    {keys(components).map((name, index) => (
      <Button
        title={name}
        selected={name === state.selectedComponent}
        onClick={() => {
          setState({ ...state, selectedComponent: name });
        }}
        key={index}
      />
    ))}
  </div>
);

const NoneSelected = () => <div>Select a component</div>;

const Solitaire = ({ state, setState, hocs, components, AppComponent }) => {
  const SelectedComponent = pathOr(
    NoneSelected,
    [state.selectedComponent],
    components
  );
  const DisplayComponent = state.useHOCs
    ? compose(...hocs)(SelectedComponent)
    : SelectedComponent;

  return (
    <div style={solitaireStyle}>
      <ComponentSelector
        state={state}
        setState={setState}
        components={components}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: "1"
        }}
      >
        <DisplayComponent />
      </div>
    </div>
  );
};

export default withState("state", "setState", {
  selectedComponent: undefined,
  useHOCs: true
})(Solitaire);
